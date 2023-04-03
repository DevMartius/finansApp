import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";

type Props = {}

const Navbar = (props: Props) => {
  const { palette } = useTheme();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      Navbar
    </Box>
  );
};

export default Navbar;
