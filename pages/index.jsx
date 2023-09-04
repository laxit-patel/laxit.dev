import Hero 		from '../components/sections/index/hero'
import Looking from '../components/sections/index/looking'
import Technical from '../components/sections/index/technical'
import Color from '../components/utils/page.colors.util'
import colors 		from '../content/index/_colors.json'

export default function HomePage() {

	return (
		<>
			<Color colors={colors} />
			<Hero />
			<Looking />
			{/* <About /> */}
			<Technical />
		</>
	);
}