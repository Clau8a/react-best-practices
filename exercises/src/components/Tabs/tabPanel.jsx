import { useTabContext } from "./tabs.context";

const TabPanel = ({ tab, children }) => {
  const { activeTab } = useTabContext();

  const isTabActive = activeTab === tab;

  if (!isTabActive) {
    return null;
  }

  return (
    <div
      className={`tab-pane fade ${isTabActive && "show active"}`}
      role="tabpanel"
      tabIndex="0"
      key={`tabPanel-${tab}`}
    >
      {children}
    </div>
  );
};

export { TabPanel };
