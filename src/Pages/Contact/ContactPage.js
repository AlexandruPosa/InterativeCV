import React, { Component } from "react";
import "./ContactPage.css";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Contact extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11

    };

    handleSubmit = () => {
        alert("Your message was sent successfully.");
    }
    render() {
        return (

            <div class="container-map">
                <div className="container-form">

                    <Form style={{ marginTop: "50px" }} >
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>First name</Form.Label>
                                <Form.Control placeholder="First name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLastName">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control placeholder="Last name" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Control as={'textarea'} placeholder="Send me a message..." />
                            </Form.Group>
                        </Form.Row>

                        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                    <div><p style={{ fontSize: "20px", width: "150px", backgroundColor: "#e6e6e6", borderRadius: "5px", padding: "20px", boxShadow: "1px 1px 5px 5px lightgrey" }}>"If you want to know more about me, fell free to send me a message."</p></div>
                </div>
                <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "40px", backgroundColor: "#e6e6e6", padding: "5px", borderRadius: "5px", boxShadow: "1px 1px 5px 5px lightgrey" }}>
                    <h3>Here you can find me !!!</h3>
                </div>
                <div class="container-arrow">
                    <p class="arrow down">Down</p>
                </div>
                <div className="map">
                    <iframe className="container-iframe"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.298123001971!2d23.602600315002398!3d46.778729652790915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c1ec3b2d283%3A0x1c115dbffd430074!2sStrada%20Scor%C8%9Barilor%2012%2C%20Cluj-Napoca%20400000!5e0!3m2!1sro!2sro!4v1593630220170!5m2!1sro!2sro"
                    ></iframe>

                </div>
            </div >

        )
    }
}

export default Contact;