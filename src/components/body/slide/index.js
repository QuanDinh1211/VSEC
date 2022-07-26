import Slider from "react-slick";

import SlideItem from './SlideItem'
import './styleSlide.scss'

const Slide = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <Slider {...settings}>
            <SlideItem image='slide1.png' />
            <SlideItem image='slide2.png' />
            <SlideItem image='slide3.png' />
        </Slider>
    );
}

export default Slide