import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class CarouselComponent2 extends Component {
    render() {
        return (
            <div class="carousel-wrapper" >
                <Carousel infiniteLoop useKeyboardArrows autoPlay>
                    <div>
                        <img src={require("../Image/C11.png")} />
                    </div>
                    <div>
                        <img src={require("../Image/C10.png")} />
                    </div>
                    <div>
                        <img src={require("../Image/C9.png")} />
                    </div>
                    <div>
                        <img src={require("../Image/C8.png")} />
                    </div>
                    <div>
                        <img src={require("../Image/C7.png")} />
                    </div>
                </Carousel>
            </div>
        );
    };
}