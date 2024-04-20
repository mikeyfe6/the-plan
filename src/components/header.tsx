import React, { useRef, useEffect } from 'react';

import { Link } from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image';

import * as headerStyles from '../styles/modules/header.module.scss';

const Header: React.FC = () => {
	const menuRef = useRef<HTMLDivElement | null>(null);
	const headerRef = useRef<HTMLDivElement | null>(null);
	const bannerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			const header = headerRef.current;
			const banner = bannerRef.current;
			const menu = menuRef.current;
			const main = document.querySelector('main');

			if (header && banner && window.scrollY > banner.offsetHeight) {
				menu?.classList.add(headerStyles.sticky);
				main?.style.setProperty('margin-top', `${155}px`);
			} else if (header) {
				menu?.classList.remove(headerStyles.sticky);
				main?.style.removeProperty('margin-top');
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

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

		const offset = 135;
		const scrollOptions: ScrollToOptions = {
			behavior: 'smooth',
		};

		window.scrollTo({
			top: getOffsetTop(section) - offset,
			...scrollOptions,
		});
	};

	return (
		<header className={headerStyles.header} ref={headerRef}>
			<div className={headerStyles.banner} ref={bannerRef}>
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
			<div className={headerStyles.menu} ref={menuRef}>
				<div>
					<StaticImage src='../images/logo.png' alt='Logo' />
					<ul>
						<li>
							{/* <button type='button' onClick={() => scrollToSection('home')}>
							home
						</button> */}
							<Link to='/'>home</Link>
						</li>
						<li>
							<button type='button' onClick={() => scrollToSection('videos')}>
								<b>videos</b>
							</button>
							{/* <Link to='/videos/'>videos</Link> */}
						</li>
						<li>
							{/* <button type='button' onClick={() => scrollToSection('contact')}>
							contact
						</button> */}
							<Link to='/contact/'>contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
