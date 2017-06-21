import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

function Chart(props) {
  return (
    <Sparklines data={ props.data }>
      <SparklinesLine />
    </Sparklines>
  );
}

export default Chart;