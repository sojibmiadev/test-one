import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";

const RecipeListItem = ({ recipe }) => {
  return (
    <>
      <Card>
        <img
          src={recipe.image_url}
          alt="recipe_Img"
          style={{ height: "170px" }}
        />
        <Card.Content>
          <Card.Header content={recipe.title} />
          <Card.Description>
            <h4>{recipe.publisher}</h4>
          </Card.Description>
        </Card.Content>

        <Card.Content>
          <Button
            as={Link}
            to={`/recipes/${recipe.recipe_id}`}
            content="Detailes"
            color="blue"
            size="tiny"
          />

          <Button
            href={recipe.source_url}
            target="_blank"
            content="Recipe URL"
            color="green"
            size="tiny"
          />
        </Card.Content>
      </Card>
    </>
  );
};

export default RecipeListItem;
