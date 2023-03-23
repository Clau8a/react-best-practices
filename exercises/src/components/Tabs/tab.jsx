import { useTabContext } from "./tabs.context";

const Tab = ({ tab, children }) => {
  const { activeTab, setActiveTab } = useTabContext();
  return (
    <button
      className={`nav-link ${activeTab === tab && "active"}`}
      type="button"
      role="tab"
      key={`tab-${tab}`}
      onClick={() => setActiveTab(tab)}
    >
      {children}
    </button>
  );
};
export { Tab };
