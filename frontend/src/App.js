import "./App.css";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignUpModal from "./components/SignUpModal";
import { ProvideAuth } from "./methods/use-auth";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<Navigate to="/welcome" />}></Route>

          <Route
            path="/welcome"
            element={
              <ProvideAuth>
                <LandingPage />
              </ProvideAuth>
            }
          ></Route>

          <Route
            path="/home"
            element={
              <ProvideAuth>
                <HomePage></HomePage>
              </ProvideAuth>
            }
          ></Route>
          <Route path="/login" element={<LoginPage fn={() => {}} />}></Route>
          <Route path="/sign-up" element={<SignUpModal />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
