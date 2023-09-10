import React, {useState} from 'react';

export const TabContext = React.createContext();

/**
 * Tab component
 * @param {Object} props
 *  @param {Array} tabClasses - array of tab names
 *  @param {Object} children - children components
 *  @returns {JSX.Element}
 */
export function Tab({children, tabClasses = [""], defaultTab = tabClasses[0]  }) {
    const [activeTab, setActiveTab] = useState(defaultTab);
    return (
        <TabContext.Provider value={{activeTab}}>
            <div className="tab-container">
                <div className="tab-buttons">
                    {tabClasses.map((tab) => (
                        <button
                            key={tab}
                            className={`${tabClasses[tab]}  ${tab === activeTab ? `active ${tabClasses[tab]}-bg` : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="tab-content">
                    <div className={`${activeTab.toLowerCase()}-content`}>
                        {children}
                    </div>
                </div>
            </div>
        </TabContext.Provider>
    );
}
