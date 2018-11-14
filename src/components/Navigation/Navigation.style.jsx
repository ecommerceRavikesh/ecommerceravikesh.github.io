import Flex from "grid-styled/dist/Flex";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const SyledLink = styled(Link)`
  width: 100%;
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
`;

export const SyledButton = styled.button`
  color: #000;
  margin-left: 10px;
  text-decoration: none;
  background: transparent;
  border: none;
  &:hover {
    border-bottom: 1px solid black;
  }
`;

export const CartPopup = styled(Flex)`
  position: absolute;
  right: 20px;
  margin-top: 30px;
  z-index: 2000;
  box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  height: auto;
  width: 380px;
`;

export const TotalContainer = styled(Flex)`
  text-transform: uppercase;
  justify-content: space-between;
  margin: 10px;
  padding-top: 20px;
  border-top: 1px solid #ccc;
  font-size: 12px;
  letter-spacing: 2px;
  color: #888;
`;

export const StyledButton = styled.button`
  border: 1px solid black;
  background-color: ${props => props.bgColor};
  text-transform: uppercase;
  padding: 20px;
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.color};
  width: 100%;
  margin: 5px;
  cursor: pointer;
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
  z-index: 1900;
`;
