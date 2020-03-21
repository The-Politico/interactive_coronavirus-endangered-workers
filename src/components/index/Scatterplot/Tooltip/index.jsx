import React from 'react';
import styles from './styles.scss';
import classnames from 'classnames';
import { format } from 'd3';

class Tooltip extends React.Component {
  render () {
    const d = this.props.data;
    return (
      <div className={classnames('Tooltip', styles.styles)}>
        <h3> {d.job} </h3>
        <table>
          <tr>
            <td className='metric-name'>Median annual wage: </td>
            <td className='metric-nb'>${format(',')(d.income)} </td>
          </tr>
          <tr>
            <td className='metric-name'>Physical proximity scale: </td>
            <td className='metric-nb'>{d.proximity}</td>
          </tr>
          <tr>
            <td className='metric-name'>No. employed: </td>
            <td className='metric-nb'>{format(',')(d.population)}</td>
          </tr>
        </table>

      </div>
    );
  }
}
export default Tooltip;
