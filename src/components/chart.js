import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(arr) {
  return Math.round(arr.reduce((a, b) => { return a + b; }) / arr.length);
}

function Chart(props) {
  const currentData = Math.round(props.data[props.data.length - 1]);
  const averageData = average(props.data);

  return (
    <div>
      <Sparklines data={ props.data }>
        <SparklinesLine color={ props.color } />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>Current { currentData } { props.unit }</div>
      <div>Avg { averageData } { props.unit }</div>
    </div>
  );
}

export default Chart;