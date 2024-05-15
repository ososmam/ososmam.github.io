import React from "react";
import { Box, Button, Grid, styled, Typography } from "@mui/material";
import Title from "./Title";
// img
import imgDetail from "../assets/ColorHexweb.png";

const GetStarted = () => {
  const CustomGridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const CustomTypography = styled(Typography)({
    fontSize: "1.1rem",
    textAlign: "start",
    lineHeight: "1.5",
    color: "#515151",
    marginTop: "1.5rem",
  });

  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 4, md: 0 }}
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <CustomGridItem item xs={12} sm={8} md={6} component="section">
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <Title text={"ColorHEX"} textAlign={"start"} />
          <CustomTypography>
            Challenge your mind & have fun with Color HEX!
            <br />
            This minimalist puzzle game will keep you
            <br /> hooked with its colorful merging tiles.
            <br /> Download today for endless entertainment!
            <br />
          </CustomTypography>
          <Button
            variant="contained"
            href="https://play.google.com/store/apps/details?id=com.Taslia.ColorHex"
            sx={{
              mt: 2,
              px: 4,
              py: 1,
              fontSize: "0.9rem",
              textTransform: "capitalize",
              borderRadius: 0,
              borderColor: "#14192d",
              color: "#fff",
              backgroundColor: "#14192d",
              "&&:hover": {
                backgroundColor: "#343a55",
              },
              "&&:focus": {
                backgroundColor: "#343a55",
              },
            }}
          >
            Play now
          </Button>
        </Box>
      </CustomGridItem>

      <Grid item xs={12} sm={4} md={6}>
        <img
          src={imgDetail}
          alt=""
          style={{
            width: "60%",
            padding: "40",
          }}
        />
      </Grid>

      {/* <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                <img src={imgDetail2} alt="" 
                style={{ 
                    width: "100%",
                }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Match with the best agent'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                        Our verified partner Agents are local experts who<br /> 
                        earn an average of 4.8/5 stars from buyers and sellers.
                    </CustomTypography>
                </Box>
            </CustomGridItem>*/}
    </Grid>
  );
};

export default GetStarted;
