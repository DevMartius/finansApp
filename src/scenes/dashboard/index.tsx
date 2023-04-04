import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";


type Props = {}

const Dashboard = (props: Props) => {

  const { palette } = useTheme();

  const gridTemplate = `
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

  return (
    <Box color={palette.grey[300]} width="100%" height="100%" display="grid" gap="1.5rem"
      sx={{
        gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
        gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
        gridTemplateAreas: gridTemplate,
      }}
    >
      teste
    </Box>
  );
};

export default Dashboard;
