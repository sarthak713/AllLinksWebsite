import React from 'react';
import { ImageBox } from './ImageBox';
import '../styles/Body.scss';
import gmail from '../images/gmail.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

export const Body = () => {
    return (
        <div className='bodyContainer'>
            <ImageBox source={github} link="https://github.com/sarthak713" />
            <ImageBox source={linkedin} link="https://www.linkedin.com/in/sarthak-bhardwaj-2a65b9217/" />
            <ImageBox source={gmail} link="mailto:sarthakbhardwaj713@gmail.com" />
            <ImageBox source={instagram} link="https://www.instagram.com/ssarthakbhardwaj/" />
        </div>
    );
}
