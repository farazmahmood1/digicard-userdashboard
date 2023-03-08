import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Body/Header";
import Sidebar from "./Components/Body/Sidebar";
import Dashboard from "./Components/Content/Dashboard";
import Theme from "./Components/Body/Theme";
import ToDoList from "./Components/Body/ToDoList";
import Login from "./Components/Authorization/Login";
import Register from "./Components/Authorization/Register";
import SeeNews from "./Components/Content/SeeNews";
import AccountUpdate from "./Components/Content/AccountUpdate";
import UpdateSocial from "./Components/Forms/UpdateSocial";
import UpdatePersonal from "./Components/Forms/UpdatePersonal";
import YourProducts from "./Components/Content/YourProducts";
import YourWebsite from "./Components/Content/YourWebsite";
import AddPortfolio from "./Components/Content/AddPortfolio";
import { useState, useEffect } from "react";
import Footer from "./Components/Body/Footer";

function App() {
  const [login, SetLogin] = useState(false);

  const SetLocalLogin = async () => {
    try {
      let userLogin = await localStorage.getItem("logIN");
      let parsed = JSON.parse(userLogin);
      if (parsed !== null) {
        SetLogin(parsed);
      }
    } catch {
      return null;
    }
  };

  useEffect(() => {
    SetLocalLogin();
  }, []);

  return (
    <div className="wrapper">
      {login === false ? (
        <>
          <Router>
            <Routes>
              <Route path="/" exact element={<Login />} />
              <Route path="/Register" element={<Register />} />
            </Routes>
          </Router>
        </>
      ) : (
        <>
          <Router>
            <Header />
            <Sidebar />
            <Routes>
              <Route path="/" element={<AccountUpdate />} />
              <Route path="/SeeNews" element={<SeeNews />} />
              <Route path="/UpdateSocial" element={<UpdateSocial />} />
              <Route path="/UpdatePersonal" element={<UpdatePersonal />} />
              <Route path="/YourProducts" element={<YourProducts />} />
              <Route path="/YourWebsite" element={<YourWebsite />} />
              <Route path="/AddPortfolio" element={<AddPortfolio />} />
            </Routes>
            <Footer/>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
