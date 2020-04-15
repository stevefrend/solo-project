import React from 'react';
import Ratios from './Ratios.component';


const PetDashboard = (props) => {
  return(
    <div>
      <h2>{props.currentDog.name}</h2>
      <Ratios dog={props.currentDog}/>
    </div>
  )
};

export default PetDashboard;