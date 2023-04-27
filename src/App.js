
import { Route, Routes } from "react-router-dom";
import { LoginComponent } from "./Component/sampleapp/LoginComponent";
import { Signinform1 } from "./Component/Sign in Form/Signinpage";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
// import "./imagedata.css";
import NavBar from './Component/NavBar';
// import Home from './Component/Home.js';

function App() {

  return (

    <div className="App">

     <NavBar/>
  
     <Routes>

     {/* <Route path="/" element={<Home/>}></Route> */}
    
      
      
      {/* <Route path="/" element={<Home/>}></Route> */}

      <Route path="/" element={<LoginComponent/>} className="loginimg"></Route>

      <Route path="/Signinform1" element={<Signinform1/>}></Route>

          </Routes>

    </div>

  );

}



export default App;
