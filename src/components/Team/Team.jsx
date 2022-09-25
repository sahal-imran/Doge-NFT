import React, { useState } from "react";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import AnchorLink from "@mui/material/Link";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function Team() {
  return (
    <>
      <Box
        id={"Team"}
        sx={{
          width: "100%",
          height: { md: "100vh" },
          py: { md: 0, xs: 8 },
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
            alignItems: "center",
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
              textAlign: "center",
              filter: "drop-shadow(2px 5px 0px #0d142f)",
            }}
          >
            MEET
            <br />
            OUR TEAM
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Montserrat",
              fontSize: "20px",
              lineHeight: "28px",
              fontWeight: 400,
              textAlign: "center",
              mt: 3,
              maxWidth: { md: "600px" },
            }}
          >
            Some teams call themselves a family, but we actually are one! all
            designers with a passion for art
          </Typography>

          {/* Team */}
          <Box sx={{ flexGrow: 1, width: "100%", mt: 6 }}>
            <Grid
              container
              columnSpacing={2}
              rowSpacing={4}
              columns={{ md: 15, xs: 12 }}
            >
              {TeamData.map((item, index) => {
                return (
                  <Grid key={index} item xs={12} sm={6} md={3}>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        background:
                          "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(184,187,42,1) 98%)",
                        borderRadius: "8px",
                        overflow: "hidden",
                        py: 3,
                        "&:hover": {
                          background:
                            "linear-gradient(0deg, rgba(184,187,42,1) 0%, rgba(255,255,255,1) 98%)",
                        },
                        "&:hover img": {
                          transform: "rotate(6deg)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: "200px",
                          height: "200px",
                          overflow: "hidden",
                          borderRadius: "50%",
                        }}
                      >
                        <img
                          src={item.URL}
                          alt="img"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </Box>
                      <Typography
                        sx={{
                          color: "#0D142F",
                          fontFamily: "SALOON",
                          fontSize: { md: "18px", xs: "26px" },
                          lineHeight: { md: "16px", xs: "24px" },
                          fontWeight: 500,
                          textAlign: "center",
                          mt: 3,
                        }}
                      >
                        {item.Name}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#555555",
                          fontFamily: "SALOON",
                          fontSize: { md: "14px", xs: "24px" },
                          lineHeight: { md: "12px", xs: "20px" },
                          fontWeight: 500,
                          textAlign: "center",
                          mt: 1,
                        }}
                      >
                        {item.Rank}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Team;

const TeamData = [
  {
    Name: "Sahalimran",
    Rank: "Web developer",
    URL: "/assets/Team/01.png",
  },
  {
    Name: "Robinor Uep",
    Rank: "NFT Marketer",
    URL: "/assets/Team/01.png",
  },
  {
    Name: "Sahalimran",
    Rank: "Web developer",
    URL: "/assets/Team/01.png",
  },
  {
    Name: "jhon Doe",
    Rank: "The Developer",
    URL: "/assets/Team/01.png",
  },
  {
    Name: "Sammlie tom",
    Rank: "3d Artist",
    URL: "/assets/Team/01.png",
  },
];
