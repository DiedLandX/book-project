import { useNavigate } from "react-router";
import { Box, createTheme, Input, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";
import { useAuth } from "../methods/use-auth";

function LoginPage({ toggleLogin }) {
  const navigate = useNavigate();
  const auth = useAuth();
  let theme = createTheme({
    palette: {
      primary: {
        main: "#AC7D88",
        light: "#DEB6AB",
        dark: "#85586F",
      },
      secondary: {
        main: "#B4846C",
        light: "#E5B299",
        dark: "#7D5A50",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box
        id="login"
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
      >
        <Box
          width={"17%"}
          height="105%"
          bgcolor={theme.palette.secondary.dark}
          position="absolute"
          sx={{
            left: "-15%",
            zIndex: 11,
            borderRadius: "3px",
          }}
        ></Box>
        <Box
          id="close-login"
          position={"absolute"}
          display={"flex"}
          bgcolor={theme.palette.primary.main}
          color={"white"}
          height={"max-content"}
          sx={{
            top: "7px",
            left: "92%",
            borderRadius: "50%",
            padding: "2px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
            transition: "all 0.3s",
          }}
          onClick={() => {
            let classes = document.getElementById("landing-content").classList;
            classes.remove("bg-landing-blurred");
            classes.add("bg-landing-normal");
            toggleLogin();
          }}
        >
          <CloseIcon sx={{ borderRadius: "50%" }}></CloseIcon>
        </Box>
        <Typography
          variant="h3"
          fontWeight={"bold"}
          color={theme.palette.primary.dark}
        >
          Please login
        </Typography>
        <TextField variant="standard" label="Username" />
        <TextField variant="standard" type="password" label="Password" />

        <Button
          variant="contained"
          onClick={() => {
            auth.signIn();
            navigate("/home");
          }}
        >
          Login
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
        >
          Sign Up
        </Button>
      </Box>
    </ThemeProvider>
  );
}
export default LoginPage;
