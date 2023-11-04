import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Grid, Header, Image, Segment } from "semantic-ui-react";
import { getRecipe } from "../services/api";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState({});

  const { recipeid } = useParams();

  useEffect(() => {
    const getData = async () => {
      let result = await getRecipe(recipeid);
      if (result && result.recipe) {
        setRecipe(result.recipe);
      }
    };
    getData();
  }, []);

  return Object.keys(recipe).length > 0 ? (
    <Grid container stackable columns={2} className="detailsPage">
      <Grid.Column>
        <Button
          as={Link}
          to={"/recipes"}
          content="Back to recipi List"
          color="yellow"
          style={{ marginBottom: 20 }}
        />
        <Image src={recipe.Image_url} />
      </Grid.Column>
      <Grid.Column>
        <Header size="medium">{recipe.title}</Header>
        <p>Provide by : {recipe.publisher}</p>
        <Button
          as={"a"}
          href={recipe.publisher_url}
          content="Publisher Webpage"
          color="red"
        />
        <Button
          as={"a"}
          href={recipe.source_url}
          content="recipe URL"
          color="black"
        />
        <Header size="large" content="Ingredents" />
        <Segment.Group>
          {recipe &&
            recipe.ingredients.map((data) => (
              <Segment>
                <h5>{data}</h5>
              </Segment>
            ))}
        </Segment.Group>
      </Grid.Column>
    </Grid>
  ) : null;
};

export default RecipeDetails;
