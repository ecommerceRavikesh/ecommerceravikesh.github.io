import React from "react";
import { connect } from "react-redux";
import Flex from "grid-styled/dist/Flex";
import {
  ProductContainer,
  ImageContainer,
  Brand,
  Title,
  Description,
  BackButton,
  SyledLink
} from "./Product.style";

const Product = props => {
  const { product } = props;
  const image = `/media/${product.image}`;

  return (
    <ProductContainer flex={1} justifyContent={"center"} pt={"80px"}>
      <ImageContainer img={image} />
      <Flex flexDirection={"column"} m={"20px"} width={"300px"}>
        <Brand flex={1} justifyContent={"center"}>
          {product.brand}
        </Brand>
        <Title flex={1} justifyContent={"center"}>
          {product.title}
        </Title>
        <Description flexDirection={"column"} flex={1} justifyContent={"center"}>
          {product.description}
          <SyledLink to="/">
            <BackButton>Back to Home</BackButton>
          </SyledLink>
        </Description>
      </Flex>
    </ProductContainer>
  );
};

export default connect(
  (state, ownProps) => {
    return {
      product: state.products.prods.filter(
        item => item.title === ownProps.match.params.productTitle
      )[0]
    };
  },
  {}
)(Product);
