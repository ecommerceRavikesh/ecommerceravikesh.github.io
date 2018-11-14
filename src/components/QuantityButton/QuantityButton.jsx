import React from "react";
import { Flex } from "grid-styled";
import {
  QuantityContainer,
  ValueContainer,
  ButtonContainer
} from "./QuantityButton.style";

const QuantityButton = props => {
  const { value, increment, decrement } = props;
  return (
    <QuantityContainer flexDirection={"row"}>
      <ValueContainer justifyContent={"center"} alignItems={"center"}>
        {value}
      </ValueContainer>
      <Flex flexDirection={"column"}>
        <ButtonContainer onClick={() => increment()} ml={"5px"}>
          +
        </ButtonContainer>
        <ButtonContainer
          onClick={() => (value > 1 ? decrement() : null)}
          ml={"5px"}
          mt={"5px"}
        >
          -
        </ButtonContainer>
      </Flex>
    </QuantityContainer>
  );
};

export default QuantityButton;
