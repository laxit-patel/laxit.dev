// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Tech Stack"
					subTitle="Here is my technology stack showcasing the primary and secondary technologies and tools I have been proficiently working with."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>

						<BadgesBlock
							title="Languages / Frameworks"
							copy="This is the technology i am proficient with. i use them to build my full stack web apps & API backends."
							list={language}
							block="tech"
							fullContainer="fullContainer"
							containerClass={about.container}
							headerIcon={about.icon}
						/>

						<BadgesBlock
							title="DevOps / Infrastructure"
							copy="Tools i use to build my full stack web apps & API backends. it extends my development capabilities beyond just coding."
							list={operation}
							block="tech"
							fullContainer="fullContainer" 
							containerClass={about.container}
							headerIcon={about.icon} 
						/>	

						<BadgesBlock
							title="Tools & Services"
							copy="This are tools i use to build my full stack web apps & API backends. make me more productive and efficient."
							list={software}
							block="tech"
							fullContainer="fullContainer"
							containerClass={about.container}
							headerIcon={about.icon}
						/>

					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const language = [
	{ key: 'laravel', name: 'Laravel', type: 'devicon' },
	{ key: 'php', name: 'PHP', type: 'devicon' },
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
	{ key: 'nodejs', name: 'NodeJS', type: 'devicon' },
	{ key: 'nextjs', name: 'NextJS', type: 'devicon' },
	{ key: 'svelte', name: 'Svelte', type: 'devicon' },
	{ key: 'vue', name: 'Vue', type: 'devicon' },
	{ key: 'react', name: 'React', type: 'devicon' },
	{ key: 'python', name: 'Python', type: 'devicon' },
	{ key: 'django', name: 'DJango', type: 'devicon' },
	{ key: 'sql', name: 'SQL', type: 'devicon' },
	{ key: 'html5', name: 'HTML5', type: 'devicon' },
	{ key: 'css3', name: 'CSS3', type: 'devicon' },
	{ key: 'tailwind', name: 'Tailwind', type: 'devicon' },
	{ key: 'jquery', name: 'jQuery', type: 'devicon' },
	{ key: 'flutter', name: 'Flutter', type: 'devicon' },
	{ key: 'markdown', name: 'Markdown', type: 'devicon' },
	{ key: 'go', name: 'Go', type: 'devicon' },
]

const operation = [
	{ key: 'amazonwebservices', name: 'AWS', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
	{ key: 'azure', name: 'Azure Cloud', type: 'devicon' },
	{ key: 'googlecloud', name: 'Google Cloud', type: 'devicon' },
	{ key: 'heroku', name: 'Heroku', type: 'devicon' },
	{ key: 'firebase', name: 'Firebase', type: 'devicon' },
	{ key: 'linux', name: 'Linux', type: 'devicon' },
	{ key: 'ubuntu', name: 'Ubuntu', type: 'devicon' },
	{ key: 'ssh', name: 'SSH', type: 'devicon' },
	{ key: 'filezilla', name: 'FileZilla', type: 'devicon' },
	{ key: 'putty', name: 'Putty', type: 'devicon' },
	{ key: 'apache', name: 'Apache', type: 'devicon' },
	{ key: 'nginx', name: 'NGinx', type: 'devicon' },
]

const software = [
	{ key: 'vscode', name: 'VSCode', type: 'devicon' },
	{ key: 'composer', name: 'Composer', type: 'devicon' },
	{ key: 'yarn', name: 'Yarn', type: 'devicon' },
	{ key: 'webpack', name: 'Webpack', type: 'devicon' },
	{ key: 'mysql', name: 'MySQL', type: 'devicon' },
	{ key: 'sqlite', name: 'SQLite', type: 'devicon' },
	{ key: 'mongodb', name: 'MongoDB', type: 'devicon' },
	{ key: 'postgresql', name: 'MongoDB', type: 'devicon' },
	{ key: 'redis', name: 'Redis', type: 'devicon' },
	{ key: 'wordpress', name: 'WordPress', type: 'devicon' },
	{ key: 'figma', name: 'Figma', type: 'devicon' },
	{ key: 'photoshop', 	name: 'Photoshop', 			type: 'devicon' },
	{ key: 'canva', name: 'Canva', type: 'devicon' },
	{ key: 'codepen', name: 'Codepen', type: 'devicon' },
	{ key: 'jira', name: 'Jira', type: 'devicon' },
	{ key: 'trello', name: 'Trello', type: 'devicon' },
]
