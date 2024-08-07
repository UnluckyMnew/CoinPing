import { IPricing_card } from '../types/types'

const PricingCard: React.FC<IPricing_card> = ({
	id,
	title,
	info,
	price,
	extra_info,
}) => {
	return (
		<div className='pricing__card'>
			<div className='card__title'>
				<h2>
					{id}. {title}
				</h2>
			</div>
			<div className='card__info'>
				<p>{info}</p>
			</div>
			<div className='card__price'>{`$${price}`}</div>
			<div className='card__extra'>
				<div className='card__extra--button'>
					<button>Subscribe</button>
				</div>
				<ul className='card__extra--info'>
					{Object.keys(extra_info).map(key => (
						<li key={key}>{key.slice(-1)}. {extra_info[key as keyof typeof extra_info]}</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default PricingCard
