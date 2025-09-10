import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "../components/Select";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    meals: [],
    servings: [],
    difficulty: [],
  });
  const [filter, setFilter] = useState({
    search: "",
    meals: "",
    servings: "",
    difficulty: "",
  });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/recipes");
      const { recipes } = await response.json();
      setRecipes(recipes);
      setFilterOptions({
        meals: [...new Set(recipes.map((r) => r.mealType[0]))].sort(),
        servings: [...new Set(recipes.map((r) => r.servings))].sort(
          (a, b) => a - b
        ),
        difficulty: [...new Set(recipes.map((r) => r.difficulty))],
      });
    }
    fetchData();
  }, []);

  const filteredRecipes = recipes.filter((recipe) => {
    const { search, servings, meals, difficulty } = filter;

    const matchedSearch =
      !search || recipe.name.toLowerCase().includes(search.toLowerCase());

    const matchedMeal =
      !meals || recipe.mealType[0].toLowerCase().includes(meals.toLowerCase());

    const mathcedServing = !servings || recipe.servings === Number(servings);

    const matchedDifficulty =
      !difficulty ||
      recipe.difficulty.toLowerCase().includes(difficulty.toLowerCase());

    return matchedSearch && matchedMeal && mathcedServing && matchedDifficulty;
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Recipes</h2>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-indigo-500"
          value={filter.search}
          onChange={(e) => setFilter({ ...filter, search: e.target.value })}
        />

        <Select
          options={filterOptions.meals}
          defaultOption="All meals"
          value={filter.meals}
          onChange={(e) => setFilter({ ...filter, meals: e.target.value })}
        />
        <Select
          options={filterOptions.servings}
          defaultOption="Servings"
          value={filter.servings}
          onChange={(e) => setFilter({ ...filter, servings: e.target.value })}
        />
        <Select
          options={filterOptions.difficulty}
          defaultOption="Difficulty"
          value={filter.difficulty}
          onChange={(e) => setFilter({ ...filter, difficulty: e.target.value })}
        />
        <input
          type="button"
          value="Clear All"
          className="bg-red-200 rounded px-2 cursor-pointer hover:bg-red-300 transition-colors"
          onClick={() =>
            setFilter({
              search: "",
              meals: "",
              servings: "",
              difficulty: "",
            })
          }
        />
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredRecipes.length === 0 ? (
          <p>No recipe found.</p>
        ) : (
          filteredRecipes
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((recipe) => (
              <li
                key={recipe.id}
                className="bg-white border border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition"
              >
                <Link
                  to={`/doctor/${recipe.id}`}
                  className="text-indigo-600 hover:underline text-lg font-semibold"
                >
                  {recipe.name}
                </Link>
                <div className="text-gray-600 text-sm mt-1">
                  Meal type: {recipe.mealType[0]} <br />
                  Servings: {recipe.servings} <br />
                  Difficulty: {recipe.difficulty}
                </div>
              </li>
            ))
        )}
      </ul>
    </div>
  );
};
export default Recipes;
