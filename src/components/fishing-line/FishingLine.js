import {useEffect, useState} from 'react';

function useFishingLine(fn) {
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [result, setResult] = useState(null);

  console.log("finshing: starting");

  useEffect(() => {
    console.log("fishing: effect")
    fn().then(result => {
      console.log("fishing: data");
      setResult(result)
      setIsFetching(false);
      setError(null);
    }).catch(err => {
      console.log("fishing: error");
      setError(err);
      setIsFetching(false);
      setResult(null);
    });
  }, [fn])
  console.log("fishing: return");

  return [isFetching, error, result];
}

export {
  useFishingLine
};
