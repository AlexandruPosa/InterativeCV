import React, { Component } from "react";
import "./EducationPage.css";

class Education extends Component {

    render() {
        return (
            <div className="education-page-container">
                <div className="college-container"></div>

                <img src={require("../../Image/stairs-education.jpg")} useMap="#image-map" />
                <div className="interactice-image-ed-p">
                    <img src={require("../../Image/toca.png")} />
                </div>

                <div className="interactice-image-ed-p2">
                    <img src={require("../../Image/toca.png")} />
                </div>
                <map name="image-map" >
                    <div className="container-education-page">

                        <div className="high-school-parent-container">
                            <area className="class" target="" alt="" title="" href="" coords="321,468,404,579" shape="rect" />
                            <div className="high-school-container">
                                <h3 style={{ marginTop: "10px" }}>Inochentie Micu Clain High School</h3>
                                <p>2009-2013</p>
                                <p>Mathematics-informatics profile</p>
                                <img src={require("../../Image/colegiul.png")} />

                            </div>
                        </div>
                        <div className="college-parent-container">
                            <area target="" alt="" title="" href="" coords="505,252,632,364" shape="rect" />
                            <div className="college-container">
                                <h3 style={{ marginTop: "10px" }}>Technical University of Cluj-Napoca</h3>
                                <p>2013-2018</p>
                                <h6>Bachelor's degree in Electronics, Telecommunications and Information Technology</h6>

                                <p>Applied informatics</p>
                                <p>Software engineering</p>
                                <p>Computer networks</p>
                                <p>Multimedia technologies</p>

                                <img src={require("../../Image/facultate.png")} />

                            </div>
                        </div>
                        <div className="master-parent-container">
                            <area target="" alt="" title="" href="" coords="807,13,910,111" shape="rect" />
                            <div className="master-container">
                                <h3 style={{ marginTop: "10px" }} href="https://ac.utcluj.ro/master.html">Technical University of Cluj-Napoca</h3>
                                <p>2019-Present</p>
                                <h6>Applied Informatics master</h6>

                                <p>Embedded systems</p>
                                <p>Software application testing</p>
                                <p>User interface programming</p>
                                <p>Making applications for www</p>

                                <img src={require("../../Image/master.png")} />

                            </div>
                        </div>
                    </div>
                </map>

            </div>
        )
    }
}

export default Education;
