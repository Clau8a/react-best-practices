import React from "react";

const TabContext = React.createContext();

const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = React.useState();
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

const useTabContext =()=> React.useContext(TabContext)

export {TabProvider, useTabContext}
