import React, { Component } from "react";
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';


class PopUp extends Component {
    state = {
        showPopup: false,
    }

    handleClose = () => {

        this.setState({
            showPopup: false
        })
    }

    componentWillReceiveProps(nextProps) {
        if (this.props != nextProps) {
            this.setState({
                showPopup: nextProps.show
            });
        }
    }



    render() {
        const { show, title, body } = this.props;
        const { showPopup } = this.state;


        return (
            <Modal show={showPopup} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{body}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.handleClose}>
                        Close
                         </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default PopUp;