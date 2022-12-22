import Carousel from "react-bootstrap/Carousel";
import "./Review.css";

function Review() {
  return (
    <Carousel style={{ backgroundColor: "#A2BFCB", width: "100%" }}>
      <Carousel.Item interval={4000}>
        <div className='d-block w-100 height'>
          <Carousel.Caption>
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
        <div className='d-block w-100 height'>
          <Carousel.Caption>
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
        <div className='d-block w-100 height'>
          <Carousel.Caption>
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
    </Carousel>
  );
}

export default Review;
