import React, { Fragment } from "react";
import NavItem from "./NavItem";



const Navigation = props => {
  return (
    <Fragment>
      <NavItem to={"/"} label="Home" isMenu={false}></NavItem>
      <NavItem to={"/"} label="Shop" isMenu={true}></NavItem>
      <NavItem to={"/"} label="Jaurnal" isMenu={false}></NavItem>
      <NavItem to={"/"} label="More" isMenu={true}></NavItem>
    </Fragment>
  );
}

export default Navigation;
