import Flex from "grid-styled/dist/Flex";
import styled from "styled-components";

export const HomeContainer = styled(Flex)`
background-image: url('/media/plates-header.jpg');
background-repeat: no-repeat;
background-position: center center;
background-size: cover;
width: 10012;
height: 30vh;
`;

export const TextContainer = styled(Flex)`
width:50%;
height:100%;
background-color: #393935;
`;

export const MainText = styled.div`
color: white;
font-size: 35px;
letter-spacing: 2px;
padding: 10px;
border-bottom: 1px solid white;
`;

export const FootText = styled.div`
font-weight: 300;
color: white;
font-size: 12px;
text-align: center;
margin: 2vh 7vw;
line-height: 15px;
`;
