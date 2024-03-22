import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import { SEO } from '../components/seo';

import Layout from '../components/layout';
import Hero from '../components/hero';
import Intro from '../components/intro';
import Partners from '../components/partners';
import Infomatic from '../components/infomatic';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<Hero />
			<Intro />
			<Partners />
			<Infomatic />
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
