import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import NavigationBar from "./NavigationBar";
import { ThemeProvider } from "@emotion/react";
import { Box, createTheme, Toolbar, Typography } from "@mui/material";

function LandingPage() {
  const navigate = useNavigate();
  let theme = createTheme({
    palette: {
      primary: {
        main: "#fafafa",
        light: "#ffffff",
        dark: "#c7c7c7",
      },
      secondary: {
        main: "#212121",
        light: "#484848",
        dark: "#000000",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="landing-bg">
        <NavigationBar></NavigationBar>

        <div className="landing-content">
          <Box display={"flex"} className="landing-helper">
            <Typography variant="h3" sx={{ fontWeight: "bold  " }}>
              Welcome to BookGroups
            </Typography>
            <Typography
              variant="p"
              className="main-text"
              sx={{
                textAlign: "justify",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "5vh",
              }}
            >
              A place where you can read together and follow each others
              stories.
            </Typography>
            <Button
              variant={"contained"}
              size="large"
              sx={{ fontSize: "28px", marginTop: "5vh" }}
              onClick={() => navigate("/sign-up")}
            >
              Sign-Up
            </Button>
          </Box>
        </div>
      </div>
    </ThemeProvider>
  );
}
export default LandingPage;
