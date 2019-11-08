import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Popup() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Under Construction</Modal.Title>
                </Modal.Header>
                <Modal.Body>Please excuse the website's current appearance.</Modal.Body>
                <Modal.Footer>
                    <Button variant='primary' onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Popup;
