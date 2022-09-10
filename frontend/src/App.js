import './App.css';
import QuestionBlock from"./components/QuestionBlock"
import NavigationBar from "./components/NavigationBar"
import LoginPage from './components/LoginPage';
import { useState } from 'react';
function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  function login(){
    setisLoggedIn(true);
   
  };
  return (
    <div className="App">
          <NavigationBar/>

      {!isLoggedIn?
      
    <LoginPage fn={login}/>:
        <>
          <QuestionBlock></QuestionBlock>
        </>
      }

    </div>
  );
}

export default App;
