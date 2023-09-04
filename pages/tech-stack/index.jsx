import Color from '../../components/utils/page.colors.util'
import Frontend from './frontend'

import colors from '../../content/case-studies/_colors.json'

//
export default function CaseStudies({ }) {
	return (
		<>
			<Color colors={colors} />
			<Frontend />
		</>
	)
}