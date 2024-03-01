import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import * as heroStyles from '../styles/modules/hero.module.scss';

const Hero: React.FC = () => {
	return (
		<section
			className={heroStyles.hero}
			id='hero'>
			<div>
				<StaticImage
					src='../images/stockimg.jpg'
					alt='hero'
					style={{ maxHeight: '600px', filter: 'grayscale(1)' }}
				/>
			</div>
		</section>
	);
};

export default Hero;
