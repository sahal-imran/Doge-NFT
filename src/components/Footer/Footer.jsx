import React, { useState } from "react";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import AnchorLink from "@mui/material/Link";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function Footer() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          pt:{md:8,xs:4},
          pb: { md: 2 , xs: 2 },
          borderBottom: "12px solid #b8bb2a",
        }}
      >
        <Container
          maxWidth="lgBig"
          sx={{
            display: "flex",
            justifyContent: { md: "space-between", xs: "center" },
            alignItems: "center",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          {/* copyright */}
          <Typography
            sx={{
              color: "white",
              fontFamily: "SALOON",
              fontSize: { md: "18px", xs: "16px" },
              lineHeight: { md: "28px", xs: "26px" },
              fontWeight: 500,
            }}
          >
            © 2022 DOGC
          </Typography>

          {/* Logo */}
          <Box sx={{ width: "172px", height: "66px",my:{md:0,xs:3} }}>
            <img
              src="/assets/logo.png"
              alt="Logo"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>

          {/* social links */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {ExternalLinks.map((item, index) => {
              return (
                <AnchorLink key={index} href={item.URL}>
                  <Box
                    sx={{
                      width: "26px",
                      height: "26px",
                      cursor: "pointer",
                      mr: { lg: 3, md: 2 },
                    }}
                  >
                    <img
                      src={item.Ico}
                      alt="Logo"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </AnchorLink>
              );
            })}
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Footer;

const ExternalLinks = [
  {
    URL: "",
    Ico: "/assets/opensea.png",
  },
  {
    URL: "",
    Ico: "/assets/twitter.png",
  },
  {
    URL: "",
    Ico: "/assets/discord.png",
  },
  {
    URL: "",
    Ico: "/assets/telegram.png",
  },
];
