import React, {useCallback} from 'react';

import { useFishingLine } from './FishingLine';

function mockQuery(shouldBork) {
  console.log("query");
  return new Promise((r, j) => {
    setTimeout(() => {
      if (shouldBork) {
        j("Line broke :(");
      } else {
        r("Got a fish!");
      }
    }, 3000);
  });
}

function Fisherman(props) {
  const query = useCallback(() => mockQuery(props.borked), [props.borked])
  const [isFetching, error, data] = useFishingLine(query);

  if (isFetching) {
    return (<div>Casting a line...</div>);
  } else if (error) {
    return (<div>{error}</div>);
  }

  return (
    <div>{data}</div>
  )
}

export default Fisherman;
