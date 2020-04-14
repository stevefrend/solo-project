import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';

const PetCard = (props) => {
  const { name, breed, age, sex } = props;
  return (
    <div className='card'>
      <div>
        <h2>{name}</h2>
        <FontAwesomeIcon icon={faDog} size='4x' />
      </div>
      <div>
        <ul>
          <li>Breed: {breed}</li>
          <li>Age: {age}</li>
          <li>Sex: {sex}</li>
        </ul>
      </div>
    </div>
  );
};

export default PetCard;
