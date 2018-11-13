import styled from "styled-components";
import Flex from "grid-styled/dist/Flex";

export const CloseButton = styled.button`
background: transparent;
height:0;
border: none;
cursor: pointer;
`;
export const ImageContainer = styled(Flex)`
    background-image: url(${props => props.img});
    height: 85px;
    width: 85px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`;
export const Title = styled.span`
font-weight: 600;
text-transform: uppercase;
font-size: 14px;
`;

export const Quantity = styled.span`
font-weight: 300;
font-size: 10px;
color: #999

`;

export const Brand = styled.span`
text-transform: uppercase;
font-weight: normal;
font-size: 10px;
padding-top: 5px;
color: #999
`;

export const Price = styled.span`
font-weight: bold;
font-size: 14px;
padding-top: 5px;
`;