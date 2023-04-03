import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";

const App = () => {

  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        oi mãe
      </ThemeProvider>
    </div>
  );
};

export default App;
