import React from "react";
import { Flex } from "grid-styled";
import { SyledLink } from "./Navigation.style";

const style = { fontSize: "10px" };
const NavItem = props => {
  const { to, label, isMenu } = props;
  return (
    <Flex m={2}>
      <SyledLink to={to}>
        {label} {isMenu ? <span style={style}>&#9660;</span> : null}
      </SyledLink>
    </Flex>
  );
};

export default NavItem;
