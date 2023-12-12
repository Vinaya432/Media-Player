import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Add() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Videos</h5>
        <button onClick={handleShow} style={{color:'white'}} className='btn'><i class="fa-solid fa-photo-film"></i></button>
      </div>

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload A Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the Details!!!</p>
        <FloatingLabel
        controlId="floatingInput"
        label="Uploading Video ID"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Uploading Video ID" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Uploading Video caption"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Uploading Video caption" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Uploading Video Image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Uploading Video Image URL" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Uploading Youtube Link"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Uploading Youtube Link" />
      </FloatingLabel>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add