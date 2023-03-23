import { useEffect } from "react";
import { useTabContext } from "./tabs.context";

export const TabsWrapper = ({ defaultActiveTab, children }) => {
  const { setActiveTab } = useTabContext();

  useEffect(() => {
    if (defaultActiveTab) {
      setActiveTab(defaultActiveTab);
    }
  }, [defaultActiveTab, setActiveTab]);
  return <div className="nav nav-tabs">{children}</div>;
};
