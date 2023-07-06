import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title.block';

import css from '../../../styles/sections/resume/profile.module.scss';

export default function Profile() {

    return (
        <Section classProp={css.hasBg}>
            <Container spacing={'verticalXXXXLrg'}>
                <SectionTitle
                    title="Resume"
                    subTitle="Fullstack Web Developer / Certified AWS DevOps Engineer"
                />
            </Container>
            <div className={css.bgContainer}>
                <span className={css.orbitalBg}>
                    <span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
                    <span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
                    <span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
                </span>
                <span className={css.afterGlowBg}></span>
            </div>
        </Section>
    );
}
