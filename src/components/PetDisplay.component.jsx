import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import PetCard from './PetCard.component';
import * as actions from '../features/actions';
import PetDashboard from './PetDashboard.component';
import { Modal, Button } from 'react-bootstrap';

const mapStateToProps = (state) => ({
  dogList: state.pets.dogList,
  username: state.pets.username,
  currentDog: state.pets.currentDog,
});

const mapDispatchToProps = (dispatch) => ({
  addAllDogs: (dogList) => {
    dispatch(actions.addAllDogs(dogList));
  },
  addDog: (e) => {
    e.preventDefault();
    const formValues = {
      name: e.target.childNodes[0].value,
      birthday: e.target.childNodes[1].value,
      breed: e.target.childNodes[2].value,
      sex: e.target.childNodes[3].value,
      weight: e.target.childNodes[4].value,
    };
    dispatch(actions.addDog(formValues));
  },
  setCurrentDog: (name) => {
    dispatch(actions.setCurrentDog(name));
  },
});

const PetDisplay = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='displayContainer'>
      <h1>Your Pet Collection</h1>
      <form onSubmit={props.addDog}>
        <input className='addDogInput' placeholder='Name' />
        <input className='addDogInput' type='date' />
        <input className='addDogInput' placeholder='Breed' />
        <input className='addDogInput' placeholder='Sex' />
        <input className='addDogInput' placeholder='Weight (lbs)' />
        <button className='addDogButton'>Add dog</button>
      </form>
      {/* MODAL */}
      <Button variant='primary' onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className='petDisplay'>
        {props.dogList.map((dog, index) => (
          <PetCard
            key={dog.name + index}
            name={dog.name}
            breed={dog.breed}
            sex={dog.sex}
            birthday={dog.birthday}
            setCurrentDog={props.setCurrentDog}
          />
        ))}
      </div>
      <PetDashboard currentDog={props.currentDog} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PetDisplay);
