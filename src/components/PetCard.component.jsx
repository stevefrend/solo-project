import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import convertMonthsToYears from '../features/misc/convertMonthsToYears';

const PetCard = (props) => {
  const { name, breed, birthday, sex } = props;
  const age = convertMonthsToYears(birthday);
  return (
    <div onClick={() => {props.setCurrentDog(name)}} className='card'>
      <div>
        <h2>{name}</h2>
        <FontAwesomeIcon icon={faDog} size='4x' />
      </div>
      <hr/>
      <div>
        <ul>
          <li>{breed}</li>
          <li>{`Years: ${age[0]} Months: ${age[1]}`}</li>
          <li>{sex}</li>
        </ul>
      </div>
    </div>
  );
};

export default PetCard;
