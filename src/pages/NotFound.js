import { Box, Button, Typography } from "@mui/material";

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        mt: 2,
      }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button comp variant="contained"  size="medium"
        sx={{
          fontSize: "0.9rem",
          textTransform: "capitalize",
          py: 2,
          px: 4,
          mt: 3,
          mb: 2,
          borderRadius: 0,
          backgroundColor: "#14192d",
          "&:hover": {
            backgroundColor: "#1e2a5a",
          },
        }}  component={Link}
        to={"/"}>
        Back Home
      </Button>
    </Box>
  );
}

export default NotFound;
