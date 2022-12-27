import { A11y, Autoplay, Navigation, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './style.scss';
import { Icon } from 'semantic-ui-react';

import SaleCarouselItem from '../../../Main/LastSale/SaleCarousel/SaleCarouselItem/SaleCarouselItem';

const SaleCarousel = ({ items, isDesktop, slidesToShow }) => {

    return (
        <div className='carousel_wrapper'>
            <button className='hero_carousel-buttons-prev btn-left'><Icon size='large' name="chevron left" /></button>
            <Swiper
                // install Swiper modules
                modules={[A11y, Autoplay, Navigation, Mousewheel]}
                navigation={{
                    prevEl: '.btn-left',
                    nextEl: '.btn-right',
                }}
                keyboardControl= {true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                speed = {3000}
                spaceBetween={slidesToShow === 3 ? 20 : 60}
                slidesPerView={slidesToShow} // Ici, rajouter une règle qui n'affiche que 1 slide à partir de 768px
                loop={true}
                grabCursor={true}
                className='carousel_wrapper-content'
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index} className='swiper'>
                        <SaleCarouselItem item={item} isDesktop={isDesktop} className='card-sale' />
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className='hero_carousel-buttons-next btn-right'><Icon size='large' name="chevron right" /></button>
        </div >
    );
}

export default SaleCarousel;

