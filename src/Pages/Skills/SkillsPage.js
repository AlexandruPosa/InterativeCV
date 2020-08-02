import React, { Component } from "react";
import "./SkillsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faBootstrap, faGit, faReact, faJs } from '@fortawesome/free-brands-svg-icons';
import { faCircle, faChartLine, faBookReader, faUsersCog, faSearch, faPen, faHeadphones, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faCircle as emptyCircle } from '@fortawesome/free-regular-svg-icons';
import { faLightbulb, faComments, faCommentDots } from '@fortawesome/free-regular-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProgressBar } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

class Skills extends Component {
    render() {
        return (

            <Container>
                <Row>
                    <Col style={{ backgroundColor: "#e6e6e6", marginTop: "25px", marginBottom: "15px", textAlign: "center", borderRadius: "5px" }}>
                        <h2 >Technical skills</h2>

                    </Col>
                    <Col></Col>
                    <Col style={{ backgroundColor: "#e6e6e6", marginTop: "25px", marginBottom: "15px", textAlign: "center", borderRadius: "5px" }}>
                        <h2>Soft skills</h2>
                    </Col>
                </Row>
                <Row>
                    <Col >

                        <Container style={{ padding: "0px" }}>

                            <Row >

                                <Col style={{ padding: "0px" }}>
                                    <div className="html-container" style={{ marginTop: "15px", marginBottom: "15px", display: "flex", flexDirection: "column", alignItems: "center" }}>

                                        <FontAwesomeIcon size='3x' icon={faHtml5} color="red" />
                                        <p style={{ fontWeight: 'bold' }}>HTML5</p>

                                        <span className="html-container-description">how to build a User Interface</span>
                                    </div>
                                </Col>
                                <Col >
                                    <div style={{ marginTop: "30px", marginBottom: "15px" }}>
                                        <FontAwesomeIcon size='1x' icon={faCircle} />
                                        <FontAwesomeIcon size='1x' icon={faCircle} />
                                        <FontAwesomeIcon size='1x' icon={faCircle} />
                                        <FontAwesomeIcon size='1x' icon={faCircle} />
                                        <FontAwesomeIcon size='1x' icon={emptyCircle} />
                                    </div>
                                </Col>
                            </Row>
                            <Row>

                                <Col style={{ padding: "0px" }}>
                                    <div className="css-container" style={{ marginTop: "15px", marginBottom: "15px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <FontAwesomeIcon size='3x' icon={faCss3} color="blue" />
                                        <p style={{ fontWeight: 'bold' }}>CSS3</p>
                                        <span className="css-container-description">how to build a User Interface</span>
                                    </div>
                                </Col>
                                <Col>
                                    <div style={{ marginTop: "30px", marginBottom: "15px" }}>
                                        <FontAwesomeIcon size='1x' icon={faCircle} />
                                        <FontAwesomeIcon size='1x' icon={faCircle} />
                                        <FontAwesomeIcon size='1x' icon={faCircle} />
                                        <FontAwesomeIcon size='1x' icon={faCircle} />
                                        <FontAwesomeIcon size='1x' icon={emptyCircle} />
                                    </div>
                                </Col>
                            </Row>
                            <Row>

                                <Col style={{ padding: "0px" }}>
                                    <div className="js-container" style={{ marginTop: "15px", marginBottom: "15px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <FontAwesomeIcon size='3x' icon={faJs} color="yellow" />
                                        <p style={{ fontWeight: 'bold' }}>JavaScript</p>
                                        <span className="js-container-description">how to use variables, functions, objects, scope,
                                        AJAX, DOM, BOM</span>
                                    </div>
                                </Col>
                                <Col>
                                    <div style={{ marginTop: "30px", marginBottom: "15px" }}>
                                        <FontAwesomeIcon size='1x' icon={faCircle} />
                                        <FontAwesomeIcon size='1x' icon={faCircle} />
                                        <FontAwesomeIcon size='1x' icon={faCircle} />
                                        <FontAwesomeIcon size='1x' icon={emptyCircle} />
                                        <FontAwesomeIcon size='1x' icon={emptyCircle} />
                                    </div>
                                </Col>
                            </Row>
                            <Row>

                                <Col style={{ padding: "0px" }}>
                                    <div className="bootstrap-container" style={{ marginTop: "15px", marginBottom: "15px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <FontAwesomeIcon size='3x' icon={faBootstrap} color="purple" />
                                        <p style={{ fontWeight: 'bold' }}>Bootstrap</p>
                                        <span className="bootstrap-container-description">how to use predefined Bootstrap components</span>
                                    </div>
                                </Col>

                                <Col>
                                    <div style={{ marginTop: "30px", marginBottom: "15px" }}>
                                        <FontAwesomeIcon size='1x' icon={faCircle} />
                                        <FontAwesomeIcon size='1x' icon={faCircle} />
                                        <FontAwesomeIcon size='1x' icon={faCircle} />
                                        <FontAwesomeIcon size='1x' icon={emptyCircle} />
                                        <FontAwesomeIcon size='1x' icon={emptyCircle} />
                                    </div>
                                </Col>
                            </Row>
                            <Row>

                                <Col style={{ padding: "0px" }}>
                                    <div className="react-container" style={{ marginTop: "15px", marginBottom: "15px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <FontAwesomeIcon size='3x' icon={faReact} color="cyan" />
                                        <p style={{ fontWeight: 'bold' }}>React</p>
                                        <span className="react-container-description">create single page app</span>
                                    </div>
                                </Col>

                                <Col>
                                    <div style={{ marginTop: "30px", marginBottom: "15px" }}>
                                        <FontAwesomeIcon size='1x' icon={faCircle} />
                                        <FontAwesomeIcon size='1x' icon={faCircle} />
                                        <FontAwesomeIcon size='1x' icon={faCircle} />
                                        <FontAwesomeIcon size='1x' icon={emptyCircle} />
                                        <FontAwesomeIcon size='1x' icon={emptyCircle} />
                                    </div>
                                </Col>
                            </Row>
                            <Row>

                                <Col style={{ padding: "0px" }}>
                                    <div style={{ marginTop: "15px", marginBottom: "15px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <FontAwesomeIcon size='3x' icon={faGit} />
                                        <p style={{ fontWeight: 'bold' }}>Git</p>
                                    </div>
                                </Col>

                                <Col>
                                    <div style={{ marginTop: "30px", marginBottom: "15px" }}>
                                        <FontAwesomeIcon size='1x' icon={faCircle} />
                                        <FontAwesomeIcon size='1x' icon={faCircle} />
                                        <FontAwesomeIcon size='1x' icon={faCircle} />
                                        <FontAwesomeIcon size='1x' icon={faCircle} />
                                        <FontAwesomeIcon size='1x' icon={emptyCircle} />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col style={{ backgroundColor: "#e6e6e6", maxWidth: "1px", borderRadius: "50%" }}>

                    </Col>
                    <Col>
                        <Row>
                            <Col style={{ padding: "0px" }}>
                                <div className="teamwork" style={{ marginTop: "15px", marginBottom: "15px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <FontAwesomeIcon size='3x' icon={faUsersCog} />
                                    <p style={{ fontWeight: 'bold' }}>Teamwork</p>
                                    <span className="teamwork-description">dedicated team player with good communication skills
                                    acquired through continuous interaction with different multicultural
                                groups.</span>
                                </div>
                            </Col>
                            <Col style={{ marginTop: "30px", marginBottom: "15px" }}>
                                <ProgressBar now='85' animated variant="now" label='85%' />
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ padding: "0px" }}>
                                <div className="teamwork" style={{ marginTop: "15px", marginBottom: "15px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <FontAwesomeIcon size='3x' icon={faChartLine} />
                                    <p style={{ fontWeight: 'bold' }}>Analytical mindset</p>
                                </div>
                            </Col>
                            <Col style={{ marginTop: "30px", marginBottom: "15px" }}>
                                <ProgressBar now='75' animated variant="now" label='75%' />
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ padding: "0px" }}>
                                <div className="quickLearner" style={{ marginTop: "15px", marginBottom: "15px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <FontAwesomeIcon size='3x' icon={faBookReader} />
                                    <p style={{ fontWeight: 'bold' }}>Quick learner</p>
                                    <span className="quickLearner-description">flexible person who easily adapts to different work
                                    environments.</span>
                                </div>
                            </Col>
                            <Col style={{ marginTop: "30px", marginBottom: "15px" }}>
                                <ProgressBar now='90' animated variant="now" label='90%' />
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ padding: "0px" }}>
                                <div className="quickLearner" style={{ marginTop: "15px", marginBottom: "15px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <FontAwesomeIcon size='2x' icon={faSearch} />
                                    <p style={{ fontWeight: 'bold' }}>Attention to details</p>
                                </div>
                            </Col>
                            <Col style={{ marginTop: "30px", marginBottom: "15px" }}>
                                <ProgressBar now='80' animated variant="now" label='80%' />
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ padding: "0px" }}>
                                <div className="selfStarter" style={{ marginTop: "15px", marginBottom: "15px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <FontAwesomeIcon size='2x' icon={faLightbulb} />
                                    <p style={{ fontWeight: 'bold' }}>Self-starter</p>
                                    <span className="selfStarter-description">I'm an ambitious person, who embraces new challenges and
                                    sets new goals in order to grow and developed myself.</span>
                                </div>
                            </Col>
                            <Col style={{ marginTop: "30px", marginBottom: "15px" }}>
                                <ProgressBar now='80' animated variant="now" label='80%' />
                            </Col>
                        </Row>

                    </Col>
                </Row>
                <Row>
                    <Col style={{ marginTop: "5px", marginBottom: "80px", backgroundColor: "#e6e6e6", maxWidth: "360px", borderRadius: "5px" }}>
                        <h3>Drive license : <span>Category B</span></h3>
                        <div id="car">

                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ marginBottom: "30px" }}>
                        <Table bordered="true" style={{ boxShadow: "1px 1px 2px 5px lightgrey" }}>
                            <thead>
                                <tr>
                                    <th style={{ textAlign: "center", fontSize: "20px" }} colSpan="5">English</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ textAlign: "center", fontWeight: "bold" }} colSpan="2">UNDERSTANDING</td>
                                    <td style={{ textAlign: "center", fontWeight: "bold" }} colSpan="2">SPEAKING</td>
                                    <td style={{ textAlign: "center", fontWeight: "bold" }} colSpan="1">WRITING</td>

                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}><FontAwesomeIcon size='2x' icon={faHeadphones} /> <p>Listening</p></td>
                                    <td style={{ textAlign: "center" }}><FontAwesomeIcon size='2x' icon={faBookOpen} /> <p>Reading</p></td>
                                    <td style={{ textAlign: "center" }}><FontAwesomeIcon size='2x' icon={faComments} /> <p>Spoken interaction</p></td>
                                    <td style={{ textAlign: "center" }}><FontAwesomeIcon size='2x' icon={faCommentDots} /> <p>Spoken production</p></td>
                                    <td style={{ textAlign: "center" }}><FontAwesomeIcon size='2x' icon={faPen} /> <p>Writing</p></td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}><p>B2</p> <p>Independent user</p></td>
                                    <td style={{ textAlign: "center" }}><p>B2</p><p>Independent user</p></td>
                                    <td style={{ textAlign: "center" }}><p>B2</p><p>Independent user</p></td>
                                    <td style={{ textAlign: "center" }}><p>B2</p><p>Independent user</p></td>
                                    <td style={{ textAlign: "center" }}><p>B2</p><p>Independent user</p></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ marginBottom: "30px" }}>
                        <Table bordered="true" style={{ boxShadow: "1px 1px 2px 5px lightgrey" }}>
                            <thead>
                                <tr>
                                    <th style={{ textAlign: "center", fontSize: "20px" }} colSpan="5">German</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ textAlign: "center", fontWeight: "bold" }} colSpan="2">UNDERSTANDING</td>
                                    <td style={{ textAlign: "center", fontWeight: "bold" }} colSpan="2">SPEAKING</td>
                                    <td style={{ textAlign: "center", fontWeight: "bold" }} colSpan="1">WRITING</td>

                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}><FontAwesomeIcon size='2x' icon={faHeadphones} /> <p>Listening</p></td>
                                    <td style={{ textAlign: "center" }}><FontAwesomeIcon size='2x' icon={faBookOpen} /> <p>Reading</p></td>
                                    <td style={{ textAlign: "center" }}><FontAwesomeIcon size='2x' icon={faComments} /> <p>Spoken interaction</p></td>
                                    <td style={{ textAlign: "center" }}><FontAwesomeIcon size='2x' icon={faCommentDots} /> <p>Spoken production</p></td>
                                    <td style={{ textAlign: "center" }}><FontAwesomeIcon size='2x' icon={faPen} /> <p>Writing</p></td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}><p>A1</p> <p>Beginner</p></td>
                                    <td style={{ textAlign: "center" }}><p>A1</p><p>Beginner</p></td>
                                    <td style={{ textAlign: "center" }}><p>A1</p><p>Beginner</p></td>
                                    <td style={{ textAlign: "center" }}><p>A1</p><p>Beginner</p></td>
                                    <td style={{ textAlign: "center" }}><p>A1</p><p>Beginner</p></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Container >


        )
    }
}

export default Skills;