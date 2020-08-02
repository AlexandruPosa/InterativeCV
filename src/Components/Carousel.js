import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class CarouselComponent extends Component {
    render() {
        return (
            <div class="carousel-wrapper" >
                <Carousel infiniteLoop useKeyboardArrows autoPlay>
                    <div>
                        <img src={require("../Image/C1.png")} />
                    </div>
                    <div>
                        <img src={require("../Image/C2.png")} />
                    </div>
                    <div>
                        <img src={require("../Image/C3.png")} />
                    </div>
                    <div>
                        <img src={require("../Image/C4.png")} />
                    </div>
                    <div>
                        <img src={require("../Image/C5.png")} />
                    </div>
                    <div>
                        <img src={require("../Image/C6.png")} />
                    </div>
                </Carousel>
            </div>
        );
    };
}