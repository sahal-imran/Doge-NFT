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

function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Box
      id={"FAQ"}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { md: "100vh" },
          py: { md: 0, xs: 12 },
          //   borderBottom: "2px solid #b8bb2a",
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
            FAQ
          </Typography>

          <Box
            sx={{
              m: "auto",
              width: "100%",
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
                  sx={{
                    width: "100%",
                    background: "black",
                    borderBottom: "1px solid white",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{ fontSize: "30px", color: "white" }}
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
                        color: "white",
                        fontFamily: "Montserrat",
                        fontSize: { md: "20px", xs: "18px" },
                        lineHeight: { md: "28px", xs: "26px" },
                        fontWeight: 500,
                      }}
                    >
                      <Box component={"span"}>{index + 1}</Box>
                      {". "}
                      {item.Title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
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

export default FAQ;

const Utilities = [
  {
    Title: "When is the launch? How much does it cost?",
    des: "TBD. The price is 0.018 eth each. You can maximumly mint 10 NFTs per wallet.",
  },
  {
    Title: "What is the artwork inspired from?",
    des: "It is obvious that the art of Doge Club is inspired by Bayc and meme doge. The Doge Club NFT corresponds to BAYC 1:1, which means that BAYC#1 and Doge Club #1 have the same outfit.",
  },
  {
    Title: "When is the launch? How much does it cost?",
    des: "TBD. The price is 0.018 eth each. You can maximumly mint 10 NFTs per wallet.",
  },
  {
    Title: "What is the artwork inspired from?",
    des: "It is obvious that the art of Doge Club is inspired by Bayc and meme doge. The Doge Club NFT corresponds to BAYC 1:1, which means that BAYC#1 and Doge Club #1 have the same outfit.",
  },
  {
    Title: "What is the artwork inspired from?",
    des: "It is obvious that the art of Doge Club is inspired by Bayc and meme doge. The Doge Club NFT corresponds to BAYC 1:1, which means that BAYC#1 and Doge Club #1 have the same outfit.",
  },
];
