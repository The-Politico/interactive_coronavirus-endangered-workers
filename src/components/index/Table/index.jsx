import React, { useState } from 'react';
import styles from './styles.scss';

import { format, max } from 'd3';

const Table = (props) => {
  const { data } = props;
  data.sort((a, b) => b.population - a.population);
  const dmax = max(data.map(a => a.population));
  const [tableHide, toggleTable] = useState(true);
  const hiddenClass = tableHide ? 'hidden' : '';
  const buttonText = tableHide ? 'Show all jobs' : 'Hide jobs';

  return (
    <div className={styles.component + ' class-name'}>
      <table>
        <thead>
          <tr>
            <th className='occupation'> Occupation </th>
            <th className='income'> Income </th>
            <th className='population'> No. employed </th>
            <th />
          </tr>
        </thead>
        <tbody>
          { data.map((d, i) =>
            <tr className={i >= 10 ? hiddenClass : ''}>
              <td className='occupation'>{d.job}</td>
              <td className='income'>${format(',')(d.income)}</td>
              <td className='population'>{format(',')(d.population)}</td>
              <td className='bars'>
                <div
                    className={`bar population bin-${d.bin}`}
                    style={{ width: i === 0 ? `calc(${d.population * 100 / dmax}% - 10px)` : `${d.population * 100 / dmax}%` }}
                  />
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <button className='tableToggle' onClick={() => toggleTable(!tableHide)}>{buttonText}</button>
    </div>
  );
}
export default Table;
