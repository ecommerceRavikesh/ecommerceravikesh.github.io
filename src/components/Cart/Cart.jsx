import React, { Fragment } from "react";
import { Flex, Box } from "grid-styled";
import { formatPrice } from"../../utils/utilFunctions";
import { CartBanner, ContainerCart } from "./Cart.style";
import CartTable  from "./CartTable";
import { CloseButton } from "../../utils/sharedStyled";


const Cart = props => {
  return (
    <ContainerCart p={"40px"}  flex={1} flexDirection={"column"} justifyContent={"center"}>
     <CartBanner justifyContent={"center"} pb={"40px"} >Shopping Cart</CartBanner>
     <Flex justifyContent={"center"}>
      <CartTable></CartTable>
     </Flex>
    </ContainerCart>
  );
}

export default Cart;
