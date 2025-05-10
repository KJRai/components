import { useState } from "react";
import styles from "./Tabs.module.css";

interface TabOption {
  label: string;
  value: string;
}
interface TabsProps {
  tabs: TabOption[];
  onTabChange?: (value: string) => void;
}
export default function Tabs({ tabs, onTabChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const handleTabClick = (value: string) => {
    setActiveTab(value);
    onTabChange?.(value);
  };
  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabList}>
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleTabClick(tab.value)}
            className={`${styles.tabButton} ${
              activeTab === tab.value ? styles.active : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContentHeader}>
        {tabs.map((tab) => (
          <div
            key={tab.value}
            className={`${styles.tabHeader} ${
              activeTab === tab.value ? styles.headerActive : ""
            }`}
          >
            {activeTab === tab.value ? "Active" : "Inactive"}
          </div>
        ))}
      </div>
    </div>
  );
}
