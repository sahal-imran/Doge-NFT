import React, { useState } from "react";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import AnchorLink from "@mui/material/Link";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function Mint() {
  return (
    <>
      <Box
        id={"Hero"}
        sx={{
          width: "100%",
          height: { md: "100vh" },
          mt: "-350px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            py: 6,
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "SALOON",
              fontSize: { md: "70px", xs: "40px" },
              lineHeight: { md: "80px", xs: "46px" },
              fontWeight: 500,
            }}
          >
            Mint Now
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: "white",
              boxShadow: "none",
              color: "rgb(0,0,0)",
              height: { md: "70px", xs: "60px" },
              fontFamily: "SALOON",
              fontSize: "18px",
              px: { md: 8, xs: 4 },
              lineHeight: "46px",
              fontWeight: 500,
              fontStyle: "italic",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              "&:hover": {
                background: "white",
                boxShadow: "none",
              },
              mt: 4,
            }}
          >
            CONNECT WALLET
          </Button>
          <Box sx={{ flexGrow: 1, mt: 10, width: "100%" }}>
            <Grid container spacing={0} columns={16}>
              {NFTs.map((item, index) => {
                return (
                  <Grid key={index} item xs={2}>
                    <img src={item.URL} alt="img" style={{ width: "100%" }} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          <Typography
            sx={{
              color: "white",
              fontFamily: "SALOON",
              fontSize: { md: "50px", xs: "28px" },
              lineHeight: { md: "60px", xs: "38px" },
              fontWeight: 500,
              textAlign:"center",
              mt: 4,
            }}
          >
            Money Leopard Bar
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Mint;

const NFTs = [
  {
    URL: "/assets/NFT's/1.png",
  },
  {
    URL: "/assets/NFT's/2.png",
  },
  {
    URL: "/assets/NFT's/3.png",
  },
  {
    URL: "/assets/NFT's/4.png",
  },
  {
    URL: "/assets/NFT's/5.png",
  },
  {
    URL: "/assets/NFT's/6.png",
  },
  {
    URL: "/assets/NFT's/7.png",
  },
  {
    URL: "/assets/NFT's/8.png",
  },
];
