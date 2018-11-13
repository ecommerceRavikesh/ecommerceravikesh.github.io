import React, { Fragment } from "react";
import PropTypes from "prop-types";
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


Header.propTypes = {
    children: PropTypes.node.isRequired
};

Header.defaultProps = {
    children: () => (<div></div>)
};

export default Header;
