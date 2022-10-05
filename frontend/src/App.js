import "./App.css";
import HomePage from "./components/HomePage";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import RequireAuth from "./components/RequireAuth";
import NavigationBar from "./components/NavigationBar";
function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Routes>
        {/*Public Routes */}
        <Route exact path={"/"} element={<Navigate to="/welcome" />}></Route>
        <Route path="/welcome" element={<LandingPage />}></Route>

        {/*Private Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/home" element={<HomePage></HomePage>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
