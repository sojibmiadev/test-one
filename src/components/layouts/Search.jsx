import React, { useState } from "react";
import { Form, Grid, Input } from "semantic-ui-react";

const Search = ({ setSearchQuery }) => {
  const [getValue, setGetValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(getValue);
  };

  return (
    <>
      <Grid columns={2} textAlign="center" className="search-box">
        <Grid.Column>
          <h2>
            Search Recipes with{" "}
            <span style={{ color: "#00D8FF" }}>Our Recipe</span>
          </h2>
          <h4>Input recipes Seperated by comma</h4>
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="tomato, potato, pizza"
              action={{ icon: "search", color: "blue" }}
              value={getValue}
              onChange={(e) => setGetValue(e.target.value)}
            />
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Search;
