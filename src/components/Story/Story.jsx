import React, { useState } from "react";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import AnchorLink from "@mui/material/Link";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Marquee from "react-fast-marquee";

function Story() {
  return (
    <>
      <Box
      id={"Story"}
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          borderBottom: "2px solid #b8bb2a",
        }}
      >
        <Container
          maxWidth="lgBig"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "SALOON",
              fontSize: { md: "46px", xs: "28px" },
              lineHeight: { md: "60px", xs: "36px" },
              fontWeight: 500,
            }}
          >
            The Story
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Montserrat",
              fontSize: "36px",
              lineHeight: "46px",
              fontWeight: 700,
              mt: 2,
            }}
          >
            Lineage
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Montserrat",
              fontSize: "16px",
              lineHeight: "26px",
              fontWeight: 400,
              mt: 1,
            }}
          >
            The doge club comes from three important lineages in the Web3 and
            NFT universe: Doge and Bored Ape Yacht Club, Bored Ape Kennel Club.
          </Typography>
        </Container>

        {/* First Slider */}
        <Box
          sx={{
            width: "100%",
            mt: 6,
          }}
        >
          <Marquee
            speed={20}
            gradient={false}
            pauseOnHover={true}
            style={{
              background: "black",
              backdropFilter: "blur(20px)",
            }}
          >
            {NFTs.map((NFT, index) => {
              return (
                <Box
                  key={index}
                  sx={{ px: 1, "&:hover img": { transform: "scale(1.2)" } }}
                >
                  <Box
                    sx={{
                      width: "11.25rem",
                      height: "11.25rem",
                      borderRadius: "5px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={NFT.URL}
                      alt="img"
                      style={{
                        width: "100%",
                        height: "100%",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </Box>
                </Box>
              );
            })}
          </Marquee>
        </Box>
        {/* second Slider */}
        <Box
          sx={{
            width: "100%",
            mt: 6,
          }}
        >
          <Marquee
            speed={20}
            gradient={false}
            pauseOnHover={true}
            direction={"right"}
            style={{
              background: "black",
              backdropFilter: "blur(20px)",
            }}
          >
            {NFTs.map((NFT, index) => {
              return (
                <Box
                  key={index}
                  sx={{ px: 1, "&:hover img": { transform: "scale(1.2)" } }}
                >
                  <Box
                    sx={{
                      width: "11.25rem",
                      height: "11.25rem",
                      borderRadius: "5px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={NFT.URL}
                      alt="img"
                      style={{
                        width: "100%",
                        height: "100%",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </Box>
                </Box>
              );
            })}
          </Marquee>
        </Box>
      </Box>
    </>
  );
}

export default Story;

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
  {
    URL: "/assets/NFT's/8.png",
  },
];
