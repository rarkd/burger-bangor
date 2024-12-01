// MUI
import { createTheme } from "@mui/material";

// Define MUI theme
const theme = createTheme({
  typography: {
    fontFamily: "Zen Kaku Gothic New",
  },
  palette: {
    secondary: {
      main: "#f50057",
    },
  },
  shape: {
    borderRadius: 16,
  },
});

export default theme;
