"use client";

import React, { useState } from "react";
import "./tabs.css";

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultTab,
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultTab || (items.length > 0 ? items[0].id : "")
  );

  const currentItem = items.find((item) => item.id === activeTab);

  return (
    <div className={`tabs-container ${className}`}>
      <div className="tabs-nav" role="tablist">
        {items.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              role="tab"
              aria-selected={isActive}
              className={`tab-btn ${isActive ? "tab-btn--active" : ""}`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="tab-panel" role="tabpanel">
        {currentItem?.content}
      </div>
    </div>
  );
};
