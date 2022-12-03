import React from 'react';
import '../styles/Header.scss';
import sarthak from '../images/sarthak.jpg';

export const Header = () => {
    return (
        <div className='header-container'>
            <div className="my-image">
                <img src={sarthak} alt="SarthakBhardwaj" />
            </div>
            <div className="my-name">
                <h1>Sarthak Bhardwaj</h1>
            </div>
        </div>
    );
}
