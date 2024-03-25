import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.jpg";
import user from "./user.png";




const Header = ()=>(
    <header className="container">
        <div className="left">
            <img src={logo} alt="Image Not Loaded"/>
        </div>

        <div className="center">
            <input className="input" type="text" placeholder="search anything"/>
            <button className="button">Submit</button>
        </div>
        <div className="right">
            <img src={user} alt="Image Not Loaded"/>
        </div>        
    </header>

)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);

/*
const Header = () => {
    return (
      <>
        <header className="header">
          <div className="left">
            <img src={logo.jpg} alt="Logo" />
          </div>
          <div className="center">
            <input
              className="input"
              type="text"
              placeholder="Search anything you want..."
            />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </div>
          <div className="right">
            <img src={user.png} alt="User Icon" />
          </div>
        </header>
      </>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Header />);

*/