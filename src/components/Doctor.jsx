import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [alsoLike, setAlsoLike] = useState([]);

  useEffect(() => {
    async function fetchRecipe() {
      const response = await fetch(`https://dummyjson.com/recipes/${id}`);
      const result = await response.json();
      setRecipe(result);
      
    }
    fetchRecipe();
  }, [id]);

  useEffect(() => {
    if (!recipe) return;

    async function fetchMoreRecipe() {
      const response = await fetch(`https://dummyjson.com/recipes`);
      const { recipes } = await response.json();

      const similar = recipes.filter((r) => {
        return r.mealType[0] === recipe.mealType[0] && r.id !== recipe.id;
      });

      setAlsoLike(similar);
    }
    fetchMoreRecipe();
  }, [recipe]);

  if (!recipe)
    return (
      <p className="flex items-center justify-center min-h-screen font-bold text-4xl">
        Loading...
      </p>
    );

  return (
    <div>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold">{recipe.name}</h1>
        <img src={recipe.image} alt={recipe.name} className="rounded mt-4" />
        <p className="mt-2">🍽 Servings: {recipe.servings}</p>
        <p className="mt-1">
          ⏱ Prep: {recipe.prepTimeMinutes} min • Cook: {recipe.cookTimeMinutes}{" "}
          min
        </p>
        <p className="mt-1">🔥 Difficulty: {recipe.difficulty}</p>

        <h2 className="text-xl font-semibold mt-4">Ingredients</h2>
        <ul className="list-disc ml-6">
          {recipe.ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-4">Instructions</h2>
        <ol className="list-decimal ml-6">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="mt-1">
              {step}
            </li>
          ))}
        </ol>
      </div>
      <div className="w-full px-8">
        <h1 className="text-2xl font-semibold">You may also like</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {alsoLike.length === 0 ? (<p>No suggestion.</p>) : alsoLike.map((recipe) => (
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
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Recipe;
