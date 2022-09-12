import NavigationBar from "./NavigationBar";
function HomePage() {
  return (
    <main>
      <NavigationBar></NavigationBar>
      <div className="question-container">
        <div className="helper-box">
          <div className="question">
            {/*Placeholder question*/}
            <h3>Todays Question</h3>
            <p>What was the main character called?</p>
          </div>
          <div className="answer-block">
            <input type="text" placeholder="Your Answer" />
          </div>
        </div>
      </div>
    </main>
  );
}
export default HomePage;
