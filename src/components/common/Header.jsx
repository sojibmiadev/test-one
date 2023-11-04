import React from "react";

const Header = (props) => {
  return (
    <div className={props.bgClass}>
      <div className="text-content">
        <h2 className="header-title">{props.title}</h2>
        {props.children}
      </div>
    </div>
  );
};

export default Header;
