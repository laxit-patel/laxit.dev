import Color from '../../components/utils/page.colors.util'
import Profile from '../../components/sections/resume/profile'

import colors from '../../content/case-studies/_colors.json'
import Intro from '../../components/sections/resume/intro'
//
export default function CaseStudies({ }) {
	return (
		<>
			<Color colors={colors} />
			<Intro />
		</>
	)
}