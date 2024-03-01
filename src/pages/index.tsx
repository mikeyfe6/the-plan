import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import Layout from '../components/layout';
import Hero from '../components/hero';
import Intro from '../components/intro';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<Hero />
			<Intro />
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
