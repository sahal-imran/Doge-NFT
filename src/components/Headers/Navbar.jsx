import React, { useState } from "react";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Link } from "react-scroll";
import AnchorLink from "@mui/material/Link";
import Button from "@mui/material/Button";
import { Divide as Hamburger } from "hamburger-react";
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: "rgb(0,0,0)",
          borderTop: "4px solid #b8bb2a",
        }}
      >
        <Container
          maxWidth="lgBig"
          sx={{
            height: "98px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Box sx={{ width: "172px", height: "66px" }}>
            <img
              src="/assets/logo.png"
              alt="Logo"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>

          {/* Nav Menu */}
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {Menu.map((item, index) => {
              return (
                <Link
                  key={index}
                  activeClass="active"
                  to={item.Name}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  duration={1000}
                  isDynamic={true}
                  spyThrottle={500}
                >
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      lineHeight: "20px",
                      fontWeight: 600,
                      fontStyle: "italic",
                      color: "white",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      mr: { lg: 4, xs: 3 },
                      "&:hover": {
                        color: "#b8bb2a",
                      },
                    }}
                  >
                    {item.Name}
                  </Typography>
                </Link>
              );
            })}
          </Box>

          {/* Wallet button and icons */}
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
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
            <Button
              variant="contained"
              sx={{
                background: "#b8bb2a",
                boxShadow: "none",
                color: "rgb(0,0,0)",
                height: "46px",
                fontFamily: "Montserrat",
                fontSize: "18px",
                lineHeight: "46px",
                fontWeight: 700,
                fontStyle: "italic",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                "&:hover": {
                  background: "white",
                  boxShadow: "none",
                },
              }}
            >
              CONNECT WALLET
            </Button>
          </Box>

          {/* Hamburgar */}
          <Box
            sx={{
              display: { md: "none", xs: "block" },
            }}
          >
            <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
          </Box>
        </Container>
      </Box>

      {/* Phone navbar */}
      <Drawer
        open={isOpen}
        onClose={() => setOpen(!isOpen)}
        direction="left"
        className="Drawer"
        style={{ width: "100%", background: "#b8bb2a" }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            px: 2,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "98px",
            }}
          >
            <Box sx={{ width: "172px", height: "66px" }}>
              <img
                src="/assets/logo.png"
                alt="Logo"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>
            <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
          </Box>

          {/* Nav Menu */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              mt: 3,
            }}
          >
            {Menu.map((item, index) => {
              return (
                <Link
                  key={index}
                  activeClass="activeMobile"
                  to={item.Name}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  duration={1000}
                  isDynamic={true}
                  spyThrottle={500}
                >
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: "18px",
                      lineHeight: "20px",
                      fontWeight: 600,
                      fontStyle: "italic",
                      color: "black",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      mb: 4,
                      "&:hover": {
                        color: "white",
                      },
                    }}
                  >
                    {item.Name}
                  </Typography>
                </Link>
              );
            })}
          </Box>

          {/* Wallet button and icons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              mt: 3,
            }}
          >
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
                      sx={
                        index === 3
                          ? {
                              width: "26px",
                              height: "26px",
                              cursor: "pointer",
                            }
                          : {
                              width: "26px",
                              height: "26px",
                              cursor: "pointer",
                              mr: 2,
                            }
                      }
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
            <Button
              variant="contained"
              sx={{
                background: "white",
                boxShadow: "none",
                color: "rgb(0,0,0)",
                height: "46px",
                fontFamily: "Montserrat",
                fontSize: "18px",
                lineHeight: "46px",
                fontWeight: 700,
                fontStyle: "italic",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                "&:hover": {
                  background: "white",
                  boxShadow: "none",
                },
                mt: 2,
              }}
            >
              CONNECT WALLET
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;

const Menu = [
  {
    Name: "Mint",
  },
  {
    Name: "Story",
  },
  {
    Name: "Utility",
  },
  {
    Name: "Team",
  },
  {
    Name: "FAQ",
  },
];

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
