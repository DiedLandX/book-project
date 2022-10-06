import Button from "@mui/material/Button";
import { ThemeProvider } from "@emotion/react";
import { Box, createTheme, Typography } from "@mui/material";
import { useState } from "react";
import SignUpModal from "./SignUpModal";
function LandingPage() {
  /*TODO Login and Register modals are working from the navbar, but the button in this component
  is not hooked to the same state therefore creating a problem where i would have to duplicate code
  I need to think about this...*/
  const [showSignUp, setsignUp] = useState(false);
  let theme = createTheme({
    palette: {
      primary: {
        main: "#E4CDA7",
        light: "#FFE6BC",
        dark: "#C3B091",
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
      {showSignUp && <SignUpModal></SignUpModal>}
      <Box className="landing-bg">
        <Box id="landing-content" className="bg-landing-normal">
          <Box display={"flex"} className="landing-helper">
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
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
              onClick={() => setsignUp(true)}
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
