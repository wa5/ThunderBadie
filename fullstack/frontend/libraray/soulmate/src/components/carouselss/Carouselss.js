import React from 'react'
import {Carousel} from 'react-bootstrap'
import ca1 from '../../assets/img/c1.jpg'
import ca2 from '../../assets/img/c2.jpg'
import ca3 from '../../assets/img/c3.jpg'


function Carouselss() {
    return (
        <>
            <Carousel>
  <Carousel.Item>
    <img height="400px"
      className="d-block w-100"
      src={ca3}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height="400px"
      className="d-block w-100"
      src={ca1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height="400px"
      className="d-block w-100"
      src={ca2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    )
}

export default Carouselss
