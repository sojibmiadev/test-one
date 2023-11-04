import axios from "axios";

// let api = "https://forkify-api.herokuapp.com/api";

export const getRecipes = async (searchQuery) => {
  try {
    let res = await axios.get(
      `https://forkify-api.herokuapp.com/api/search?q=${searchQuery}`
    );
    return res.data;
  } catch (err) {
    console.log("Error While Calling the api ", err.message);
    return err.res;
  }
};

export const getRecipe = async (searchQuery) => {
  try {
    let res = await axios.get(
      `https://forkify-api.herokuapp.com/api/get?rId=${searchQuery}`
    );
    return res.data;
  } catch (err) {
    console.log("Error While Calling the api ", err.message);
    return err.res;
  }
};
