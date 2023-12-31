import { useState, useEffect } from 'react'

import Container from '../structure/container'
import Icon from '../utils/icon.util'

import css from '../../styles/structure/footer.module.scss'

import content from '../../content/footer.json'
import settings from '../../content/_settings.json'

export default function Footer() {
	
	const [gitHubInfo, setGitHubInfo] = useState({
		stars: null,
		forks: null,
	});

	useEffect(() => {
		fetch( settings.portfolio.repo_api )
			.then(response => response.json())
			.then(json => {
				const { stargazers_count, forks_count } = json;
				setGitHubInfo({
					stars: stargazers_count,
					forks: forks_count,
				});
			})
		.catch(e => console.error(e));
	}, []);
	
	return (
		<footer className={css.container}>
			<Container spacing={['verticalXXLrg', 'bottomLrg']}>
				<section className={css.sections}>
					<ul className={css.thanks}>
						<li><h4>Phone</h4></li>
						<li >
							<a href="tel:+919726412461" rel="noreferrer" target="_blank"> (+91) 9726-412-461 <Icon icon={['devicon', 'photoshop']} /></a>
							<p>Primary Contact</p>
						</li>
						<li >
							<a href="tel:+919726412476" rel="noreferrer" target="_blank"> (+91) 9726-412-476 <Icon icon={['fab', 'pencil']} /></a>
							<p>Secondary Contact</p>
						</li>
					</ul>
					<ul className={css.links}>
						<li><h4>Email</h4></li>
						<li >
							<a href="mailto:laxxitpatel@gmail.com" rel="noreferrer" target="_blank"> laxxitpatel@gmail.com <Icon icon={['fad', 'arrow-up-right-from-square']} /></a>
							<p>Primary Email</p>
						</li>
						<li >
							<a href="mailto: patellaxit8@gmail.com" rel="noreferrer" target="_blank"> patellaxit8@gmail.com <Icon icon={['fab', 'pencil']} /></a>
							<p>Secondary Email</p>
						</li>
					</ul>
					<ul className={css.social}>
						<li><h4>Social</h4></li>
						<li className={css.socialList}>
							{
							content.social.map( ({ url, icon }, index) => {
								return (
									<a  key={index} href={url} rel="noreferrer" target="_blank"><Icon icon={[ 'fab', icon ]} /></a>
								)
							})
							}
						</li>
					</ul>
				</section>
				{/* <section className={css.github}>
					<a href={settings.portfolio.repo_html} rel="noreferrer" target="_blank">
						<h5>{settings.portfolio.forkthis}</h5>
						<ul>
							<li>
								<p><Icon icon={[ 'fad', 'code-branch' ]} /> Forks: { gitHubInfo.forks }</p>
							</li>
							<li>
								<p><Icon icon={[ 'fad', 'star' ]} /> Stars: { gitHubInfo.stars }</p>
							</li>
						</ul>
					</a>
				</section> */}
				<section className={css.credits}>
						<h5>{settings.credits.message}</h5>
				</section>	
			</Container>
			<canvas id="gradient-canvas" className={''} data-transition-in ></canvas>
		</footer>
	)
}
