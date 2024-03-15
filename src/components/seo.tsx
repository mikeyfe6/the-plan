import React, { ReactNode } from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

interface SEOProps {
	title?: string;
	description?: string;
	pathname?: string;
	children?: ReactNode;
}

export const SEO = ({ title, description, pathname, children }: SEOProps) => {
	const {
		title: defaultTitle,
		description: defaultDescription,
		image,
		siteUrl,
		twitterUsername,
	} = useSiteMetadata();

	const seo = {
		title: title ?? defaultTitle,
		description: description ?? defaultDescription,
		image: `${siteUrl}${image}`,
		url: siteUrl + (pathname ?? ''),
		twitterUsername,
	};

	return (
		<>
			<title>{seo.title}</title>
			<meta name='description' content={seo.description} />
			<meta name='image' content={seo.image} />
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={seo.title} />
			<meta name='twitter:url' content={seo.url} />
			<meta name='twitter:description' content={seo.description} />
			<meta name='twitter:image' content={seo.image} />
			<meta name='twitter:creator' content={seo.twitterUsername} />

			<link
				rel='stylesheet'
				href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
				integrity='sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=='
				crossOrigin='anonymous'
				referrerPolicy='no-referrer'
			/>

			{children}
		</>
	);
};
