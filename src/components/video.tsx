import React from 'react';

import * as videoStyles from '../styles/modules/video.module.scss';

const Videos: React.FC = () => {
	return (
		<section className={videoStyles.video} id='videos'>
			<ul>
				<li>Vid 1</li>
				<li>Vid 2</li>
				<li>Vid 3</li>
				<li>Vid 4</li>
				<li>Vid 5</li>
				<li>Vid 6</li>
				<li>Vid 7</li>
				<li>Vid 8</li>
			</ul>
		</section>
	);
};

export default Videos;
