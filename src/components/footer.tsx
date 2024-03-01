import React from 'react';

import * as footerStyles from '../styles/modules/footer.module.scss';

const Footer: React.FC = () => {
	return (
		<footer className={footerStyles.footer}>
			<div>This is the footer component</div>
		</footer>
	);
};

export default Footer;
