// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

// Specing util
import Spacing 		from '../../utils/spacing.util';

// Section general blocks
import SectionGridBg from '../../blocks/section.grid.block'
import SectionTitle from '../../blocks/section.title.block'

// Section scss
import looking 		from '../../../styles/sections/index/looking.module.scss';
import section 		from '../../../styles/blocks/section.title.module.scss'

/**
 * Section: Looking
 * Declare your employment intentions 🚀
 * 
 * @returns {jsx} <Looking />
 */
export default function Looking() {
	return (
		<Section classProp={`${looking.section} borderBottom`}>
			<Container classProp={`${section.title} ${looking.container}`} spacing={['verticalXXXLrg']}>
				<h4>Delivering Expertise Across Diverse Tech Stacks</h4>
				<h2 className={looking.json}>WholeStack : &#123;</h2>
				<h2 className={looking.jsonSub}>
					<span className={looking.highlight2}>Web Application : &#123;</span>
				</h2>
				<h2 className={`${looking.jsonSub} ${looking.jsonSubSub}`}>
					<span className={looking.highlight}>Laravel + Boostrap5 | React | Vue</span>,
				</h2>
				<h2 className={`${looking.jsonSub} ${looking.jsonSubSub}`}>
					<span className={looking.highlight}>Django + Boostrap5</span>,
				</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight}>&#125;,</span></h2>
				<h2 className={looking.jsonSub}>
					<span className={looking.highlight2}>API : &#123;</span>
				</h2>
				<h2 className={`${looking.jsonSub} ${looking.jsonSubSub}`}>
					<span className={looking.highlight}>Elysia.JS + Bun</span>,
				</h2>
				<h2 className={`${looking.jsonSub} ${looking.jsonSubSub}`}>
					<span className={looking.highlight}>Express.Js + Node</span>,
				</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight}>&#125;,</span></h2>
				<h2 className={looking.jsonSub}>
					<span className={looking.highlight2}>App (Android | Ios) : &#123;</span>
				</h2>
				<h2 className={`${looking.jsonSub} ${looking.jsonSubSub}`}>
					<span className={looking.highlight}>Ionic + React</span>,
				</h2>
				<h2 className={`${looking.jsonSub} ${looking.jsonSubSub}`}>
					<span className={looking.highlight}>PWA</span>,
				</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight}>&#125;,</span></h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight2}>Desktop : NativePHP</span>,</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight2}>Deployment : AWS</span>,</h2>
				<h2 className={looking.jsonSub}>
					<span className={looking.highlight2}>Database : &#123;</span>
				</h2>
				<h2 className={`${looking.jsonSub} ${looking.jsonSubSub}`}>
					<span className={looking.highlight}>SQL ( MySQL, PostGres )</span>,
				</h2>
				<h2 className={`${looking.jsonSub} ${looking.jsonSubSub}`}>
					<span className={looking.highlight}>NoSQL ( DynamoDB )</span>,
				</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight}>&#125;,</span></h2>
				<h2 className={looking.jsonSub}>
					<span className={looking.highlight2}>Scalability : &#123;</span>
				</h2>
				<h2 className={`${looking.jsonSub} ${looking.jsonSubSub}`}>
					<span className={looking.highlight}>Caching : Redis | Elasticache</span>,
				</h2>
				<h2 className={`${looking.jsonSub} ${looking.jsonSubSub}`}>
					<span className={looking.highlight}>Storage : AWS S3</span>,
				</h2>
				<h2 className={`${looking.jsonSub} ${looking.jsonSubSub}`}>
					<span className={looking.highlight}>Queue : Redis | AWS SQS</span>,
				</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight}>&#125;,</span></h2>
				<h2 className={looking.jsonSub}>
					<span className={looking.highlight2}>Testing : &#123;</span>
				</h2>
				<h2 className={`${looking.jsonSub} ${looking.jsonSubSub}`}>
					<span className={looking.highlight}>Pest | PhpUnit</span>,
				</h2>
				<h2 className={`${looking.jsonSub} ${looking.jsonSubSub}`}>
					<span className={looking.highlight}>JEST</span>,
				</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight}>&#125;</span></h2>
				<h2 className={looking.json}>&#125;</h2>
			</Container>
		</Section>


	)
}