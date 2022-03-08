import "./App.css";
import MainRouter from "./routes/mainRouter";
import { BrowserRouter } from "react-router-dom";

import NavigationBar from "./components/navbar/navbar.component";
import SubNavigationBar from "./components/subNavbar/subNavbar.component";
import { isAuthenticated } from "./api/auth";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      {!isAuthenticated() && <SubNavigationBar />} 
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
