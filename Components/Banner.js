import React, { useState, useEffect } from 'react';
import './Banner.css';

const imageUrls = [
    "https://live.staticflickr.com/65535/53401027015_68a2969c7f_4k.jpg",
    "https://live.staticflickr.com/65535/53400597816_d1de95006b_4k.jpg",
    "https://live.staticflickr.com/65535/53400921424_6d420d8027_4k.jpg" 
];
const Banner = ({ title }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [nextImageIndex, setNextImageIndex] = useState((currentImageIndex + 1) % imageUrls.length);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex(nextImageIndex);
            setNextImageIndex((nextImageIndex + 1) % imageUrls.length);
        }, 3000); // Cambia la imagen cada 3 segundos

        return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
    }, [currentImageIndex, nextImageIndex]);

    return (
        <div className="banner">
            <div className="banner-image" style={{ backgroundImage: `url(${imageUrls[currentImageIndex]})`, opacity: 1 }} />
            <div className="banner-image" style={{ backgroundImage: `url(${imageUrls[nextImageIndex]})`, opacity: 0 }} />
            <h1 className="banner-title">{title}</h1>
        </div>
    );
};

export default Banner;