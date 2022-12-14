import React from "react";
import { Box } from "./header.box";

function HeaderLayout({ children }) {
  return (
    <Box
      css={{
        maxW: "100%",
      }}
    >
      {children}
      {/* <Content /> */}
    </Box>
  );
}

export default HeaderLayout;
