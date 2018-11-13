import React, { Fragment } from "react";
import { Flex, Box } from "grid-styled";
import { formatPrice } from"../../utils/utilFunctions";
import { ImageContainer, Title, Quantity, Brand, Price } from "../../utils/sharedStyled";
import { CloseButton } from "../../utils/sharedStyled";


const CartItem = props => {
   const { item, removeItem } = props;
   const image = `/media/${item.image}`;
  return (
    <Flex flex={1} m={2} flexDirection="row">
     
      <ImageContainer  img={image}></ImageContainer>
      <Flex flex={1}>
      <Box width={7/8} pl={3} >
      <Flex flexDirection={"column"}>
      <Title> {`${item.title}`} <Quantity> &#x2716;{` ${item.quantity}`} </Quantity></Title>
      <Brand> {`${item.brand}`}</Brand>
      <Price> {`${formatPrice(item.total)}`}</Price>
      </Flex>

      </Box>
      <Flex  width={1/8}  justifyContent={"flex-end"}>
          <CloseButton onClick={()=>{removeItem(item)}}>&#x2716;</CloseButton>
      </Flex>
      </Flex>
    
    </Flex>
  );
}

export default CartItem;
