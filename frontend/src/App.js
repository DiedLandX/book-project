import "./App.css";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignUpPage from "./components/SignUpPage";
import { ProvideAuth } from "./methods/use-auth";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<LandingPage />}></Route>
          <Route path="/welcome" element={<LandingPage />}></Route>

          <Route
            path="/home"
            element={
              <ProvideAuth>
                <HomePage></HomePage>
              </ProvideAuth>
            }
          ></Route>
          <Route path="/login" element={<LoginPage fn={() => {}} />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
