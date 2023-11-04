import { Menu } from "semantic-ui-react";
import React from "react";
import logo from "../../assets/react.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Menu borderless>
        <Menu.Item as={Link} to="/">
          <img src={logo} alt="" />
        </Menu.Item>
        <Menu.Item name="Home" as={Link} to="/" />
        <Menu.Item name="Recipes" as={Link} to="/recipes" />
      </Menu>
    </>
  );
};

export default Navbar;
