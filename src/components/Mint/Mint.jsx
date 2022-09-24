import React, { useState } from "react";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import AnchorLink from "@mui/material/Link";
import Button from "@mui/material/Button";

function Mint() {
  return (
    <>
      <Box
        id={"Hero"}
        sx={{
          width: "100%",
          height: "100vh",
          background: "rgba(0,0,0,0.5)",
          mt: "-350px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
          }}
        ></Box>
      </Box>
    </>
  );
}

export default Mint;
