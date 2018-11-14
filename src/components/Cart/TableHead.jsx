import React from "react";
import { Box } from "grid-styled";

import { RowContainer } from "./Cart.style";

const TableHead = () => {
  return (
    <RowContainer pb={3} flex={1} flexDirection={["column", "row"]}>
      <Box w={"50%"}>PRODUCT</Box>
      <Box w={"20%"}>QUANTITY</Box>
      <Box w={"20%"}>TOTAL</Box>
      <Box w={"10%"}>ACTION</Box>
    </RowContainer>
  );
};

export default TableHead;
