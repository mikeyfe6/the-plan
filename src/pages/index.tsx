import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import Layout from '../components/layout';
import Hero from '../components/hero';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<Hero />
			<h1>The Plan</h1>

			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged.
			</p>

			<p>
				It was popularised in the 1960s with the release of Letraset sheets
				containing Lorem Ipsum passages, and more recently with desktop
				publishing software like Aldus PageMaker including versions of Lorem
				Ipsum.
			</p>

			<p>
				It was popularised in the 1960s with the release of Letraset sheets
				containing Lorem Ipsum passages, and more recently with desktop
				publishing software like Aldus PageMaker including versions of Lorem
				Ipsum, but also the leap into electronic typesetting, remaining
				essentially unchanged..
			</p>
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
