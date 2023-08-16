import React, { useState } from 'react';
import './freekey-slider.css'

const Slider = (props) => {
  const [quantity, setQuantity] = useState(1);
  const { min, max, label } = props;

  const handleSliderChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div className='freekey-slider-container'>
      <label className="freekey-slider-label" htmlFor="quantitySlider">{label}: {quantity}</label>
      <input
        type="range"
        id="quantitySlider"
        min={min}
        max={max}
        step="1"
        value={quantity}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default Slider;
