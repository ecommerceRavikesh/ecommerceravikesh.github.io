import Flex from "grid-styled/dist/Flex";
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const CartBanner= styled(Flex)`
font-size: 40px;
text-align: center;
`;

export const ContainerCart= styled(Flex)`
background-color: #f6f6f6;
`;

export const TableContainer= styled(Flex)`
background-color: white;
padding: 40px;
`;

export const RowContainer= styled(Flex)`
border-bottom: 1px solid #ccc;
font-size: 14px;
`;

export const ImageContainer = styled(Flex)`
background-image: url(${props => props.img});
height: 85px;
width: 85px;
background-repeat: no-repeat;
background-position: center center;
background-size: cover;
`;

export const SummaryStyle = styled(Flex)`
text-transform: uppercase;
color: #888;
font-size: 12px;
letter-spacing: 1.5px;
`;

export const ContinueButton = styled.button`
cursor: pointer;
background:transparent;
border:none;
border-bottom:1px solid black;
text-transform: uppercase;
letter-spacing: 0.5px;
font-size: 10px;
height:30px;
color: #888;
`;

export const StyledButton = styled.button`
border: 1px solid black;
background-color: #888 ;
text-transform: uppercase;
letter-spacing: 0.5px;
font-size: 10px;
color: white;
height:40px;
min-width: 200px;
cursor: pointer;
`; 

export const SyledLink = styled(Link)`
width:100%;
color:#000;
text-decoration:none;
text-transform: uppercase;
`;




