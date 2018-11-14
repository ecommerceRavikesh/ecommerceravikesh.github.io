import React from "react";
import { Flex } from "grid-styled";
import { CartBanner, ContainerCart } from "./Cart.style";
import CartTable from "./CartTable";

const Cart = props => {
  return (
    <ContainerCart
      p={"40px"}
      flex={1}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <CartBanner justifyContent={"center"} pb={"40px"}>
        Shopping Cart
      </CartBanner>
      <Flex justifyContent={"center"}>
        <CartTable />
      </Flex>
    </ContainerCart>
  );
};

export default Cart;
