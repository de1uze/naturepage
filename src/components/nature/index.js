import React from 'react';
import './style.scss';
import NatureLogo from '../../assets/nature.png';
import Food from '../../assets/food.png';
import Food1 from '../../assets/food1.png';

const Nature = () => {
  return (
    <div className='nature-wrapper'>
      <img src={NatureLogo} alt='nature' />
      <div className='nature-title'>Welcome to Nature</div>
      <div className='nature-des'>
      Nature, in the broadest sense, is the physical world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science.
      </div>
      <div className='nature-display'>
        <img src={Food} alt='' />
        <img src={Food1} alt='' />
        <img src={Food} alt='' />
        <img src={Food} alt='' />
      </div>
    </div>
  );
};

export default Nature;
