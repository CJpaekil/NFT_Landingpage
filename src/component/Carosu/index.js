import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Launchcard from "../Launchcard";
import {isMobile} from 'react-device-detect';
export  class Carosu extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: window.innerWidth < 768 ? 1 : 3,
      arrows: false,
      slidesToScroll: 1,
      dotsClass:'slick-dots ${style.dots}',
      appendDots: dots => {
        return <ul style={{ margin: '0px' }}>{dots}</ul>;
      },
      customPaging: (pagi, i) => {
        const style = {
          width: 5,
          height: 5,
          display: 'inline-block',
          backgroundColor: 'white',
          borderRadius: '50%'
        };
        return <a className="slick-dot" style={style} />;
      },

    };
    return (
      <div>
        <Slider {...settings}>
          <div>
              <Launchcard/>
          </div>
          <div>
              <Launchcard/>
          </div>
          <div>
              <Launchcard/>
          </div>
          <div>
              <Launchcard/>
          </div>
          <div>
              <Launchcard/>
          </div>
          <div>
              <Launchcard/>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carosu;