// TODO: moet een slider worden met images van partners

import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import {
	// Navigation,
	// Pagination,
	// Scrollbar,
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
import 'swiper/scss/a11y';

import '../styles/swiper.scss';

import * as partnerStyles from '../styles/modules/partners.module.scss';

const Hero: React.FC = () => {
	return (
		<section className={partnerStyles.partner}>
			<Swiper
				modules={[A11y, Parallax, Autoplay]}
				spaceBetween={10}
				slidesPerView={7}
				loop={true}
				parallax={true}
				// navigation
				// pagination={{
				// 	clickable: true,
				// }}
				autoplay={{
					delay: 3500,
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
				className={partnerStyles.partnerWrapper}>
				<SwiperSlide className={partnerStyles.partnerSlide}>
					<div className={partnerStyles.partnerImage}>
						<StaticImage src='../images/logo-2.jpeg' alt='Partner 1' />
					</div>
				</SwiperSlide>
				<SwiperSlide className={partnerStyles.partnerSlide}>
					<div className={partnerStyles.partnerImage}>
						<StaticImage src='../images/logo-2.jpeg' alt='Partner 2' />
					</div>
				</SwiperSlide>
				<SwiperSlide className={partnerStyles.partnerSlide}>
					<div className={partnerStyles.partnerImage}>
						<StaticImage src='../images/logo-2.jpeg' alt='Partner 3' />
					</div>
				</SwiperSlide>
				<SwiperSlide className={partnerStyles.partnerSlide}>
					<div className={partnerStyles.partnerImage}>
						<StaticImage src='../images/logo-2.jpeg' alt='Partner 4' />
					</div>
				</SwiperSlide>
				<SwiperSlide className={partnerStyles.partnerSlide}>
					<div className={partnerStyles.partnerImage}>
						<StaticImage src='../images/logo-2.jpeg' alt='Partner 5' />
					</div>
				</SwiperSlide>
				<SwiperSlide className={partnerStyles.partnerSlide}>
					<div className={partnerStyles.partnerImage}>
						<StaticImage src='../images/logo-2.jpeg' alt='Partner 6' />
					</div>
				</SwiperSlide>
				<SwiperSlide className={partnerStyles.partnerSlide}>
					<div className={partnerStyles.partnerImage}>
						<StaticImage src='../images/logo-2.jpeg' alt='Partner 7' />
					</div>
				</SwiperSlide>
				<SwiperSlide className={partnerStyles.partnerSlide}>
					<div className={partnerStyles.partnerImage}>
						<StaticImage src='../images/logo-2.jpeg' alt='Partner 8' />
					</div>
				</SwiperSlide>
				<SwiperSlide className={partnerStyles.partnerSlide}>
					<div className={partnerStyles.partnerImage}>
						<StaticImage src='../images/logo-2.jpeg' alt='Partner 9 ' />
					</div>
				</SwiperSlide>
				<SwiperSlide className={partnerStyles.partnerSlide}>
					<div className={partnerStyles.partnerImage}>
						<StaticImage src='../images/logo-2.jpeg' alt='Partner 10' />
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Hero;
