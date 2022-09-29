import NavigationBar from "./NavigationBar";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";

function DailyQuestions() {
  return (
    <>
      <div className="question ">
        {/*Placeholder question*/}
        <h3>
          <span className="caps">T</span>
          {"odays Question - "}
        </h3>
        <p id="book-title">#The Withcer</p>
        <p>What was the main character called?</p>
      </div>
      <Box
        className="answer-block"
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
        }}
      >
        <TextField
          type="text"
          label="Your Answer"
          variant="standard"
          sx={{
            "& .MuiInput-underline:after": {
              borderBottomColor: "rgba(0,0,0,0.5)",
            },
            "& label.Mui-focused": {
              color: "rgba(0,0,0,0.5)",
            },
            width: "100%",
          }}
        />
        <Button
          id="submit_answer"
          variant="standard"
          endIcon={<SendIcon></SendIcon>}
          size="large"
          sx={{
            width: "10%",
            marginTop: "1em",
            fontWeight: "bold",
            fontSize: "larger",
          }}
        >
          SEND
        </Button>
      </Box>
    </>
  );
}

function HomePage() {
  return (
    <Box component={"main"} bgcolor={"lightgrey"}>
      <NavigationBar></NavigationBar>
      <div className="question-container">
        <Box className="helper-box">
          <DailyQuestions />
        </Box>
      </div>
    </Box>
  );
}
export default HomePage;
