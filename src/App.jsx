import React from "react";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Recipes from "./components/pages/Recipes";
import RecipeDetails from "./components/layouts/RecipeDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:recipeid" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
