import React, { useState } from 'react';
import './freekey-slider.css'

const Slider = (props) => {
  const [quantity, setQuantity] = useState(1);
  const { min, max, label } = props;

  const handleSliderChange = (event) => {
    let target = event.target
    if (event.target.type !== 'range') {
      target = document.getElementById('range')
    } 
    const min = target.min
    const max = target.max
    const val = target.value
    let percentage = (val - min) * 100 / (max - min)
    
    // condition to check whether the document has RTL direction
    // you can move it to a variable, if document direction is dynamic
    if (document.documentElement.dir === 'rtl') {
      percentage = (max - val) 
    }
    
    target.style.backgroundSize = percentage + '% 100%'
    setQuantity(event.target.value);
  };

  // const  handleInputChange(e) {
    
  // }

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
