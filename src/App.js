import { ReactCompareSlider, ReactCompareSliderImage, useReactCompareSliderRef } from 'react-compare-slider';
import React from 'react';

const App = () => {

  const reactCompareSliderRef = useReactCompareSliderRef();

  const [rate, setRate] = React.useState(24);

  let percent = .9
  let direction = 1
  let increment = 0.01

  setInterval(() => {
    let incr = increment
    if (direction == -1) {
      incr = -incr
    }
    const newPercent = percent + incr
    let dir = 1
    let per = 1
    if (newPercent <= 0.0 && direction == -1) {
      dir = 1
      per = 0
    } else if (newPercent >= 1.0 && direction == 1) {
      dir = -1
      per = 1
    } else {

      per = newPercent
      dir = direction
    }
    percent = per
    direction = dir
    reactCompareSliderRef.current.setPosition(per * 100)
  }, rate);



  return (
    <div style={{ width: "50%", height: "50%" }}>
      <ReactCompareSlider
        ref={reactCompareSliderRef}
        transition="ease-in-out"
        itemOne={<ReactCompareSliderImage src={"image1.jpeg"} alt="Image one" />}
        itemTwo={<ReactCompareSliderImage src={"image2.jpeg"} alt="Image one" />}
      /></div>
  );
}

export default App;

