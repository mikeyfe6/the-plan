import React from 'react';

import Header from './header';
import Footer from './footer';

import ResponsiveTag from './helpers/respoTag';

import '../styles/layout.scss';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<div className='the-plan'>
				<Header />
				<main>{children}</main>
				<Footer />
			</div>

			{process.env.NODE_ENV === 'development' && <ResponsiveTag />}
		</>
	);
};

export default Layout;
