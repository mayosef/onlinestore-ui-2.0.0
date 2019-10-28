import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SliderSimple extends React.Component {
    render() {
        const settings = {
            dots: true,
            autoplay:true
          };
        return (
                <Slider {...settings}>
                <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
                </Slider>

 

        )
    }
}

export default SliderSimple;