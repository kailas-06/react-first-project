import React, { useState } from 'react';

function ContactPageTab() {
  const [currentTab, setCurrentTab] = useState(1);

  const tabs = [
    {
      id: 1,
      tabtitle: "Title 1",
      title: "Title 1",
      content: "content 1"
    },
    {
      id: 2,
      tabtitle: "Title 2",
      title: "Title 2",
      content: "content 2"
    },
    {
      id: 3,
      tabtitle: "Title 3",
      title: "Title 3",
      content: "content 3"
    },
    {
      id: 4,
      tabtitle: "Title 4",
      title: "Title 4",
      content: "content 4"
    }
  ];

  const handleClickTab = (e) => {
    setCurrentTab(Number(e.target.id));
  };

  return (
    <div className="container">
      <div className="tabs">
        {tabs.map((tab,idx) => (
         <button
         key={tab.id}
         id={tab.id}
         disabled={currentTab === tab.id}
         onClick={handleClickTab}>
            {tab.title}
         </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab) => (
          <div key={tab.idx}>
            {currentTab === tab.id && (
              <div>
                <p>{tab.title}</p>
                <p>{tab.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactPageTab;
