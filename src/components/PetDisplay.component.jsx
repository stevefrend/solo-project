import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PetCard from './PetCard.component';
import * as actions from '../features/actions';

const mapStateToProps = (state) => ({
  dogList: state.pets.dogList,
  username: state.pets.username,
});

const mapDispatchToProps = (dispatch) => ({
  addAllDogs: (dogList) => {
    dispatch(actions.addAllDogs(dogList));
  },
  addDog: (e) => {
    e.preventDefault();
    const formValues = {
      name: e.target.parentNode.childNodes[0].value,
      ageInMonths: Number(e.target.parentNode.childNodes[1].value),
      breed: e.target.parentNode.childNodes[2].value,
      sex: e.target.parentNode.childNodes[3].value,
    };
    dispatch(actions.addDog(formValues));
  },
});

class PetDisplay extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className='displayContainer'>
        <h1>Your Pet Collection</h1>
        <form>
          <input className='addDogInput' placeholder='Name' />
          <input className='addDogInput' type='number' placeholder='Age in months' />
          <input className='addDogInput' placeholder='Breed' />
          <input className='addDogInput' placeholder='Sex' />
          <button className='addDogButton' onClick={this.props.addDog}>
            Add dog
          </button>
        </form>
        <div className='petDisplay'>
          {this.props.dogList.map((dog, index) => (
            <PetCard
              key={dog.name + index}
              name={dog.name}
              breed={dog.breed}
              sex={dog.sex}
              age={dog.ageInMonths}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PetDisplay);

