import React, { createContext, useContext, useState } from "react";
import "./tab.css";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Group from '../../assets/images/Group.png'

const TabContext = createContext(null);

const TabProvider = ({ children, value }) => {
  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};

const Tab = ({ value, children }) => {
  const [tabValue, setValue] = useContext(TabContext);
  const isActive = tabValue === value;

  return (
    <button
      onClick={() => setValue(value)}
      className={`${isActive ? "active" : ""}`}
    >
      {children}
    </button>
  );
};

const TabPanel = ({ value, children }) => {
  const [tabValue] = useContext(TabContext);

  if (tabValue !== value) {
    return null;
  }

  return children;
};

export default function SwitchBtn() {
  const [tab, setTab] = useState("login");

  return (
    <div className="l-body">
      <div className="img">
        <img src={Group} className="hmpg-img" alt="..." />

      </div>
      <div className="container">
        <TabProvider className="envelope" value={[tab, setTab]}>
          <div className="form-container">
            <h1>Brand Logo</h1>
            <div className="toggle">
              <Tab className="switchBtn" value="login">Login</Tab>
              <Tab className="switchBtn" value="signup">Signup</Tab>
            </div>

            <div className="switch-toggle" >
              <TabPanel className="slider" value="login"><Login /></TabPanel>
              <TabPanel className="slider" value="signup"><Signup /></TabPanel>
            </div>
          </div>
        </TabProvider>
      </div>
    </div>
  );
}



