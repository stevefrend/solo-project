import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import convertMonthsToYears from '../features/misc/convertMonthsToYears';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const PetCard = (props) => {
  const { name, breed, sex, weight, caloricIntake, birthday } = props;
  const age = convertMonthsToYears(birthday);
  const displayAge = age[0] > 0 ? `${age[0]} years and ${age[1]} months old` : `${age[1]} months old`;
  //hooks for modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      onClick={() => {
        props.setCurrentDog(name);
      }}
      className='card'
    >
      <div>
        <h2>{name}</h2>
        <FontAwesomeIcon icon={faDog} size='4x' />
      </div>
      <hr />
      <div>
        <ul>
          <li>{displayAge}</li>
          <li>Breed: {breed}</li>
          <li>Weight: {weight}lbs</li>
          <li>Caloric goal: {caloricIntake}</li>
          <li>{sex}</li>
        </ul>
      </div>
      <div className='cardButtonsDiv'>
        <Button variant='info' size='sm' onClick={handleShow}>
          Edit
        </Button>
        <Button variant='danger' size='sm' onClick={props.deleteDog}>
          Delete
        </Button>
      </div>
      {/*  modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your dog's information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => {props.editDog(e, name)}}>
            <Form.Group as={Row}>
              <Form.Label column sm="3">Name: </Form.Label>
                <Col sm="9">
                  <Form.Control defaultValue={name} />
                </Col>  
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="3">Weight (lbs): </Form.Label>
                <Col sm="9">
                  <Form.Control defaultValue={weight} />
                </Col>  
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="3">Breed: </Form.Label>
                <Col sm="9">
                  <Form.Control defaultValue={breed} />
                </Col>  
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="3">Sex: </Form.Label>
                <Col sm="9">
                  <Form.Control as='select' defaultValue={sex}>
                    <option>Female</option>
                    <option>Male</option>
                  </Form.Control>
                </Col>  
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="3">Birthday: </Form.Label>
                <Col sm="9">
                  <Form.Control defaultValue={birthday} />
                </Col>  
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="3">Caloric intake: </Form.Label>
                <Col sm="9">
                  <Form.Control defaultValue={caloricIntake} />
                </Col>  
            </Form.Group>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
            <Button variant='primary' type='submit' onClick={handleClose}>
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PetCard;
