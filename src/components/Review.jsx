import Carousel from "react-bootstrap/Carousel";
import "./Review.css";

function Review() {
  return (
    <Carousel style={{ backgroundColor: "#37326e", width: "100%" }}>
      <Carousel.Item interval={4000}>
        <div className='d-block w-100 height'>
          <Carousel.Caption>
            <blockquote className='blockqoute mb-0'>
              <p>
                {""}Kul och super bra träning för alla!{""}
              </p>
              <footer
                style={{ color: "whitesmoke" }}
                className='blockquote-footer'
              >
                <cite title='Source Title'>Soffi</cite>
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
                {""}Rolig och välgörande träning i utomhusmiljö 👍🏻👍🏻👍🏻👍🏻👍🏻{""}
              </p>
              <footer
                style={{ color: "whitesmoke" }}
                className='blockquote-footer'
              >
                <cite title='Source Title'>Nettan</cite>
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
                {""}Bästa träningen, speciellt i dessa tider! Utomhus och med
                avstånd 👌⭐️💪{""}
              </p>
              <footer
                style={{ color: "whitesmoke" }}
                className='blockquote-footer'
              >
                <cite title='Source Title'>Monika</cite>
              </footer>
            </blockquote>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Review;
