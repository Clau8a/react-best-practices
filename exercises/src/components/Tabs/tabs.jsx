import { TabProvider } from "./tabs.context";

export const Tabs = ({ children }) => {
  return <TabProvider>{children}</TabProvider>;
};
