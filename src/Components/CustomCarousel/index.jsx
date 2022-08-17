import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CustomCarousel() {
    return (
        <Carousel autoPlay showArrows infiniteLoop showThumbs={false}>
            <div>
                <img
                    src="http://conestoga-star-wars.herokuapp.com/images/poster1.jpg"
                    alt="poster1"
                />
            </div>
            <div>
                <img
                    src="http://conestoga-star-wars.herokuapp.com/images/poster2.jpg"
                    alt="poster2"
                />
            </div>
            <div>
                <img
                    src="http://conestoga-star-wars.herokuapp.com/images/poster3.jpg"
                    alt="poster3"
                />
            </div>
        </Carousel>
    );
}

export default CustomCarousel;
