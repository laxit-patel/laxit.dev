import Section from '../../structure/section';
import Container from '../../structure/container';

import HeroBg from '../../blocks/hero.bg/bg-color-1';

import hero from '../../../styles/sections/index/hero.module.scss';
import tools from '../../../content/tools/tools.json';

export default function List() {

    return (
        <Section classProp={`${hero.section}`}>
            <Container spacing={'VerticalXXXL'}>
                {tools.map((tool, index) => (
                    <div key={index}>
                        <a href={tool.url} >
                            <h3>{tool.name}</h3>
                            <p>{tool.description}</p>
                        </a>
                    </div>
                ))}
            </Container>
            <HeroBg theme="bg-color-1" />
        </Section>
    )
}