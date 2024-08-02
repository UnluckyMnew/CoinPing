export default function Pricing() {
	return (
		<section id='pricing' className='pricing__section'>
			<div className='container'>
				<div className='pricing__title'>
					<h1>CoinPing Crypto Data API Plans</h1>
					<p>
						From hobbyist to large scale enterprise projects, we’ve got you
						covered with crypto data sourced by the world’s largest independent
						crypto data aggregator.
					</p>
				</div>
				<div className="pricing__radio">
					<div className="radio">
						<input type="radio" name="plan" id="monthly" />
						<label htmlFor="monthly">Monthly</label>
					</div>
					<div className="radio">
						<input type="radio" name="plan" id="yearly" />
						<label htmlFor="yearly">Yearly</label>
					</div>
				</div>
			</div>
		</section>
	)
}
