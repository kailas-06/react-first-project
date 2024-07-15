import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../sass/main.scss";
import img1 from "../../images/nature1.jpg";
import img2 from "../../images/nature2.jpg";
import img3 from "../../images/nature3.jpg";
import img4 from "../../images/nature4.jpg";

function HeaderCarousel() {
  const options = {
    loop: true,
    // margin:10,
    responsiveClass: true,
    nav: true,
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      767: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <>
    <section id="hero-slider">
      <OwlCarousel className="owl-theme banner-owl" {...options}>
        <div className="item overlay">
          <img src={img1} alt="img1" />
          <div className="banner-text">
            <div className="container">
              <div className="row">
                <div className="col-md-7 col-xs-12">
                  <h1 className="heading1"  animationEnter="bounceIn">Heading text</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere sunt iste, qui numquam natus soluta voluptates
                    voluptatibus nihil tenetur. Atque magnam asperiores,
                    dignissimos saepe ea in doloribus quibusdam neque ipsa!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item overlay">
          <img src={img2} alt="img2" />
          <div className="banner-text">
            <div className="container">
              <div className="row">
                <div className="col-md-7 col-xs-12">
                  <h1 className="heading1">Heading text</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere sunt iste, qui numquam natus soluta voluptates
                    voluptatibus nihil tenetur. Atque magnam asperiores,
                    dignissimos saepe ea in doloribus quibusdam neque ipsa!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item overlay">
          <img src={img3} alt="img3" />
          <div className="banner-text">
            <div className="container">
              <div className="row">
                <div className="col-md-7 col-xs-12">
                  <h1 className="heading1">Heading text</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere sunt iste, qui numquam natus soluta voluptates
                    voluptatibus nihil tenetur. Atque magnam asperiores,
                    dignissimos saepe ea in doloribus quibusdam neque ipsa!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item overlay">
          <img src={img4} alt="img4" />
          <div className="banner-text">
            <div className="container">
              <div className="row">
                <div className="col-md-7 col-xs-12">
                  <h1 className="heading1">Heading text</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere sunt iste, qui numquam natus soluta voluptates
                    voluptatibus nihil tenetur. Atque magnam asperiores,
                    dignissimos saepe ea in doloribus quibusdam neque ipsa!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
      </section>
    </>
  );
}

export default HeaderCarousel;
