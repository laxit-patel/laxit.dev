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
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
    return (
        <Section classProp={about.section}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle
                    title="Resume"
                    preTitle="Laravel Developer & AWS Certified DevOps Engineer"
                    subTitle="As a Laravel developer with expertise in AWS DevOps, I bring a comprehensive skill set to the table. With a strong background in UX design, UI design, full stack development, operational architecture, systems design, photography, and branding, I offer a well-rounded digital professional experience."
                />

                <section className={about.content}>
                    <div className={about.image}>
                        <img src="/img/pose.jpeg" alt="Nelson family photo" />
                        {/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
                    </div>
                    <div className={about.copy}>
                        <CopyBlock
                            title="Technical Expertise and Leadership"
                            containerClass={about.container}
                            iconClass={about.icon}
                            icon={['fat', 'tools']}
                            copy="As a Laravel Developer and AWS Certified DevOps Engineer, I possess a strong technical skill set and extensive experience in building robust web applications. I have a deep understanding of Laravel framework and proficiency in implementing scalable cloud infrastructure using AWS services. Alongside my technical abilities, I am also a skilled leader with excellent time management and multitasking capabilities. I have demonstrated my leadership skills through my experience as a business owner, managing partner, and my role as a husband and father of two. I bring passion, dedication, and value to every project I undertake."
                        />
                        <BadgesBlock
                            title="Technical Methodologies"
                            containerClass={about.container}
                            list={methods}
                            fullContainer="fullContainer"
                            block="methods"
                            icon="fingerprint"
                            copy="I am well-versed in various technical methodologies and strategies that enhance user experience and product development. Some of the methodologies I specialize in include user research, digital strategy, design systems, product strategy, brand strategy, and operations. I enjoy planning the architecture of projects and working with the many touchpoints of user experience to create exceptional solutions."
                            // invertedColor="invertedColor"
                            headerIcon={`${about.icon}`}
                        />
                    </div>
                </section>

            </Container>
        </Section>
    )
}

const methods = [
    { key: 'planet-moon', name: 'User Research', type: 'fad' },
    { key: 'qrcode', name: 'Digital Strategy', type: 'fad' },
    { key: 'window', name: 'Design Systems', type: 'fad' },
    { key: 'cubes', name: 'Product Strategy', type: 'far' },
    { key: 'layer-plus', name: 'Brand Strategy', type: 'fad' },
    { key: 'solar-system', name: 'Operations', type: 'fad' },
]