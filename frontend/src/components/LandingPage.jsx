import Button from "@mui/material/Button";
import NavigationBar from "./NavigationBar";
import { ThemeProvider } from "@emotion/react";
import LoginPage from "./LoginPage";
import { Box, createTheme, Typography } from "@mui/material";
function LandingPage() {
  function toggleLogin() {
    let form = document.getElementById("login");
    let str = form.style.display;

    form.style.display = str == "flex" ? "none" : "flex";
  }
  let theme = createTheme({
    palette: {
      primary: {
        main: "#AC7D88",
        light: "#DEB6AB",
        dark: "#85586F",
      },
      secondary: {
        main: "#D79771",
        light: "#FFEBC9",
        dark: "#B05B3B",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <LoginPage toggleLogin={toggleLogin}></LoginPage>
      <Box className="landing-bg">
        <Box id="landing-content" className="bg-landing-normal">
          <NavigationBar toggleLogin={toggleLogin}></NavigationBar>

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
            >
              Sign-Up
            </Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default LandingPage;
