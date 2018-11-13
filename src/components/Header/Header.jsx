import React, { Fragment } from "react";
import Flex from "grid-styled/dist/Flex";
import { HeadContainer } from "./Header.style";

const Header = (props) => (
    <Fragment>
        <HeadContainer flexDirection={['column', 'column', 'row']} background={props.color}>
            <Flex mx={'10px'} >
              <img alt="Logo" src="../media/logo.png" />
            </Flex>
            <Flex alignItems="center" flex="1" mr={[0,4,6]}>
                {props.children}
            </Flex>
        </HeadContainer>
    </Fragment>
);

export default Header;
