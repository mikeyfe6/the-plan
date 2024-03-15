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

	const getOffsetTop = (element: HTMLElement) => {
		let offsetTop = 0;
		while (element) {
			offsetTop += element.offsetTop;
			element = element.offsetParent as HTMLElement;
		}
		return offsetTop;
	};

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

		const offset = 0;
		const scrollOptions: ScrollToOptions = {
			behavior: 'smooth',
		};

		window.scrollTo({
			top: getOffsetTop(section) - offset,
			...scrollOptions,
		});
	};

	return (
		<header className={headerStyles.header}>
			<div className={headerStyles.banner}>
				<div>
					<span>Welkom bij The Plan</span>
					<ul>
						<li>
							<a href='#!' rel='noopener noreferrer' target='_blank'>
								<i className='fab fa-facebook' />
							</a>
						</li>
						<li>
							<a href='#!' rel='noopener noreferrer' target='_blank'>
								<i className='fab fa-instagram' />
							</a>
						</li>
						<li>
							<a href='#!' rel='noopener noreferrer' target='_blank'>
								<i className='fab fa-linkedin' />
							</a>
						</li>
						<li>
							<a href='#!' rel='noopener noreferrer' target='_blank'>
								<i className='fab fa-youtube' />
							</a>
						</li>
						<li>
							<a href='#!' rel='noopener noreferrer' target='_blank'>
								<i className='fab fa-whatsapp' />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className={headerStyles.menu}>
				<StaticImage
					src='../images/logo.png'
					alt='Logo'
					width={100}
					height={150}
				/>
				<ul>
					<li>
						<button type='button' onClick={() => scrollToSection('home')}>
							home
						</button>
					</li>
					<li>
						<button type='button' onClick={() => scrollToSection('videos')}>
							videos
						</button>
					</li>
					<li>
						<button type='button' onClick={() => scrollToSection('contact')}>
							contact
						</button>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
