import React from "react";

// Sample data array
const cardData = [
  {
    icon: "bi-activity",
    heading: "Heading 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quidem?",
  },
  {
    icon: "bi-backpack4",
    heading: "Heading 2",
    description: "Another description text here.",
  },
  {
    icon: "bi-substack",
    heading: "Heading 3",
    description: "Another description text here.",
  },
  {
    icon: "bi-person-rolodex",
    heading: "Heading 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quidem?",
  },
  // Add more card data as needed
];

const Card = ({ icon, heading, description }) => (
  <div className="col-md-3 mb-20">
    <div className="cards">
      <div className="icon-wrap">
        <i className={`bi ${icon} icon`}></i>
      </div>
      <h5 className="heading5 color-dark-blue">{heading}</h5>
      <p>{description}</p>
    </div>
  </div>
);

const HomeCards = () => (
  <div className="section bg-light-blue py-75">
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-50">
          <h2 className="heading text-center">Services</h2>
        </div>
        {cardData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            heading={card.heading}
            description={card.description}
          />
        ))}
      </div>
    </div>
  </div>
);

export default HomeCards;
