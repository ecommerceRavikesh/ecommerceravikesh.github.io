import React from "react";
import { connect } from "react-redux";
import {
  requestAddToCart,
  requestRemoveFromCart,
  requestDecrement
} from "../../redux/modules/product.module";
import { cartAndCountSelector } from "../../redux/selectors/cart.selector";
import { Flex } from "grid-styled";
import { formatPrice } from "../../utils/utilFunctions";
import {
  TableContainer,
  RowContainer,
  SummaryStyle,
  ContinueButton,
  StyledButton,
  SyledLink
} from "./Cart.style";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

const CartTable = props => {
  const { cart } = props;
  return (
    <TableContainer flexDirection={"column"} width={["100%", "90%", "80%"]}>
      <Flex>
        <TableHead />
      </Flex>
      {!!cart.cartItems.length
        ? cart.cartItems.map(item => {
            return (
              <TableRow
                key={item.title}
                increment={() => props.requestAddToCart(item)}
                decrement={() => props.requestDecrement(item)}
                remove={() => props.requestRemoveFromCart(item)}
                item={item}
              />
            );
          })
        : null}

      {!!cart.cartItems.length ? (
        <Flex flex={1} justifyContent={"flex-end"}>
          <Flex width={"40%"} flexDirection={"column"}>
            <Flex m={"10px"}>
              <SummaryStyle width={"50%"}>CART OVERVIEW</SummaryStyle>
            </Flex>
            <Flex m={"10px"}>
              <SummaryStyle width={"50%"}>SUB TOTAL</SummaryStyle>
              <SummaryStyle width={"50%"}>
                {formatPrice(cart.grandTotal)}
              </SummaryStyle>
            </Flex>
            <Flex m={"10px"}>
              <SummaryStyle width={"50%"}>TOTAL</SummaryStyle>
              <SummaryStyle width={"50%"}>
                {formatPrice(cart.grandTotal)} CAD
              </SummaryStyle>
            </Flex>
          </Flex>
        </Flex>
      ) : null}
      <RowContainer />
      <Flex m={"20px"} justifyContent={"space-between"}>
        <SyledLink to={"/"}>
          {" "}
          <ContinueButton>CONTINUE SHOPPING</ContinueButton>
        </SyledLink>
        <StyledButton>
          checkout{" "}
          {cart.cartItems.length ? (
            <span> ({formatPrice(cart.grandTotal)})</span>
          ) : null}
        </StyledButton>
      </Flex>
    </TableContainer>
  );
};

export default connect(
  state => {
    return {
      cart: cartAndCountSelector(state)
    };
  },
  {
    requestAddToCart,
    requestRemoveFromCart,
    requestDecrement
  }
)(CartTable);
