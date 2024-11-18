import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SamplePrevArrow, SampleNextArrow } from './CustomArrow'; 
import './card.scss';
import { Wheel } from '../../Svg';
import { useNavigate } from 'react-router-dom';
import Pharmacy from '/pharmacy.jpg';
import Dress from '/dress2.jpg';
import Tech from '/techhh.jpg';
import Manufacturing from '/manufacturing.jpg';

const CardSlider = () => {
  const settings = {
    dots: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />, 
    prevArrow: <SamplePrevArrow />, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const backgroundImages = [
    { image: Pharmacy, content: 'Medical Services', path: '/medical' },
    { image: Dress, content: 'Retail Services', path: '/retail' },
    { image: Tech, content: 'Technology Service', path: '/Techservice' },
    { image: Manufacturing, content: 'Manufacturing Services', path: '/manufacture' },
  ];

  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="cardslick" style={{ background: "#efe6e6" }}>
      <div className="cardParent" style={{ position: 'relative' }}>
        <div className='Text'>
          <Wheel />
          <h3 style={{ color: 'rgb(61, 121, 242)' }}>INDUSTRIES</h3>
          <h1>We Serve All the <span style={{ color: 'grey' }}>Sectors</span></h1>
        </div>
        <Slider {...settings}>
          {backgroundImages.map((bgItem, index) => (
            <div key={index} onClick={() => handleCardClick(bgItem.path)}>
              <div 
                className="card" 
                style={{ 
                  backgroundImage: `url(${bgItem.image})`,  // Image is used here
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '300px',
                  borderRadius: '10px',
                  color: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '20px',
                  cursor: 'pointer',
                }}
              >
                <h3>{bgItem.content}</h3> 
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardSlider;
