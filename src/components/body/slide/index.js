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
            <SlideItem image='image 11.png' message='VSEC ĐỊNH HƯỚNG TẦM NHÌN 2023 SẼ NẰM TRONG TOP 3 NHÀ CUNG CẤP DỊCH VỤ GIÁM SÁT VÀ QUẢN TRỊ ATTT CHẤT LƯỢNG ĐẲNG CẤP QUỐC TẾ TẠI VIỆT NAM'/>
            <SlideItem image='slide2.png' />
            <SlideItem image='slide3.png' />
        </Slider>
    );
}

export default Slide