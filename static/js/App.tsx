import { ThemeProvider } from "@mui/material";

// Libraries
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HttpsRedirect from "react-https-redirect";

// Styling
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/zen-kaku-gothic-new";

// Theme
import theme from "./assets/theme";

// Views
import { Header } from "./views/Header";
import { Home } from "./views/Home";

function App() {
  return (
    <HttpsRedirect>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </HttpsRedirect>
  );
}

export default App;
