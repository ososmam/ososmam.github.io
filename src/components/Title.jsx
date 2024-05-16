import { Typography } from '@mui/material'
import React from 'react'
import { useTheme } from "@mui/material";
import { tokens } from "../theme";


const Title = ({ text, textAlign }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Typography 
    variant='h4'
    component='h3'
    sx={{ 
      fontWeight: '700',
      textAlign: textAlign,
      color:colors.grey[100],
      
   }}
    >
      {text}
    </Typography>
  )
}

export default Title