import { useNavigate } from "react-router";
import { Box, createTheme, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";
import { useAuth } from "../methods/use-auth";

function SignUpModal({ toggleLogin, setRendered, show }) {
  const navigate = useNavigate();
  const auth = useAuth();
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

  //TODO Render modal in LandingPage when signup is clicked
  return (
    <ThemeProvider theme={theme}>
      <Box
        position="absolute"
        width={"100%"}
        height={"100%"}
        sx={{
          bgcolor: "rgba(0,0,0,0.3)",
          zIndex: 9,
        }}
        onClick={() => {
          let classes = document.getElementById("landing-content").classList;
          classes.remove("bg-landing-blurred");
          classes.add("bg-landing-normal");
          navigate("/welcome");
        }}
      >
        <Box
          id="signup"
          className="login-container"
          sx={{
            backgroundColor: "white",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            width: "30vw",
            minWidth: "fit-content",
            height: "50vh",
            zIndex: 10,
            translate: "all 1s",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="ribbon"></div>
          <Box
            id="close-login"
            position={"absolute"}
            display={"flex"}
            bgcolor={theme.palette.primary.dark}
            color={"white"}
            height={"max-content"}
            sx={{
              top: "7px",
              left: "90%",
              borderRadius: "50%",
              padding: "2px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
              transition: "all 0.3s",
            }}
            onClick={() => {
              let classes =
                document.getElementById("landing-content").classList;
              classes.remove("bg-landing-blurred");
              classes.add("bg-landing-normal");
              navigate("/welcome");
            }}
          >
            <CloseIcon sx={{ borderRadius: "50%" }}></CloseIcon>
          </Box>
          <Typography
            variant="h3"
            fontWeight={"bold"}
            color={theme.palette.secondary.main}
          >
            Please register
          </Typography>
          <TextField variant="standard" label="Username" />
          <TextField variant="standard" type="email" label="Email" />
          <TextField variant="standard" type="password" label="Password" />

          <Button
            variant="contained"
            onClick={(e) => {
              //auth.signUp();TODO: No API for registering yet.
            }}
          >
            Sign-Up
          </Button>
          <Box display={"flex"}>
            <hr
              style={{
                display: "inline",
                background: "black",
                color: "black",
                border: "black",
                height: "0.5px",
                width: "40%",
              }}
            />
            <Typography align="center" display={"inline"}>
              or
            </Typography>
            <hr
              style={{
                display: "inline",
                background: "black",
                height: "0.5px",
                color: "black",
                border: "black",
                width: "40%",
              }}
            />
          </Box>

          <Button
            variant="text"
            sx={{
              color: "#000",
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: "black",
              },
            }}
            onClick={() => {
              navigate("/welcome/login");
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default SignUpModal;
