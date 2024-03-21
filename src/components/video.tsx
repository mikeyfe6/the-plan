import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ModalVideo from 'react-modal-video';

import 'react-modal-video/scss/modal-video.scss';

import * as videoStyles from '../styles/modules/video.module.scss';

const Videos: React.FC = () => {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [activeVideo, setActiveVideo] = useState('');

	function openModal(videoId) {
		setActiveVideo(videoId);
		setIsOpen(true);
	}

	const data = useStaticQuery(graphql`
		query {
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
				isOpen={modalIsOpen}
				videoId={activeVideo}
				onClose={() => setIsOpen(false)}
			/>
		</section>
	);
};

export default Videos;
