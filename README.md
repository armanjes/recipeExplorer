---

# 🍳 Recipe App

A modern and interactive recipe browsing application built with **React**, **Tailwind CSS**, and **React Router DOM**.
This app allows users to search, filter, and explore recipes dynamically, with detailed recipe pages and "You may also like" suggestions.

---

## 🚀 Tech Stack

* **React.js** – Frontend framework
* **React Router DOM** – Client-side routing & dynamic routing
* **Tailwind CSS** – Styling and responsive UI
* **Fetch API** – Fetching data from [DummyJSON Recipes API](https://dummyjson.com/recipes)

---

## ✨ Features

✅ **Browse Recipes** – Display all recipes from API
✅ **Search Recipes** – Search by recipe name
✅ **Filter Options** – Filter by:

* Meal Type (e.g., Breakfast, Lunch, Dinner)
* Servings
* Difficulty (Easy, Medium, Hard)
  ✅ **Routing** – Navigate between pages
  ✅ **Dynamic Routing** – Open detailed recipe pages using `/recipes/:id`
  ✅ **Similar Recipes** – "You may also like" section showing related recipes
  ✅ **Responsive UI** – Mobile-first design with Tailwind

---

## 📸 Screenshots

*Add some screenshots here (e.g., homepage, recipe details, search results).*

```md
![Homepage Screenshot](./screenshots/home.png)
![Recipe Page Screenshot](./screenshots/recipe.png)
```

---

## 📂 Project Structure

```
recipe-app/
│── public/
│── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components (Home, Recipe, etc.)
│   ├── App.jsx          # Main app with routes
│   ├── index.css        # Tailwind entry
│   ├── main.jsx         # React entry point
│── package.json
│── tailwind.config.js
│── README.md
```

---

## ⚙️ Installation & Setup

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/recipe-app.git
   cd recipe-app
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Run development server

   ```bash
   npm run dev
   ```

4. Open in browser

   ```
   http://localhost:5173
   ```

---

## 🔗 API Reference

All recipes are fetched from:
👉 [DummyJSON Recipes API](https://dummyjson.com/recipes)

* Get all recipes → `https://dummyjson.com/recipes`
* Get recipe by ID → `https://dummyjson.com/recipes/:id`

---

## 🛠 Future Improvements

* 🍔 Add favorites / bookmarking system
* ⭐ Rating & reviews for recipes
* 📝 User authentication (sign in to save recipes)
* 🛒 Shopping list from ingredients

---

## 🤝 Contributing

Contributions are always welcome!

* Fork the repo
* Create a new branch
* Make your changes
* Submit a pull request

---

## 📜 License

This project is licensed under the **MIT License**.

---