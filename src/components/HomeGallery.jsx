import React from "react";
import { Link } from "react-router-dom";

import img1 from "../images/g-img1.jpg";
import img2 from "../images/g-img2.jpg";
import img3 from "../images/g-img3.jpg";
import img4 from "../images/g-img4.jpg";
import img5 from "../images/g-img5.jpg";
import img6 from "../images/g-img6.jpg";


const images = [
  { src: img1, title: "Martin Saamad" },
  { src: img2, title: "Samarth Jadhav" },
  { src: img3, title: "Evan Salt" },
  { src: img4, title: "Jenifer Law" },
  { src: img5, title: "Kajal Sanam" },
  { src: img6, title: "Kirtika Pandey" },
];

function HomeGallery() {
  return (
    <>
      <div className="section gallery-sec py-75">
        <div className="container">
        <div className="row">
          <div className="col-md-12 mb-50">
            <h2 className="heading text-center">Gallery</h2>
          </div>
          <div className="row gallery-card">
            {images.map((image,index)=>(
              <div key={index} className="col-md-4 col-sm-6 col-xs-12">
              <div className="hover-bg">
                <Link to="#" title="">
                  <div className="hover-txt">{image.title}</div>
                  <img
                  src={image.src}
                  title={image.title}
                  className="img-responsive gallery-img" />
                </Link>
              </div>
            </div>
            ))
            }

          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default HomeGallery;
