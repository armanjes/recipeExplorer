import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import Footer from "./components/Footer";
import Recipe from './components/Recipe';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
