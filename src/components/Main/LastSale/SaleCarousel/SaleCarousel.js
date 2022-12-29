import { A11y, Autoplay, Navigation, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './style.scss';
import { Icon } from 'semantic-ui-react';

import SaleCarouselItem from '../../../Main/LastSale/SaleCarousel/SaleCarouselItem/SaleCarouselItem';

const SaleCarousel = ({ items, isAvailable, isDesktop }) => {
    return (
        <div className={`carousel_wrapper ${isAvailable ? 'available' : 'not-available'}`}>
            <button className='hero_carousel-buttons-prev btn-left'><Icon size='large' name="chevron left" /></button>
            <Swiper
                modules={[A11y, Autoplay, Navigation, Mousewheel]}
                navigation={{
                    prevEl: '.btn-left',
                    nextEl: '.btn-right',
                }}
                // autoplay={{
                //     delay: 0,
                //     disableOnInteraction: false,
                //     pauseOnMouseEnter: true,
                //   }}
                  breakpoints={{
                    1700: {
                        slidesPerView: 4,
                        spaceBetween: -5
                    },
                    1400: {
                        slidesPerView: 3,
                        
                        spaceBetween: -5
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 60
                    }
                  }}
                keyboardControl={true}
                speed={3000}
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

