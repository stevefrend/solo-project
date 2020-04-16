import React from 'react';


const IntakeCalculator = (props) => {

  return(
    <div>
      <table className="intakeTable">
        <thead>
          <tr>
            <td>Current weight</td>
            <td>Total intake oz / grams</td>
            <td>Caloric intake</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.dog.weight}</td>
            <td>{`${(props.foodAmountInOz).toFixed()} / ${(props.foodAmountInOz * 28.34).toFixed()}`}</td>
            <td>{props.dog.caloricIntake}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default IntakeCalculator;