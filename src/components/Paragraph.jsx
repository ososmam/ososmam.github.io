import { Typography } from '@mui/material'
import React from 'react'
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const Paragraph = ({ text, maxWidth, mx, textAlign }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Typography
    sx={{
      maxWidth: maxWidth,
      mx: mx,
      textAlign: textAlign,
      py: 3,
      color: colors.grey[400],
    }}
    >
        {text}
    </Typography>
  )
}

export default Paragraph