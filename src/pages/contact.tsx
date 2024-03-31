import * as React from 'react';

import type { HeadFC, PageProps } from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image';

import { SEO } from '../components/seo';

import Layout from '../components/layout';
import Form from '../components/form';

import * as contactStyles from '../styles/modules/contact.module.scss';

const Contact: React.FC<PageProps> = () => {
	return (
		<Layout>
			<h1>Contact Pagina</h1>

			<div className={contactStyles.formImage}>
				<Form />
				<div>
					<StaticImage
						src='../images/stockimg.jpg'
						alt='hero'
						style={{
							maxHeight: '500px',
							filter: 'grayscale(1)',
							borderRadius: '0.25em',
						}}
					/>
				</div>
			</div>
		</Layout>
	);
};

export default Contact;

export const Head: HeadFC = () => <SEO />;
