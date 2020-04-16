import React, { useState } from 'react';
import { connect } from 'react-redux';
import PetCard from './PetCard.component';
import * as actions from '../features/actions';
import PetDashboard from './PetDashboard.component';
import { Modal, Button, Form, Col } from 'react-bootstrap';

const mapStateToProps = (state) => ({
  dogList: state.pets.dogList,
  username: state.pets.username,
  currentDog: state.pets.currentDog,
  isLoggedIn: state.pets.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  addAllDogs: (dogList) => {
    dispatch(actions.addAllDogs(dogList));
  },
  addDog: (e) => {
    e.preventDefault();
    const formValues = {
      name: e.target.elements[0].value,
      weight: e.target.elements[1].value,
      sex: e.target.elements[2].value,
      birthday: e.target.elements[3].value,
      breed: e.target.elements[4].value,
      caloricIntake: e.target.elements[5].value
    };
    dispatch(actions.addDog(formValues));
  },
  editDog: (e, name) => {
    e.preventDefault();
    const oldName = name;
    const formValues = {
      name: e.target.elements[0].value,
      weight: e.target.elements[1].value,
      breed: e.target.elements[2].value,
      sex: e.target.elements[3].value,
      birthday: e.target.elements[4].value,
      caloricIntake: e.target.elements[5].value
    };
    dispatch(actions.editDog(oldName, formValues));
  },
  deleteDog: (e) => {
    e.preventDefault();
    e.stopPropagation();
    let name = e.target.parentNode.parentNode.firstChild.firstChild.value;
    dispatch(actions.deleteDog(name));
  },
  setCurrentDog: (name) => {
    dispatch(actions.setCurrentDog(name));
  },
  handleLogout: () => {
    dispatch(actions.logout());
  },
});


const PetDisplay = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='displayContainer'>
      
      <div className="petDisplayButtons">
        <Button variant='primary' onClick={handleShow}>
          Add a dog
        </Button>
        <h1>{props.username}'s Pet Collection</h1>
        <Button variant='secondary' onClick={props.handleLogout}>
          Logout
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter your dog's information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={props.addDog}>
            <Form.Row>
              <Col>
                <Form.Control placeholder="Name" />
              </Col>
              <Col>
                <Form.Control type="number "placeholder="Weight (lbs)" />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
              <Form.Control as="select">
                <option>Female</option>
                <option>Male</option>
              </Form.Control>
              </Col>
              <Col>
                <Form.Control type="date" placeholder="Birthday" />
              </Col>
            </Form.Row>
            <Form.Control placeholder="Breed" />
            <Form.Control placeholder="Caloric intake goal" />
            <Button variant='secondary' onClick={handleClose}>Close</Button>
            <Button variant='primary' type="submit" onClick={handleClose}>Save Changes</Button>
          </Form>
        </Modal.Body>
      </Modal>
      <div className='petDisplay'>
        {props.dogList.map((dog, index) => (
          <PetCard
            key={dog.name + index}
            name={dog.name}
            breed={dog.breed}
            sex={dog.sex}
            weight={dog.weight}
            caloricIntake={dog.caloricIntake}
            birthday={dog.birthday}
            setCurrentDog={props.setCurrentDog}
            editDog={props.editDog}
            deleteDog={props.deleteDog}
          />
        ))}
      </div>
      <PetDashboard currentDog={props.currentDog} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PetDisplay);
// export default PetDisplay;
