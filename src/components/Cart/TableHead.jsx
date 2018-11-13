import React, { Fragment } from "react";
import { Flex, Box } from "grid-styled";
import { formatPrice } from"../../utils/utilFunctions";
import { TableContainer } from "./Cart.style";
import { RowContainer } from "./Cart.style";
import { CloseButton } from "../../utils/sharedStyled";


const TableHead = props => {
  return (
         <RowContainer  pb={3} flex={1} flexDirection={["column","row"]}>
         <Box w={"50%"}>
         PRODUCT
         </Box>
         <Box w={"20%"}>
         QUANTITY
         </Box>
         <Box w={"20%"}>
         TOTAL
         </Box>
         <Box w={"10%"}>
         ACTION
         </Box>
         </RowContainer>
  );
}

export default TableHead;