import Flex from "grid-styled/dist/Flex";
import styled from "styled-components";

export const ProductContainer = styled(Flex)``;

export const ImageContainer = styled(Flex)`
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 300px;
  height: 300px;
`;

export const Brand = styled(Flex)`
  'font-family':'Roboto','Helvetica', 'Arial', sans ;
  'font-size':14px ;
  color: #888;
  margin-bottom: 1.5vh;
`;
export const Title = styled(Flex)`
  font-family: "Playfair Display", "Georgia", serif;
  font-size: 20px;
  color: #999;
  margin-bottom: 1.5vh;
`;
export const Description = styled(Flex)`
  font-family: "Roboto", "Helvetica", "Arial", sans;
  font-size: 12px;
  line-height: 20px;
  color: #444;
  padding-bottom: 1.5vh;
  margin-bottom: 1.5vh;
  border-bottom: 1px solid #ccc;
`;
