import React, { Component } from "react";
import { connect } from "react-redux";
import { Flex } from "grid-styled";
import { ProductCard } from "../../components/ProductCard";
import { HomeContainer, TextContainer, MainText, FootText } from "./Home.style";
import {
  requestProducts,
  requestAddToCart
} from "../../redux/modules/product.module";

class Home extends Component {
  componentWillMount() {
    this.props.requestProducts();
  }
  addToCart = item => {
    this.props.requestAddToCart(item);
  };
  render() {
    const { products } = this.props;

    if (products.loading || !products.prods) {
      return (
        <Flex justifyContent={"center"} pt={"15%"}>
          {" "}
          Loading...
        </Flex>
      );
    }
    return (
      <Flex flex={1} flexDirection={"column"}>
        <HomeContainer flex={1} justifyContent={"center"}>
          <TextContainer
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <MainText>Plates</MainText>
            <FootText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at purus pulvinar, placerate turpis ac. In egat massa sed enim
              henderrit auctor a eget arcu. Curabitur ac pharetra nisl sit.
            </FootText>
          </TextContainer>
        </HomeContainer>
        <Flex wrap={"wrap"} justifyContent={"space-around"}>
          {products.prods.map(item => {
            return (
              <ProductCard
                key={item.title}
                prodDetail={item}
                addToCart={this.addToCart}
              />
            );
          })}
        </Flex>
      </Flex>
    );
  }
}

export default connect(
  state => {
    return {
      products: state.products,
      cart: state.cart
    };
  },
  {
    requestProducts,
    requestAddToCart
  }
)(Home);
