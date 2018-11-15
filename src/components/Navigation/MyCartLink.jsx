import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { Flex } from "grid-styled";
import CartItem from "./CartItem";
import {
  SyledButton,
  CartPopup,
  TotalContainer,
  StyledButton,
  Overlay,
  SyledLink
} from "./Navigation.style";
import { cartAndCountSelector } from "../../redux/selectors/cart.selector";
import { formatPrice } from "../../utils/utilFunctions";
import { requestRemoveFromCart } from "../../redux/modules/product.module";
const style = { fontSize: "10px" };
class MyCartLink extends Component {
  state = {
    isPopup: false
  };

  togglePopup = () => {
    this.setState((prevState) => {
      return { isPopup: !prevState.isPopup };
    });
  };

  removeFromCart = payload => {
    this.props.requestRemoveFromCart(payload);
  };

  render() {
    const { cartDetails } = this.props;

    return (
      <Flex m={1}>
        <SyledButton onClick={this.togglePopup}>
          MY CART ({cartDetails.numberOfItems})
          <span style={style}> &#9660;</span>
        </SyledButton>

        {this.state.isPopup ? (
          <Fragment>
            <Overlay onClick={this.togglePopup} />
            <CartPopup flexDirection={"column"}>
              {!!cartDetails.numberOfItems ? (
                <Fragment>
                  {cartDetails.cartItems.map(item => {
                    return (
                      <CartItem
                        key={item.title}
                        removeItem={this.removeFromCart}
                        item={item}
                      />
                    );
                  })}

                  <TotalContainer justifyContent={"space-around"}>
                    <span>Total</span>
                    <span>{formatPrice(cartDetails.grandTotal)}</span>
                  </TotalContainer>
                </Fragment>
              ) : null}
              <Flex flex={1} m={"10px"}>
                <Flex flex={1}>
                  <SyledLink to="/cart">
                    <StyledButton
                      onClick={this.togglePopup}
                      bgColor="white"
                      color="#444"
                    >
                      View Cart
                    </StyledButton>
                  </SyledLink>
                </Flex>
                <Flex flex={1}>
                  <StyledButton
                    onClick={this.togglePopup}
                    bgColor="black"
                    color="#ccc"
                  >
                    checkout
                  </StyledButton>
                </Flex>
              </Flex>
            </CartPopup>{" "}
          </Fragment>
        ) : null}
      </Flex>
    );
  }
}

export default connect(
  state => {
    return {
      cartDetails: cartAndCountSelector(state)
    };
  },
  {
    requestRemoveFromCart
  }
)(MyCartLink);
