import React, { useState, FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ModalVideo from 'react-modal-video';

import 'react-modal-video/scss/modal-video.scss';

import * as videoStyles from '../styles/modules/video.module.scss';

interface VideoQueryResult {
	allContentfulVideos: {
		edges: {
			node: {
				title: string;
				videoId: string;
			};
		}[];
	};
}

const Videos: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeVideo, setActiveVideo] = useState('');

	function openModal(videoId: string) {
		setActiveVideo(videoId);
		setIsOpen(true);
	}

	const data: VideoQueryResult = useStaticQuery(graphql`
		query VideosQuery {
			allContentfulVideos {
				edges {
					node {
						title
						videoId
					}
				}
			}
		}
	`);

	const videos = data.allContentfulVideos.edges;

	return (
		<section className={videoStyles.video} id='videos'>
			<ul>
				{videos.map(({ node: video }, index) => (
					<li key={index} onClick={() => openModal(video.videoId)}>
						<img
							src={`https://img.youtube.com/vi/${video.videoId}/0.jpg`}
							alt={video.title}
						/>
					</li>
				))}
			</ul>

			<ModalVideo
				channel='youtube'
				isOpen={isOpen}
				videoId={activeVideo}
				onClose={() => setIsOpen(false)}
			/>
		</section>
	);
};

export default Videos;
