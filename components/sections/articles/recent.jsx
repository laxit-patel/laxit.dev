import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

import Image from 'next/image'
import SectionTitle from '../../blocks/section.title.block'

import Icon from '../../utils/icon.util'

import css from '../../../styles/sections/articles/recent.module.scss'

export default function Recent({ mediumArticles }) {
	const feed = mediumArticles.feed;
	const articles = mediumArticles.items;

	return (
		<Section classProp="borderBottom">
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Recent Articles"
					preTitle="Informative"
					subTitle="A personal quest to become a better technical/creative writer."
				/>
				<section className={css.projects}>
					{articles.map(({ title, pubDate, link, author, thumbnail, categories }, index) => {
						const date = new Date(pubDate).toDateString();
						return (
							<article key={index} className={css.project}>
								<span className={css.header}>
									<a href={link} rel="noreferrer" target="_blank">
										{title} ➡️
									</a>
								</span>
								<span className={css.descriptionContainer}>{/* Your description content here */}</span>
								<span className={css.details}>
									<p>By {author}</p>
									<p className={css.pushedAt}>{date}</p>
								</span>
								<span className={css.topicsContainer}>
									{categories.map((e, categoryIndex) => (
										<span key={categoryIndex} className={css.topics}>
											<Icon icon={['fab', 'medium']} /> {e}
										</span>
									))}
								</span>
							</article>
						);
					})}
				</section>
			</Container>
		</Section>
	);
}