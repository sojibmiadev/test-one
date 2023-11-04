import React, { useEffect, useState } from "react";
import Search from "../layouts/Search";
import RecipeList from "../layouts/RecipeList";
import { getRecipes } from "../services/api";

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState("pizza");

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getSearchResult();
  }, [searchQuery]);

  const getSearchResult = async () => {
    let result = await getRecipes(searchQuery);
    if (result && result.recipes) {
      setRecipes(result.recipes);
    }
  };
  return (
    <>
      <Search setSearchQuery={setSearchQuery} />
      <RecipeList recipes={recipes} searchQuery={searchQuery} />
    </>
  );
};

export default Recipes;
