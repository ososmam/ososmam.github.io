import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import FooterTitle from "./FooterTitle";
import FooterLink from "./FooterLink";
import FacebookIcon from "@mui/icons-material/Facebook";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
const Footer = () => {
  const StackColumn = styled(Stack)(() => ({
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    gap: 8,
    textAlign: "center",
  }));

  const BoxRow = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ededed",
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: 30,
    },
  }));

  return (
    <Box
      sx={{
        backgroundColor: "#ededed",
        textAlign: "center", // Align text in the middle of the page
        padding: "20px", // Add padding to the footer
      }}
    >
      <BoxRow
        component="footer"
        sx={{
          py: 4,
          px: 2,
        }}
      >
        {/* <StackColumn>
        <FooterTitle text={'address'} />
        <FooterLink 
        text={'15th Louis St, london 92382, eng'} 
        />
        <FooterLink 
        text={'25 999-345-10800'} 
        />
        <FooterLink 
        text={'info@housesales.com'} 
        />
      </StackColumn> */}

        {/* <StackColumn>
          <FooterTitle text={"our company"} />
          <FooterLink text={"reporting"} />
          <FooterLink text={"get in touch"} />
          <FooterLink text={"management"} />
        </StackColumn> */}

        <StackColumn>
          <FooterTitle text={"Taslia Studio"} />
          <Stack
            direction="row"
            width="70px"
            maxWidth="100%"
            justifyContent="space-between"
          >
            <Link
              href="https://play.google.com/store/apps/dev?id=7583585392299884953"
              variant="body2"
              sx={{
                color: "#414141",
                "&:hover": {
                  color: "#43a047",
                },
              }}
            >
              <SportsEsportsIcon />
            </Link>
            <Link
              href="https://www.facebook.com/TasliaStudio"
              variant="body2"
              sx={{
                color: "#414141",
                "&:hover": {
                  color: "#1c2859",
                },
              }}
            >
              <FacebookIcon />
            </Link>
          </Stack>
          <Typography variant="caption" component="p">
            &copy; 2024 TasliaStudio Inc.
          </Typography>
        </StackColumn>
      </BoxRow>

      <Typography variant="caption">
        Taslia Studio, the Taslia Studio logo, the game names and related marks
        are trade marks of TasliaStudio.tech Ltd or related entities. All rights
        reserved
      </Typography>
    </Box>
  );
};

export default Footer;
