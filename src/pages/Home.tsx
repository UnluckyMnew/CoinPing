import CoinList from '../components/CoinList'
import ExtraInfoWrapper from '../components/ExtraInfoWrapper'
import Hero from '../components/Hero'
import WhyUs from '../components/WhyUs'

export default function Home() {
	return (
		<section id='main' className='main__section'>
			<Hero />
			<div className='container'>
				<ExtraInfoWrapper />
				<CoinList />
				<WhyUs />
			</div>
		</section>
	)
}
