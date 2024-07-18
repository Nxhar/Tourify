import React, { useState, useEffect, useRef } from 'react';
import HussainSagar from '../assets/img1.jpg';
import SomnathTemple from '../assets/img2.jpg';
import IndiaGate from '../assets/img3.jpg';
import Ramoji from '../assets/ramoji.jpg'
import Golconda from '../assets/golconda.jpg'
import Charminar from '../assets/charminar.jpg'
import Birla from '../assets/birla.jpg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Map from './Map'

const FadingCarousel = () => {

  const ref = useRef(null);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [HussainSagar, SomnathTemple, IndiaGate];

  useEffect(() => {
    // Automatically change the background image every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
    <div className="homeContainer">

      {/* Carousel */}
        <div className="fading-carousel-container">
          <div className="blackoverlay"></div>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`India Image ${index + 1}`} // Customize alt text
              className={`carousel-slide ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
          
        </div>

        <div className="mainHeader">
          India
        </div>

        <div className="mainDesc" onClick={()=> ref.current.scrollIntoView({ behavior: 'smooth' })}>
          Explore India like Never Before.
        </div>

    </div>

    <div className='secondContainer'>
        <div className="descriptiveText">
        India, a vibrant tapestry of colors, spices, and spirituality, beckons with a rich tapestry of cultures and heritage. From the majestic Himalayas to the serene beaches of Goa, India is a land of contrasts. Its ancient history whispers through the intricate carvings of temples and the echo of traditional music. The aroma of spices dances in the air, a testament to its culinary diversity. With festivals like Diwali and Holi, India celebrates life with zest. In this kaleidoscope of traditions, the unity lies in diversity, creating a mesmerizing mosaic that captivates the soul and leaves an indelible mark on every visitor.
        </div>

        <div className="descriptiveHeading">
          Let's dive into some of the Attractions of India!
        </div>

        <div className="carouselOfImages">
            <Carousel />
        </div>

        <div className="Map" ref={ref}>
          <div className="MapHeader">Explore India!</div>
          
          <Map />
        </div>

    </div>

    </>
  );
};

const Carousel = () => {
  const attractions = [
    { image: Ramoji, title: 'Ramoji Film City' },
    { image: Golconda, title: 'Golconda Fort' },
    { image: Charminar, title: 'Charminar' },
    { image: Birla, title: 'Birla Mandir' },
    // Add more attractions as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % attractions.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [attractions]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display three images at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {attractions.map((attraction, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <img className='image' src={attraction.image} alt={`Image ${index + 1}`} />
            <div className="image-title">{attraction.title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};


export default FadingCarousel;
