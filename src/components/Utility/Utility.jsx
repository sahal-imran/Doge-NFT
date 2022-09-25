import React, { useState } from "react";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import AnchorLink from "@mui/material/Link";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Utility() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { md: "100vh" },
          py: { md: 0, xs: 4 },
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
            Utility
          </Typography>

          <Box
            sx={{
              m: "auto",
              width: { md: "80%", xs: "100%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              mt: 6,
            }}
          >
            {Utilities.map((item, index) => {
              return (
                <Accordion
                  key={index}
                  expanded={expanded === `panel${index + 1}`}
                  onChange={handleChange(`panel${index + 1}`)}
                  sx={{ width: "100%", background: "#B8BB2A" }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{ fontSize: "40px", color: "black" }}
                      />
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={{
                      height: "80px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "black",
                        fontFamily: "SALOON",
                        fontSize: { md: "20px", xs: "18px" },
                        lineHeight: { md: "28px", xs: "26px" },
                        fontWeight: 500,
                      }}
                    >
                      {item.Title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: "black",
                        fontFamily: "Montserrat",
                        fontSize: "16px",
                        lineHeight: "26px",
                        fontWeight: 400,
                        mt: 1,
                      }}
                    >
                      {item.des}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Utility;

const Utilities = [
  {
    Title: "DIGITAL REAL ESTATE MASTERMIND",
    des: "A place to connect real estate professionals, investors, web3 experts, developers, entrepreneurs, and more. Our members will collaborate to build the businesses that shape a future trillion dollar industry. They will get exclusive access to invest in start up businesses, real estate deals, metaverse land deals, and more.",
  },
  {
    Title: "REAL LIFE EVENTS",
    des: "We will host real life meetups, trainings, and conferences for the Tykes community.",
  },
  {
    Title: "TYKESHARE   ",
    des: "We will be purchasing homes across the world that Tykes holders will be able to have access to.  You’ll be able to use your $Tycoin to book dates of your stay. We’ve already purchased a $1.5M home in Las Vegas, NV as the first one!",
  },
  {
    Title: "EDUCATION",
    des: "There will be online and real life trainings held by Tykes holders and outside experts on real estate, blockchain, business, investing, and more.",
  },
  {
    Title: "$TYCOIN",
    des: "You will be able to stake your Tykes to earn $Tycoin. This token will be used to purchase everything in the Tykes ecosystem. Those who stake 5 Tykes will get special rewards and allocations.",
  },
];
