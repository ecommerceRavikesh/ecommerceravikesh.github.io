import Flex from "grid-styled/dist/Flex";
import Box from "grid-styled/dist/Box";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductContainer = styled(Flex)`
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 300px;
  height: 200px;
`;

export const OverlayProduct = styled(Flex)`
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.2);
  &:hover {
    opacity: 1;
  }
`;

export const ProductButton = styled.button`
  border: 1px solid black;
  width: 96%;
  background-color: black;
  text-transform: uppercase;
  padding: 20px;
  font-size: 12px;
  font-weight: bold;
  color: white;
  margin: 5px;
  cursor: pointer;
`;

export const DescriptionBox = styled(Box)`
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 14px;
`;

export const SyledLink = styled(Link)`
  width: 100%;
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
`;
