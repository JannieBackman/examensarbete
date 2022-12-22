import Carousel from "react-bootstrap/Carousel";

import Test from "./assets/bg_test.jpg";
import { Card } from "react-bootstrap";
function Review() {
  return (
    <Carousel style={{ backgroundColor: "#A2BFCB", width: "100%" }}>
      <Carousel.Item interval={4000}>
        <div
          className='d-block w-100'
          style={{ height: "10rem", backgroundColor: "pink" }}
        >
          <Carousel.Caption style={{ backgroundColor: "pink" }}>
            <blockquote className='blockqoute mb-0'>
              <p>
                {""}Mycket bra träning!{""}
              </p>
              <footer className='blockquote-footer'>
                <cite title='Source Title'>Maja</cite>
              </footer>
            </blockquote>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='holder.js/800x400?text=Second slide&bg=282c34'
          alt='Second slide'
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='holder.js/800x400?text=Third slide&bg=20232a'
          alt='Third slide'
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Review;
