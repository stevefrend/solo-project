import React, { Component } from 'react';
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
      name: e.target.childNodes[0].value,
      birthday: e.target.childNodes[1].value,
      breed: e.target.childNodes[2].value,
      sex: e.target.childNodes[3].value,
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
        <form onSubmit={this.props.addDog} noValidate>
          <input className='addDogInput' placeholder='Name'/>
          <input className='addDogInput' type='date' />
          <input className='addDogInput' placeholder='Breed' />
          <input className='addDogInput' placeholder='Sex' />
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
            />
          ))}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PetDisplay);
