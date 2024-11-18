import React from 'react';
import {LeftArrow , RightArrow} from "../../Svg"

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      style={{
        background: '#efe6e6',
        borderRadius: '50%',
        border: '2px solid rgb(61, 121, 242)',
        height:"45px",
        display:"flex",
        width: "45px",
        color: 'white',
        position: 'absolute',
        alignItems:'center',
        justifyContent:'center',
        bottom: '-40px',
        left: 'calc(50% - 50px)', 
        zIndex: 1,
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <LeftArrow/>
    </button>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      style={{
        background: '#efe6e6',
        borderRadius: '50%',
        border: '2px solid rgb(61, 121, 242)',
        height:"45px",
        width: "45px",
        color: 'white',
        display:"flex",
        position: 'absolute',
        alignItems:'center',
        justifyContent:'center',
        bottom: '-40px',
        right: 'calc(50% - 50px)', // Adjust the right position for centering
        zIndex: 1,
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
     < RightArrow/>
    </button>
  );
};

export { SamplePrevArrow, SampleNextArrow };
