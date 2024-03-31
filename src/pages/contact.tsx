import * as React from 'react';

import { Link, HeadFC, PageProps } from 'gatsby';

import Layout from '../components/layout';
import { SEO } from '../components/seo';

const Contact: React.FC<PageProps> = () => {
	return (
		<Layout>
			<h1>Contact Page</h1>
			<p>Form</p>
		</Layout>
	);
};

export default Contact;

export const Head: HeadFC = () => <SEO />;
