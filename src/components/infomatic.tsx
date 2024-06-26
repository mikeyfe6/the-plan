import React from 'react';

import * as infomaticStyles from '../styles/modules/infomatic.module.scss';

import deco1 from '../images/deco/deco1.jpg';
import deco2 from '../images/deco/deco2.jpg';
import deco3 from '../images/deco/deco3.jpg';

const Infomatic: React.FC = () => {
	return (
		<section className={infomaticStyles.infomatic}>
			<div>
				<h3>Titel 1</h3>
				<h4>Dit is een subtitel 1</h4>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged.
				</p>
			</div>
			<div>
				<img src={deco1} alt='deco1' />
			</div>
			<div>
				<h3>Titel 2</h3>
				<h4>Dit is een subtitel 2</h4>
				<p>
					It was popularised in the 1960s with the release of Letraset sheets
					containing Lorem Ipsum passages, and more recently with desktop
					publishing software like Aldus PageMaker including versions of Lorem
					Ipsum, but also the leap into electronic typesetting, remaining
					essentially unchanged..
				</p>
			</div>
			<div>
				<img src={deco2} alt='deco2' />
			</div>
			<div>
				<h3>Titel 3</h3>
				<h4>Dit is een subtitel 3</h4>
				<p>
					Contrary to popular belief, Lorem Ipsum is not simply random text. It
					has roots in a piece of classical Latin literature from 45 BC, making
					it over 2000 years old. Richard McClintock, a Latin professor at
					Hampden-Sydney College in Virginia, looked up one of the more obscure
					Latin words, consectetur, from a Lorem Ipsum passage, and going
					through the cites of the word in classical literature, discovered the
					undoubtable source.
				</p>
			</div>
			<div>
				<img src={deco3} alt='deco3' />
			</div>
		</section>
	);
};

export default Infomatic;
