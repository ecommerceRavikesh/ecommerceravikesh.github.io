import React, { Fragment } from "react";
import { Flex, Box } from "grid-styled";
import { formatPrice } from"../../utils/utilFunctions";
import { QuantityContainer, ValueContainer, ButtonContainer} from "./QuantityButton.style";
import { CloseButton } from "../../utils/sharedStyled";


const QuantityButton = props => {
    const { value, increment, decrement} = props;
  return (
    <QuantityContainer flexDirection={"row"}>
    <ValueContainer justifyContent={"center"} alignItems={"center"}>{value}</ValueContainer>
    <Flex flexDirection={"column"}>
     <ButtonContainer onClick={()=>increment()} ml={"5px"}>+</ButtonContainer>
     <ButtonContainer onClick={()=>value>1?decrement():null} ml={"5px"} mt={"5px"}>-</ButtonContainer>
    </Flex>
    </QuantityContainer>
  );
}

export default QuantityButton;