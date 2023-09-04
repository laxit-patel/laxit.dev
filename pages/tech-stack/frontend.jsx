// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../components/structure/section';

import Container from '../../components/structure/container';

// Section general blocks
import SectionTitle from '../../components/blocks/section.title.block'

// Section specific blocks
import BadgesBlock from '../../components/blocks/about.badges.block'
import CopyBlock from '../../components/blocks/about.copy.block'

// Section scss
import about from '../../styles/sections/index/about.module.scss'

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
                    title="TechStack"
                    subTitle="this are my tools as a web artisan and developer"
                />
                <section className={`${about.content} ${about.container}`}>
                    <div className={about.copy}>
                        <CopyBlock
                            title="Creative Right-Hemisphere"
                            icon={['fat', 'lightbulb']}
                            copy="Being left-handed has uniquely unlocked the creative potential of my right hemisphere, allowing me to cultivate a natural inclination towards artistic endeavors and aesthetics. With a keen sense of design, I harness this advantage to bring forth innovative and visually appealing solutions."
                            iconClass={about.icon}
                            containerClass={about.container}
                        />

                        <BadgesBlock
                            title="Technologies I love to build with"
                            copy="I deeply enjoy solving problems through code. From the front end all the way to the back end and the APIs in-between. No project is too challenging for me."
                            list={tech}
                            block="tech"
                            fullContainer="fullContainer"
                            icon={['fat', 'lightbulb']}
                            containerClass={about.container}
                            headerIcon={about.icon}
                        />

                        <BadgesBlock
                            title="Technologies I love to build with"
                            copy="I deeply enjoy solving problems through code. From the front end all the way to the back end and the APIs in-between. No project is too challenging for me."
                            list={software}
                            block="tech"
                            fullContainer="fullContainer"
                            icon="fa-laptop-code"
                            containerClass={about.container}
                            headerIcon={about.icon}
                        />
                    </div>
                </section>
            </Container>
            {/* <SectionGridBg gridSize={4}/> */}
        </Section>
    )
}

const software = [
    { key: 'photoshop', name: 'Photoshop', type: 'devicon' },
    { key: 'illustrator', name: 'Illustrator', type: 'devicon' },
    { key: 'figma', name: 'Figma', type: 'devicon' },
    { key: 'vscode', name: 'VSCode', type: 'devicon' },
    { key: 'mailbox', name: 'Postman', type: 'fas' },
    { key: 'computer-mouse', name: 'Click Up', type: 'fas' },
    { key: 'list-music', name: 'Ableton', type: 'fas' },
    { key: 'aftereffects', name: 'After Effects', type: 'devicon' },
    { key: 'premierepro', name: 'Premiere Pro', type: 'devicon' },
]

const tech = [
    { key: 'javascript', name: 'JavaScript', type: 'devicon' },
    { key: 'nodejs', name: 'NodeJS', type: 'devicon' },
    { key: 'react', name: 'React', type: 'devicon' },
    { key: 'nextjs', name: 'NextJS', type: 'devicon' },
    { key: 'jquery', name: 'jQuery', type: 'devicon' },
    { key: 'php', name: 'PHP', type: 'devicon' },
    { key: 'wordpress', name: 'WordPress', type: 'devicon' },
    { key: 'woocommerce', name: 'WooCommerce', type: 'devicon' },
    { key: "google", name: "GA4/GTM", type: "devicon" },
    { key: 'html5', name: 'HTML5', type: 'devicon' },
    { key: 'css3', name: 'CSS3', type: 'devicon' },
    { key: 'sass', name: 'SASS', type: 'devicon' },
    { key: 'git', name: 'Git', type: 'devicon' },
    { key: 'mysql', name: 'MySQL', type: 'devicon' },
    { key: 'mongodb', name: 'MongoDB', type: 'devicon' },
]