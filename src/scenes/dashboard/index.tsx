import { Box, useMediaQuery, useTheme } from "@mui/material";

type Props = {}

const Dashboard = (props: Props) => {

  const { palette } = useTheme();

  const gridTemplateLargeScreens = `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d h i"
    "g h i"
    "g h j"
    "g h j"
  `
  const gridTemplateSmallScreens = `
    "a"
    "a"
    "a"
    "a"
    "b"
    "b"
    "b"
    "b"
    "c"
    "c"
    "c"
    "d"
    "d"
    "d"
    "e"
    "e"
    "f"
    "f"
    "f"
    "g"
    "g"
    "g"
    "h"
    "h"
    "h"
    "h"
    "i"
    "i"
    "j"
    "j"
  ` 

  const isAboveMediumScreen = useMediaQuery("(min-width: 1200px)");

  return (
    <Box color={palette.grey[300]} width="100%" height="100%" display="grid" gap="1.5rem"
      sx={
        isAboveMediumScreen ? {
          gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
          gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
          gridTemplateAreas: gridTemplateLargeScreens,    
        } : {
          gridAutoColumns: "1fr",
          gridAutoRows: "80px",
          gridTemplateAreas: gridTemplateSmallScreens
      }
    }
    >
      <Box bgcolor="#FFF" gridArea="a"></Box>
      <Box bgcolor="#FFF" gridArea="b"></Box>
      <Box bgcolor="#FFF" gridArea="c"></Box>
      <Box bgcolor="#FFF" gridArea="d"></Box>
      <Box bgcolor="#FFF" gridArea="e"></Box>
      <Box bgcolor="#FFF" gridArea="f"></Box>
      <Box bgcolor="#FFF" gridArea="g"></Box>
      <Box bgcolor="#FFF" gridArea="h"></Box>
      <Box bgcolor="#FFF" gridArea="i"></Box>
      <Box bgcolor="#FFF" gridArea="j"></Box>
    </Box>
  );
};

export default Dashboard;
