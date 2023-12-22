import React, { useState, useEffect } from 'react';

const images = [
    '/src/assets/images/bromo.png',
    '/src/assets/images/gunung.png',
    '/src/assets/images/gununglagi.png',
    '/src/assets/images/ladang_warna.png',
    '/src/assets/images/nature.png',
    '/src/assets/images/pemadangan.png',
    '/src/assets/images/rajaampat.png',
];

const BackgroundChanger = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 3 seconds

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    return (
        <div>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`background ${currentIndex === index ? 'visible' : ''}`}
                    style={{ backgroundImage: `url(${image})` }}
                />
            ))}
        </div>
    );
};

export default BackgroundChanger;
