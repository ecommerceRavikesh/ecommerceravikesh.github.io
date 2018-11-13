import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import { Flex, Box } from "grid-styled";
import { ProductContainer, OverlayProduct, ProductButton, DescriptionBox } from "./ProductCard.style";
import { formatPrice } from "../../utils/utilFunctions";


const ProductCard = props => {
    const { prodDetail } = props;
    const image = `/media/${prodDetail.image}`;
    return (
        <Flex m={4} flexDirection={"column"}>
            <ProductContainer img={image} >
                <OverlayProduct flexDirection={"column"} justifyContent={"center"}>
                    <ProductButton>product Details</ProductButton>
                    <ProductButton onClick={()=>props.addToCart(prodDetail)}>Add to cart</ProductButton>
                </OverlayProduct>
            </ProductContainer>
            <Flex pt={2} flex={1} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                <Box>{`${prodDetail.brand}`} </Box>
                <DescriptionBox>{`${prodDetail.title}`} </DescriptionBox>
                <Box>{formatPrice(prodDetail.price)} </Box>
            </Flex>
        </Flex>
    );
}



export default ProductCard;
