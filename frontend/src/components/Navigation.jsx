import React, { useState } from "react";

const data = {
  styles: {
    activeTab:
      "inline-block p-4 text-indigo-600 border-b-2 border-indigo-600 rounded-t-lg active dark:text-indigo-500 dark:border-indigo-500",
    inactiveTab:
      "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",
  },
  navigationItems: [{ label: "Friend List" }, { label: "Add Friends" }],
};

function Navigation() {
  const [activeTab, setActiveTab] = useState(0);
  const items = data.navigationItems;
  return (
    <>
      <div className="max-w-md mx-1 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap justify-center -mb-px">
          {items.map((item, index) => (
            <li key={index} className="mr-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(index);
                }}
                className={
                  index === activeTab
                    ? data.styles.activeTab
                    : data.styles.inactiveTab
                }
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navigation;
