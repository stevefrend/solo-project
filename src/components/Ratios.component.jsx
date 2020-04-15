import React from 'react';
import ratios from '../features/misc/ratios'
import convertMonthsToYears from '../features/misc/convertMonthsToYears';

const Ratios = (props) => {
  // Check current age and set ratio table accordingly
  const age = convertMonthsToYears(props.dog.birthday);
  console.log(age)
  let ratioTable = ratios.puppyRatios;
  if (age[0] > 0) ratioTable = ratios.adultRatios;
  const { foodAmountInOz } = props;

  return (
    <div>
      <table className="ratiosTable">
        <thead>
          <tr>
            <td>UNIT</td>
            <td>BONE</td>
            <td>MUSLCE MEAT</td>
            <td>LIVER</td>
            <td>SECRETING ORGAN</td>
            <td>VEGGIES</td>
            <td>NUTS</td>
            <td>FRUITS</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ounces</td>
            <td>{(ratioTable.bone * foodAmountInOz).toFixed(1)}</td>
            <td>{(ratioTable.muscleMeat * foodAmountInOz).toFixed(1)}</td>
            <td>{(ratioTable.secretingOrgan * foodAmountInOz).toFixed(1)}</td>
            <td>{(ratioTable.liver * foodAmountInOz).toFixed(1)}</td>
            <td>{(ratioTable.veggies * foodAmountInOz).toFixed(1)}</td>
            <td>{(ratioTable.nuts * foodAmountInOz).toFixed(1)}</td>
            <td>{(ratioTable.fruit * foodAmountInOz).toFixed(1)}</td>
          </tr>
          <tr>
            <td>Grams</td>
            <td>{((ratioTable.bone * foodAmountInOz) * 28.34).toFixed()}</td>
            <td>{((ratioTable.muscleMeat * foodAmountInOz) * 28.34).toFixed()}</td>
            <td>{((ratioTable.secretingOrgan * foodAmountInOz) * 28.34).toFixed()}</td>
            <td>{((ratioTable.liver * foodAmountInOz) * 28.34).toFixed()}</td>
            <td>{((ratioTable.veggies * foodAmountInOz) * 28.34).toFixed()}</td>
            <td>{((ratioTable.nuts * foodAmountInOz) * 28.34).toFixed()}</td>
            <td>{((ratioTable.fruit * foodAmountInOz) * 28.34).toFixed()}</td>

          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Ratios;
