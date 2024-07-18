import React, {useState} from 'react'
import IMG1 from '../assets/image1.jpg';
import IMG2 from '../assets/image2.jpg';
import IMG3 from '../assets/image3.png';
import TMap from '../assets/tmap.png'
import {NavLink} from 'react-router-dom'

function Telangana() {


  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const images = [IMG1, IMG2, IMG3];

  React.useEffect(() => {
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
    <div>
        
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

        <div className="mapContainer" style={{zIndex:'200'}}>
            <img src={TMap} alt="" />
            <div className="pins">
                <MapWithPins/>
            </div>  
        </div>


        <div className="h2">Telangana</div>

        

    </div>

    <div className="telanganaDescription">
    Telangana is a state in India located on the south-central stretch of the Indian peninsula on the high Deccan Plateau. It was formed as the 29th state of India on June 2, 2014, after being separated from the northwestern part of Andhra Pradesh 12. The state has an area of 112,077 km² and a population of 35,003,674 as per the 2011 census 1. The capital and largest city of Telangana is Hyderabad.
    </div>

    <div className="h2New">Let's dive into the Culture of Telangana!!</div>

    <div className="timelessart">
        <TelanganaArt />
    </div>


    </>
  )
}









const TelanganaArt = () => {
    return (
      <div className="art-wrapper">
        <header>
          <h1>Telangana's Timeless Artistry.</h1>
        </header>
  
        <div className="art-container">
        <div class="art-item">
            <img class="art-image" src="https://cms.tstdc.in/fetch?payload=ec3c155e-83b1-41a1-89cf-2560c616babe.jpg" alt="Art 1"/>
            <div class="art-description">
                <h2>Nirmal Arts</h2>
                <p>Nirmal Arts Nirmal town of Adilabad district is known for its varied range of handicrafts. The amazing skill of the craftsmen makes the works appear authentic with their dazzling use of colors accompanied by traditional techniques of creating masterpieces.</p>
                <a class="learn-more" href="https://en.wikipedia.org/wiki/Nirmal_paintings" target="_blank">Learn More</a>
            </div>
        </div>

        <div class="art-item">
            <img class="art-image" src="https://i.pinimg.com/736x/a5/88/0d/a5880dcea5f1f517542c88f86672139b.jpg" alt="Art 2"/>
            <div class="art-description">
                <h2>Pochampally Ikat Weaving</h2>
                <p>Pochampally Ikat Weaving is a renowned textile art originating from Telangana. This ancient weaving technique involves resist dyeing the yarns before they are woven, creating intricate and vibrant patterns on the fabric. Pochampally sarees and dress materials are highly prized for their unique designs, making them an integral part of Telangana's cultural identity.</p>
                <a class="learn-more" href="https://en.wikipedia.org/wiki/Pochampally_sari" target="_blank">Learn More</a>
            </div>
        </div>

        <div class="art-item">
            <img class="art-image" src="https://cdn.shopify.com/s/files/1/0582/4007/3878/files/bidriware.jpg?v=1634582546" alt="Art 3"/>
            <div class="art-description">
                <h2>Bidriware Craft</h2>
                <p>Bidriware Craft is a distinctive metalwork art form originating from Telangana. Artisans create intricate designs on objects like vases, bowls, and jewelry using a unique combination of zinc, copper, and tin. The final product is adorned with silver inlay work, resulting in stunning blackened silver patterns against the metallic background.</p>
                <a class="learn-more" href="https://en.wikipedia.org/wiki/Bidriware" target="_blank">Learn More</a>
            </div>
        </div>

        <div class="art-item">
            <img class="art-image" src="https://www.artandantiquesmag.com/wp-content/uploads/2015/06/201507_deccan_03.jpg" alt="Art 4"/>
            <div class="art-description">
                <h2>Deccani Miniature Painting</h2>
                <p>Deccani Miniature Painting is an exquisite art form that flourished in the Deccan region, including Telangana. Skilled artists create detailed and vibrant paintings depicting themes from Persian, Mughal, and local cultures. The use of rich colors, intricate patterns, and fine detailing makes Deccani Miniature Painting a unique and visually captivating art style.</p>
                <a class="learn-more" href="https://en.wikipedia.org/wiki/Deccan_painting" target="_blank">Learn More</a>
            </div>
        </div>

        <div class="art-item">
            <img class="art-image" src="https://mapacademy.io/wp-content/uploads/2022/04/cherial-scroll-painting.jpg" alt="Art 5"/>
            <div class="art-description">
                <h2>Cherial Scroll Painting</h2>
                <p>Cherial Scroll Painting is a traditional narrative art form hailing from Telangana. Artisans create scroll paintings that depict stories from mythology, folklore, and daily life. These vibrant and expressive paintings often use bold colors and distinctive characters, making them a popular form of visual storytelling in the region.</p>
                <a class="learn-more" href="https://en.wikipedia.org/wiki/Cheriyal_scroll_painting" target="_blank">Learn More</a>
            </div>
        </div>
        </div>
      </div>
    );
  };
  









const MapWithPins = () => {
    // State to manage hover and click events
    const [hoveredPin, setHoveredPin] = useState(null);
    const [clickedPin, setClickedPin] = useState(null);
  
    // Function to handle pin hover
    const handlePinHover = (pinId) => {
      setHoveredPin(pinId);
    };
  
    // Function to handle pin click
    const handlePinClick = (pinId) => {
      setClickedPin(pinId);
      // Add your logic to navigate to the wiki link based on pinId
      // You can use window.location.href or react-router for navigation
    };
  
    // Data representing the pins on the map (you can replace this with your own data)
    const pinsData = [
      { id: 1, x: 150, y: 150, wikiLink: 'https://en.wikipedia.org/wiki/Pin1', text: 'Charminar' },
      { id: 2, x: 200, y: 130, wikiLink: 'https://en.wikipedia.org/wiki/Pin2', text: 'Golconda Fort' },
      { id: 3, x: 300, y: 120, wikiLink: '', text:'1000 Pillar Temple'}
      // Add more pin data as needed
    ];
  
    return (
      <div className="map-container">
        {pinsData.map((pin) => (
         
         <NavLink to={`/telangana/${pin.text}`} >
          <div
            key={pin.id}
            className={`pin ${hoveredPin === pin.id ? 'hovered' : ''} ${clickedPin === pin.id ? 'clicked' : ''}`}
            style={{ left: pin.x, top: pin.y }}
            onMouseEnter={() => handlePinHover(pin.id)}
            onMouseLeave={() => handlePinHover(null)}
            onClick={() => handlePinClick(pin.id)}
          >
            
            <div className="tooltip">{hoveredPin === pin.id && pin.text}</div>
            
          </div>
          </NavLink>
        ))}
      </div>
    );
  };

export default Telangana