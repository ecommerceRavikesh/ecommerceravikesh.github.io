import React, { Fragment, Component } from "react";
import { Flex } from "grid-styled";
import { Header } from "../Header";
import { Container } from "./MainContainer.style";
import { Navigation, MyCartLink } from "../Navigation";
import Routes from "../../routes";

class MainContainer extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Header>
            <Flex width={3 / 5} justifyContent="center">
              <Navigation />
            </Flex>
            <Flex width={2 / 5} justifyContent="flex-end">
              <MyCartLink />
            </Flex>
          </Header>
        </Container>
        <Container>
          <Flex flexDirection={"row"} flex={1}>
            <Routes />
          </Flex>
        </Container>
      </Fragment>
    );
  }
}

export default MainContainer;
