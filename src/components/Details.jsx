import React from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const Details = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      phone: data.get("phone"),
    });
  };

  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <Title text={"Interesting to use our service"} textAlign={"center"} />
      <Paragraph
        text={
          "If you are interested to use our service contact us we will call you. \
                Shortly to fulfill you requirements."
        }
        maxWidth={"sm"}
        mx={0}
        textAlign={"center"}
      />

      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          mt: 1,
          py: 2,
        }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="phone"
          label="Phone Number"
          type="phone"
          id="phone"
          autoComplete="current-phone"
        />
        <Button
          variant="contained"
          fullWidth
          type="submit"
          size="medium"
          sx={{
            fontSize: "0.9rem",
            textTransform: "capitalize",
            py: 2,
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
          send
        </Button>
      </Box>
    </Stack>
  );
};

export default Details;
