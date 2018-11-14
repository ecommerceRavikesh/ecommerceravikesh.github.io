import React from "react";
import { Flex } from "grid-styled";
import { formatPrice } from "../../utils/utilFunctions";
import { RowContainer } from "./Cart.style";
import {
  ImageContainer,
  Title,
  Brand,
  Price
} from "../../utils/sharedStyled";
import { CloseButton } from "../../utils/sharedStyled";
import { QuantityButton } from "../QuantityButton";
const TableRow = props => {
  const { item, increment, decrement, remove } = props;
  const imge = `/media/${item.image}`;
  return (
    <RowContainer pb={4} mt={4} flexDirection={["column", "row"]}>
      <Flex w={"50%"} mb={2}>
        <ImageContainer width={"30%"} img={imge} />
        <Flex width={"70%"}>
          <Flex width={7 / 8} pl={3}>
            <Flex flexDirection={"column"}>
              <Title>{`${item.title}`}</Title>
              <Brand> {`${item.brand}`}</Brand>
              <Price> {`${formatPrice(item.price)}`}</Price>
            </Flex>
          </Flex>
          <Flex width={1 / 8} justifyContent={"flex-end"} />
        </Flex>
      </Flex>
      <Flex w={"20%"} mb={2}>
        <QuantityButton
          value={item.quantity}
          increment={increment}
          decrement={decrement}
        />
      </Flex>
      <Flex w={"20%"} mb={2}>
        {`${formatPrice(item.total)}`}
      </Flex>
      <Flex w={"10%"} mb={2}>
        <CloseButton onClick={remove}>&#x2716;</CloseButton>
      </Flex>
    </RowContainer>
  );
};

export default TableRow;
