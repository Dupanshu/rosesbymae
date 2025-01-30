import React, { useState } from 'react';
import pic1 from '../media/pic1.png';
import pic2 from '../media/pic2.png';

function Banner(props) {
  const [buttonOnePosition, setButtonOnePosition] = useState({ x: 0, y: 0 });
  const [buttonTwoPosition, setButtonTwoPosition] = useState({ x: 0, y: 0 });
  
  // Mouse move handler to update position for button 1
  const handleMouseMoveButtonOne = (e) => {
    const rect = e.target.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    setButtonOnePosition({ x: mouseX, y: mouseY });
  };

  // Mouse move handler to update position for button 2
  const handleMouseMoveButtonTwo = (e) => {
    const rect = e.target.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    setButtonTwoPosition({ x: mouseX, y: mouseY });
  };

  // Mouse leave handler to reset span size for button 1
  const handleMouseLeaveButtonOne = () => {
    setButtonOnePosition({ x: 0, y: 0 });
  };

  // Mouse leave handler to reset span size for button 2
  const handleMouseLeaveButtonTwo = () => {
    setButtonTwoPosition({ x: 0, y: 0 });
  };
  
  return (
    <div className="banner">
      <div className="container">
        <div className="left-side">
          <p>
            Timeless Elegance
            <span>Endless Love</span>
            <span>Flower That Last a Lifetime.</span>
          </p>

          <button 
            onMouseMove={handleMouseMoveButtonOne}
            onMouseLeave={handleMouseLeaveButtonOne}
          >
            <span
              style={{
                left: `${buttonOnePosition.x}px`,
                top: `${buttonOnePosition.y}px`,
                width: buttonOnePosition.x > 0 ? '300%' : '0', // Expanding effect
                height: buttonOnePosition.y > 0 ? '300%' : '0', // Expanding effect
              }}
            ></span>
            Check Collections
          </button>

          <button 
            onMouseMove={handleMouseMoveButtonTwo}
            onMouseLeave={handleMouseLeaveButtonTwo}
          >
            <span
              style={{
                left: `${buttonTwoPosition.x}px`,
                top: `${buttonTwoPosition.y}px`,
                width: buttonTwoPosition.x > 0 ? '300%' : '0', // Expanding effect
                height: buttonTwoPosition.y > 0 ? '300%' : '0', // Expanding effect
              }}
            ></span>
            Customize Bouquet
          </button>
        </div>
      </div>

      {/* right side */}
      <div className="bnr-rgt"></div>
      <div><img src={pic1} alt='Pic1' title='Pic1' className="img1"/></div>
      <div><img src={pic2} alt='Pic2' title='Pic2' className="img2"/></div>
    </div>
  );
}

export default Banner;

