import React, { useEffect } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import * as headerStyles from '../styles/modules/header.module.scss';

const Header: React.FC = () => {
	useEffect(() => {
		const updateVhVariable = () => {
			const vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		};

		updateVhVariable();

		window.addEventListener('resize', updateVhVariable);

		return () => {
			window.removeEventListener('resize', updateVhVariable);
		};
	}, []);

	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (!section) return;

		const hasScrollPosition = section.hasAttribute('data-scroll-center');

		if (hasScrollPosition) {
			const blockValue: ScrollLogicalPosition = 'center';
			const scrollOptions: ScrollIntoViewOptions = {
				behavior: 'smooth',
				block: blockValue,
				inline: 'nearest',
			};
			section.scrollIntoView(scrollOptions);
			return;
		}

		const offset = 175;
		const scrollOptions: ScrollToOptions = {
			behavior: 'smooth',
		};

		window.scrollTo({
			top: section.offsetTop - offset,
			...scrollOptions,
		});
	};

	return (
		<header className={headerStyles.header}>
			<StaticImage
				src='../images/logo.png'
				alt='Logo'
				width={100}
				height={150}
			/>
			<ul>
				<li>
					<button
						type='button'
						onClick={() => scrollToSection('home')}>
						home
					</button>
				</li>
				<li>
					<button
						type='button'
						onClick={() => scrollToSection('videos')}>
						videos
					</button>
				</li>
				<li>
					<button
						type='button'
						onClick={() => scrollToSection('contact')}>
						contact
					</button>
				</li>
			</ul>
		</header>
	);
};

export default Header;
