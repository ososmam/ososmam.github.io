import React from "react";
import { Button, Stack } from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const GetInTouch = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 10,
        mx: 6,
      }}
    >
      <Title text={"Contact us"} textAlign={"center"} />
      <Paragraph
        text={
          "It is our commitment to ensure a professional and enjoyable experience for you.click the button below."
        }
        maxWidth={"sm"}
        mx={0}
        textAlign={"center"}
      />
      <Button
        component={Link}
        to={"/contact"}
        variant="contained"
        type="submit"
        size="medium"
        sx={{
          fontSize: "0.9rem",
          textTransform: "capitalize",
          py: 2,
          px: 4,
          mt: 3,
          mb: 2,
          borderRadius: 0.5,
          borderColor: colors.redAccent[600],
          color: colors.primary[100],
          backgroundColor: colors.redAccent[500],
          "&&:hover": {
            backgroundColor: colors.redAccent[300],
          },
          "&&:focus": {
            backgroundColor: colors.redAccent[300],
          },
        }}
      >
        get in touch
      </Button>
    </Stack>
  );
};

export default GetInTouch;
