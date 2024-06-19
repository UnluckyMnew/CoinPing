import GrowthLeaders from './GrowthLeaders'
import GrowthLosers from './GrowthLosers'

export default function Hero() {
	return (
		<>
			<section id='hero' className='hero__section'>
				<div className='hero__content'>
					<div className='hero__content--title'>
						<h1 className='animation__wrapper'>
							<p>Crypto currencies</p>
							<section className='animation'>
								<div className='first'>
									<div>Track</div>
								</div>
								<div className='second'>
									<div>and</div>
								</div>
								<div className='third'>
									<div>Trade</div>
								</div>
							</section>
						</h1>
					</div>

					<a className='hero__content--mobile__btn' href='#market'>
						See Prices
					</a>

					<div className='hero__content--extra__lists'>
						<GrowthLeaders />
						<GrowthLosers />
					</div>
				</div>
			</section>
		</>
	)
}
