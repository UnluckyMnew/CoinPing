import GrowthLeaders from './GrowthLeaders'
import GrowthLosers from './GrowthLosers'

export default function Hero() {
	return (
		<>
			<section id='hero' className='hero__section'>
				<div className='hero__content'>
					{/* <video preload='auto' loop muted autoPlay id='video'>
						<source src='video/hero.webm' type='video/webm' />
						<source src='video/hero.mov' type='video/mov' />
					</video> */}
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
