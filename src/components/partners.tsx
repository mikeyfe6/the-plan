// TODO: moet een slider worden met images van partners

import React, { useRef } from 'react';

// import { StaticImage } from 'gatsby-plugin-image';

import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Parallax,
	Autoplay,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
// import 'swiper/scss/scrollbar';
import 'swiper/scss/parallax';
import 'swiper/scss/autoplay';

import '../styles/swiper.scss';

import * as partnerStyles from '../styles/modules/partners.module.scss';

import partnerOne from '../images/logo-2.jpeg';

const Hero: React.FC = () => {
	return (
		<section className={partnerStyles.swiperContainer}>
			<Swiper
				modules={[Scrollbar, A11y, Parallax, Autoplay]}
				spaceBetween={10}
				slidesPerView={7}
				centeredSlides={true}
				loop={true}
				parallax={true}
				// navigation
				// pagination={{
				// 	clickable: true,
				// }}
				autoplay={{
					delay: 5000,
					disableOnInteraction: true,
				}}
				breakpoints={{
					0: {
						slidesPerView: 2,
					},
					480: {
						slidesPerView: 3,
					},
					640: {
						slidesPerView: 4,
					},
					768: {
						slidesPerView: 5,
					},
					1024: {
						slidesPerView: 7,
					},
				}}
				className={partnerStyles.swiperWrapper}>
				<SwiperSlide className={partnerStyles.swiperSlide}>
					<div className={partnerStyles.swiperImage}>
						<img src={partnerOne} alt='Partner 1' />
					</div>
				</SwiperSlide>
				<SwiperSlide className={partnerStyles.swiperSlide}>
					<div className={partnerStyles.swiperImage}>
						<img src={partnerOne} alt='Partner 2' />
					</div>
				</SwiperSlide>
				<SwiperSlide className={partnerStyles.swiperSlide}>
					<div className={partnerStyles.swiperImage}>
						<img src={partnerOne} alt='Partner 3' />
					</div>
				</SwiperSlide>
				<SwiperSlide className={partnerStyles.swiperSlide}>
					<div className={partnerStyles.swiperImage}>
						<img src={partnerOne} alt='Partner 4' />
					</div>
				</SwiperSlide>
				<SwiperSlide className={partnerStyles.swiperSlide}>
					<div className={partnerStyles.swiperImage}>
						<img src={partnerOne} alt='Partner 5' />
					</div>
				</SwiperSlide>
				<SwiperSlide className={partnerStyles.swiperSlide}>
					<div className={partnerStyles.swiperImage}>
						<img src={partnerOne} alt='Partner 6' />
					</div>
				</SwiperSlide>
				<SwiperSlide className={partnerStyles.swiperSlide}>
					<div className={partnerStyles.swiperImage}>
						<img src={partnerOne} alt='Partner 7' />
					</div>
				</SwiperSlide>
				<SwiperSlide className={partnerStyles.swiperSlide}>
					<div className={partnerStyles.swiperImage}>
						<img src={partnerOne} alt='Partner 8' />
					</div>
				</SwiperSlide>
				<SwiperSlide className={partnerStyles.swiperSlide}>
					<div className={partnerStyles.swiperImage}>
						<img src={partnerOne} alt='Partner 9' />
					</div>
				</SwiperSlide>
				<SwiperSlide className={partnerStyles.swiperSlide}>
					<div className={partnerStyles.swiperImage}>
						<img src={partnerOne} alt='Partner 10' />
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Hero;
