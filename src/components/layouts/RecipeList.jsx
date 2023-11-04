import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import RecipeListItem from "./RecipeListItem";

const RecipeList = ({ recipes, searchQuery }) => {
  return (
    <>
      <Container>
        <Header
          content={`Recipes List for ${searchQuery}`}
          textAlign="center"
          className="input-header"
        />
        <Grid columns={4} doubling>
          {recipes &&
            recipes.map((recipe, index) => (
              <Grid.Column>
                <RecipeListItem key={index} recipe={recipe} />
              </Grid.Column>
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default RecipeList;
