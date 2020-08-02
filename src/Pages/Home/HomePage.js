import React, { Component } from "react";
import "./HomePage.css";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faLaptopCode, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import CarouselComponent from "../../Components/Carousel";
import CarouselComponent2 from "../../Components/Carousel2";




class Home extends Component {
    render() {
        return (

            <div className="container" style={{ display: "flex", flexDirection: "column" }}>

                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div style={{ marginTop: "20px", border: "1px solid lightgrey", borderRadius: "5px", padding: "15px", boxShadow: "1px 1px 10px 5px lightblue" }}>
                        <p style={{ fontSize: "20px", fontWeight: "bold", backgroundColor: "lightblue", width: "105px", padding: "5px", borderRadius: "5px" }}>About Me</p>
                        <div style={{ width: "500px" }}>
                            <p>Hi , my name is Alex, I m 25 years old. I am a social person,  I like going out and meet new people. I am hardworking and motivated when it comes to work and I dedicate myself completely when I really want to finish something.</p>

                        </div>

                    </div>
                    <div style={{ marginTop: "20px", border: "1px solid lightgrey", borderRadius: "5px", padding: "15px", boxShadow: "1px 1px 10px 5px lightblue" }}>
                        <p style={{ fontSize: "20px", fontWeight: "bold", backgroundColor: "lightblue", width: "165px", padding: "5px", borderRadius: "5px" }}>Know me better</p>
                        <div style={{ width: "500px", textAlign: "center" }}>
                            <p style={{ fontSize: "15px", fontWeight: "bold" }}>Hobbies</p>
                            <div style={{ display: "flex", justifyContent: "space-around" }}>
                                <div style={{ textAlign: "center" }}>
                                    <p style={{ fontStyle: "italic", fontWeight: "bold" }}>Gym</p>
                                    <FontAwesomeIcon size='3x' icon={faDumbbell} style={{ backgroundColor: "lightblue", borderRadius: "5px", padding: "5px" }} />
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <p style={{ fontStyle: "italic", fontWeight: "bold" }}> Coding</p>
                                    <FontAwesomeIcon size='3x' icon={faLaptopCode} style={{ backgroundColor: "lightblue", borderRadius: "5px", padding: "5px" }} />
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <p style={{ fontStyle: "italic", fontWeight: "bold" }} > Traveling</p>
                                    <FontAwesomeIcon size='3x' icon={faPlaneDeparture} style={{ backgroundColor: "lightblue", borderRadius: "5px", padding: "5px" }} />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                    <div style={{ backgroundColor: "lightblue", padding: "15px", border: "1px solid lightgrey", borderRadius: "5px" }}>
                        <a href="./" download="Posa Alexandru CV.pdf">Download CV</a>
                    </div>

                </div>

                <div className="container-home" style={{ display: "flex", justifyContent: "space-between" }}>


                    <div style={{ width: "500px", marginBottom: "20px", marginTop: "20px", border: "1px solid lightgrey", borderRadius: "5px", padding: "15px", boxShadow: "1px 1px 10px 5px lightblue" }}>
                        <p style={{ fontSize: "20px", fontWeight: "bold", backgroundColor: "lightblue", width: "165px", padding: "5px", borderRadius: "5px" }}>Previous project</p>
                        <div style={{ textAlign: "center" }}>
                            <p style={{ fontSize: "15px", fontWeight: "bold" }}>Imdb</p>
                            <CarouselComponent dynamicHeight={true} thumbWidth={5} />
                        </div>
                    </div>
                    <div style={{ width: "500px", marginBottom: "20px", marginTop: "20px", border: "1px solid lightgrey", borderRadius: "5px", padding: "15px", boxShadow: "1px 1px 10px 5px lightblue" }}>
                        <p style={{ fontSize: "20px", fontWeight: "bold", backgroundColor: "lightblue", width: "145px", padding: "5px", borderRadius: "5px" }}>Actual project</p>
                        <div style={{ textAlign: "center" }}>
                            <p style={{ fontSize: "15px", fontWeight: "bold" }}>Interative CV</p>
                            <CarouselComponent2 dynamicHeight={true} thumbWidth={5} />
                        </div>
                    </div>




                </div>

            </div >
        )
    }
}

export default Home;