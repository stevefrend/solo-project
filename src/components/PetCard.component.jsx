import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import convertMonthsToYears from '../features/misc/convertMonthsToYears';

const PetCard = (props) => {
  const { name, breed, birthday, sex } = props;
  return (
    <div className='card'>
      <div>
        <h2>{name}</h2>
        <FontAwesomeIcon icon={faDog} size='4x' />
      </div>
      <div>
        <ul>
          <li>{breed}</li>
          <li>{convertMonthsToYears(birthday)}</li>
          <li>{sex}</li>
        </ul>
      </div>
    </div>
  );
};

export default PetCard;
