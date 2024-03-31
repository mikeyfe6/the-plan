import React from 'react';

import * as footerStyles from '../styles/modules/footer.module.scss';

const Footer: React.FC = () => {
	return (
		<footer className={footerStyles.footer}>
			<div>
				<div>
					<h4>The Plan</h4>
					<h5>Contactgegevens:</h5>
					<ul className={footerStyles.contact}>
						<li>contact@theplan.nl</li>
						<li>0612345678</li>
						<li>Straatnaam 123</li>
						<li>1234LJ, Woonplaats</li>
					</ul>
				</div>
				<div>
					<h4>Pagina's</h4>
					<ul className={footerStyles.contact}>
						<li>Over The Plan</li>
						<li>Veelgestelde vragen</li>
						<li>Algemene voorwaarden</li>
						<li>Privacy Statement</li>
						<li>Cookie beleid</li>
					</ul>
				</div>
				<div>
					<h4>Follow us on</h4>
					<ul className={footerStyles.icons}>
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

					<span>Powered by Menefex</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
