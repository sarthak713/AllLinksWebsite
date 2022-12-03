import React from 'react';
import '../styles/ImageBox.scss';

export const ImageBox = ({ source, link }) => {
  return (
    <div className='imageBoxContainer'>
      <a href={link} target="_blank">
        <img src={source} alt="" />
      </a>
    </div>
  );
}
