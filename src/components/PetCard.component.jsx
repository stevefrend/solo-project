import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import convertMonthsToYears from '../features/misc/convertMonthsToYears';

const PetCard = (props) => {
  const { name, breed, sex, weight, caloricIntake, birthday } = props;
  const age = convertMonthsToYears(birthday);
  const newAge = age[0] > 0 ? `${age[0]} years and ${age[1]} months old` : `${age[1]} months old`;

  return (
    <div onClick={() => {props.setCurrentDog(name)}} className='card'>
      <div>
        <h2>{name}</h2>
        <FontAwesomeIcon icon={faDog} size='4x' />
      </div>
      <hr/>
      <div>
        <ul>
          <li>{newAge}</li>
          <li>Breed: {breed}</li>
          <li>Weight: {weight}lbs</li>
          <li>Caloric goal: {caloricIntake}</li>
          <li>{sex}</li>
        </ul>
      </div>
    </div>
  );
};

export default PetCard;
