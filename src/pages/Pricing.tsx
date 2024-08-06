import { useState } from 'react'
import PricingCard from '../components/PricingCard'
import { IPricing_card } from '../types/types'

export default function Pricing() {
	const [pricingCard] = useState<IPricing_card[]>([
		{
			id: 1,
			title: 'Analyst',
			info: 'For critical analytical work',
			price: 999,
			extra_info: {
				paragraph_1: '10,000 requests per day',
				paragraph_2: 'Call credits per month: 500k',
				paragraph_3: 'Call limit per minute: 500',
				paragraph_4: 'Market data endpoints: 60+',
				paragraph_5: 'Exclusive data endpoints',
				paragraph_6: 'Data collection period (in years): 10',
			},
		},
		{
			id: 2,
			title: 'Developer',
			info: 'For critical analytical work',
			price: 1999,
			extra_info: {
				paragraph_1: '100,000 requests per day',
				paragraph_2: 'Call credits per month: 5M',
				paragraph_3: 'Call limit per minute: 5000',
				paragraph_4: 'Market data endpoints: 60+',
				paragraph_5: 'Exclusive data endpoints',
				paragraph_6: 'Data collection period (in years): 10',
			},
		},
		{
			id: 3,
			title: 'Manager',
			info: 'For critical analytical work',
			price: 2999,
			extra_info: {
				paragraph_1: '1,000,000 requests per day',
				paragraph_2: 'Call credits per month: 50M',
				paragraph_3: 'Call limit per minute: 50000',
				paragraph_4: 'Market data endpoints: 60+',
				paragraph_5: 'Exclusive data endpoints',
				paragraph_6: 'Data collection period (in years): 10',
			},
		},
		{
			id: 4,
			title: 'Enterprise',
			info: 'For critical analytical work',
			price: 4999,
			extra_info: {
				paragraph_1: '10,000,000 requests per day',
				paragraph_2: 'Call credits per month: 500M',
				paragraph_3: 'Call limit per minute: 500000',
				paragraph_4: 'Market data endpoints: 60+',
				paragraph_5: 'Exclusive data endpoints',
				paragraph_6: 'Data collection period (in years): 10',
			},
		},
	])
	return (
		<section id='pricing' className='pricing__section'>
			<div className='container'>
				<div className='pricing__top'>
					<div className='pricing__title'>
						<h1>CoinPing Crypto Data API Plans</h1>
						<p>
							From hobbyist to large scale enterprise projects, we’ve got you
							covered with crypto data sourced by the world’s largest
							independent crypto data aggregator.
						</p>
					</div>
					<div className='pricing__radio'>
						<div className='radio'>
							<input type='radio' name='plan' id='monthly' />
							<label htmlFor='monthly'>Monthly</label>
						</div>
						<div className='radio'>
							<input type='radio' name='plan' id='yearly' />
							<label htmlFor='yearly'>Yearly</label>
						</div>
					</div>
				</div>
				<div className='pricing__cards'>
					{pricingCard.map(card => (
						<PricingCard
							key={card.id}
							id={card.id}
							title={card.title}
							info={card.info}
							price={card.price}
							extra_info={card.extra_info}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
