export default function PricingCard() {
  return (
		<div className='pricing__card'>
			<div className='card__title'>
				<h2>Аналитик</h2>
			</div>
			<div className='card__info'>
				<p>Для критически важной аналитической работы</p>
			</div>
			<div className='card__price'>{`$${999}/mo`}</div>
			<div className='card__extra'>
				<div className='card__extra--button'>
					<button>button</button>
				</div>
				<ul className='card__extra--info'>
					<li>Кредитов на вызовы в месяц: 500k</li>
					<li>Лимит вызовов в минуту: 500</li>
					<li>Конечных точек рыночных данных: 60+</li>
					<li>Конечные точки эксклюзивных данных</li>
					<li>Период сбора данных (в годах): 10</li>
					<li>Приоритетная поддержка по электронной почте</li>
				</ul>
			</div>
		</div>
	)
}
