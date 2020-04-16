import React from 'react';
import Ratios from './Ratios.component';
import IntakeCalculator from './IntakeCalculator.component';
import mP from '../features/misc/maintenancePercentage'
import convertMonthsToYears from '../features/misc/convertMonthsToYears';

const PetDashboard = (props) => {
  // calculate daily intake here and send down to tables
  if (typeof props.currentDog !== 'string') {
    const age = convertMonthsToYears(props.currentDog.birthday);
    let foodPercentage = mP[age[1]];
    if(age[0] > 0) {
      foodPercentage = 0.020;
    }
    const foodAmountInOz = (props.currentDog.weight * foodPercentage) * 16;
  
    return (
      <div>
        <div className="petDashboard">
          <h2>{props.currentDog.name}</h2>
          <Ratios dog={props.currentDog} age={props.age} foodAmountInOz={foodAmountInOz}/>
          <IntakeCalculator dog={props.currentDog} foodAmountInOz={foodAmountInOz}/>
        </div>
      </div>
    );
  } else {
    return <div className="noCurrentDog"><em>{props.currentDog}</em></div>
  }
};

export default PetDashboard;
