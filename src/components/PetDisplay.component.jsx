import React, { Component } from 'react';
import { connect } from 'react-redux';
import PetCard from './PetCard.component';
import * as actions from '../features/actions';
import PetDashboard from './PetDashboard.component';



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

class PetDisplay extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='displayContainer'>
        <h1>Your Pet Collection</h1>
        <form onSubmit={this.props.addDog} noValidate>
          <input className='addDogInput' placeholder='Name'/>
          <input className='addDogInput' type='date' />
          <input className='addDogInput' placeholder='Breed' />
          <input className='addDogInput' placeholder='Sex' />
          <input className='addDogInput' placeholder='Weight (lbs)' />
          <button className='addDogButton'>Add dog</button>
        </form>
    
        <div className='petDisplay'>
          {this.props.dogList.map((dog, index) => (
            <PetCard
              key={dog.name + index}
              name={dog.name}
              breed={dog.breed}
              sex={dog.sex}
              birthday={dog.birthday}
              setCurrentDog={this.props.setCurrentDog}
            />
          ))}
        </div>
        <PetDashboard currentDog={this.props.currentDog}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PetDisplay);
