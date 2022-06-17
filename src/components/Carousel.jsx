import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (

    <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item className="carousel__item">
        <a href="https://rolling-real-estate.pages.dev/" target="_blank" rel="noreferrer">
          <img className="carousel__img" src="./img/rolling.png" alt="First slide"/>
        </a>
        {/* <Carousel.Caption className="carousel__caption carousel__caption-1">
          <h3>portfolio 1 - Rolling Real Estate</h3>
          <p>Grids</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item className="carousel__item">
          <a href="https://kondaguey.github.io/wanderlust-css-portfolio/public/index.html" target="_blank" rel="noreferrer">
            <img className="carousel__img" src="./img/lust.png" alt="Second slide"/>
          </a>
          {/* <Carousel.Caption className="carousel__caption carousel__caption-2">
            <h3>portfolio 2 - Wanderlust</h3>
            <p>Flexbox</p>
          </Carousel.Caption> */}
        </Carousel.Item>

     <Carousel.Item className="carousel__item">
          <a href="https://kondaguey.github.io/wanderlust-css-portfolio/public/tours.html" target="_blank" rel="noreferrer">
            <img className="carousel__img" src="./img/natours.png" alt="Third slide"/>
          </a>
          {/* <Carousel.Caption className="carousel__caption carousel__caption-3">
            <h3>portfolio 3 - Natours</h3>
            <p>The Old School Float</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item className="carousel__item">
          <a href="https://kondaguey.github.io/another-keeper-app/" target="_blank" rel="noreferrer">
            <img className="carousel__img" src="./img/keeper.png" alt="Fourth slide"/>
          </a>
          {/* <Carousel.Caption className="carousel__caption carousel__caption-4">
            <h3>Keeper App</h3>
            <p>React useState Practice</p>
          </Carousel.Caption> */}
        </Carousel.Item>

    </Carousel>
  );
}

export default ControlledCarousel;