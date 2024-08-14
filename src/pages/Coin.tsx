import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'
import { useFetching } from '../hooks/useFetching/useFetching'
import { ICoin } from '../types/types'

export default function Coin() {
	const { id } = useParams()
	const [coin, setCoin] = useState<ICoin | null>(null)
	const [progress, setProgress] = useState<number | string>(0)
	const [priceTrends, setPriceTrends] = useState<string[]>([])

	const [fetchCoinById, isLoading, coinError] = useFetching(async () => {
		const response = await PostService.getById(id)
		setCoin(response.data)
	})

	const changeProgress = () => {
		let max = Number(coin?.market_data.high_24h.usd)
		let min = Number(coin?.market_data.low_24h.usd)
		let value = Number(coin?.market_data.current_price.usd)
		const percent: number | string =
			max == min ? 0 : ((100 * (value - min)) / (max - min)).toFixed(0)
		setProgress(percent)
	}

	const priceTrend = () => {
		const arrayOfPercentages: number[] = [
			coin?.market_data.price_change_percentage_1h_in_currency.usd || 0,
			coin?.market_data.price_change_percentage_24h_in_currency.usd || 0,
			coin?.market_data.price_change_percentage_7d_in_currency.usd || 0,
			coin?.market_data.price_change_percentage_30d_in_currency.usd || 0,
			coin?.market_data.price_change_percentage_1y_in_currency.usd || 0,
		]
		let currentPrice = Number(coin?.market_data.current_price.usd)

		const priceTrends: string[] = []
		for (let i = 0; i < arrayOfPercentages.length; i++) {
			let priceWithoutInterest: number =
				currentPrice -
				(currentPrice / 100) * parseFloat(arrayOfPercentages[i] + '%')
			let answer: string = (
				currentPrice -
				(priceWithoutInterest >= 0
					? priceWithoutInterest
					: -priceWithoutInterest)
			).toFixed(2)
			// console.log(priceWithoutInterest, answer)
			priceTrends.push(answer)
		}
		setPriceTrends(priceTrends)
	}

	useEffect(() => {
		fetchCoinById(id)
	}, [])

	useEffect(() => {
		changeProgress()
		priceTrend()
	}, [coin])

	return (
		<section id='coin' className='coin__section'>
			<div className='container'>
				<div className='coin__content'>
					{coinError && (
						<h1
							style={{
								fontSize: '20px',
								color: 'lightpink',
								textAlign: 'center',
								marginTop: '20px',
							}}
						>
							произошла ошибка: {coinError}
						</h1>
					)}
					{isLoading ? (
						<Loader />
					) : (
						<>
							<div className='coin__content--main__information'>
								<section id='first'>
									<div className='main__information--top'>
										<div className='top__title'>
											<div id='left'>
												<div className='top__title--img'>
													<img src={coin?.image.small} alt={coin?.id} />
												</div>
												<div className='top__title--spans'>
													<span className='top__title--span__name'>
														{coin?.name}
													</span>
													<span className='top__title--span__symbol'>
														{coin?.symbol}
													</span>
													<span className='top__title--span__rank'>
														Rank: {coin?.market_cap_rank}
													</span>
												</div>
												<div className='top__title--date'>
													<p className='top__title--date__genesis'>
														Genesis date: {coin?.genesis_date}
													</p>
												</div>
											</div>
											<div id='right'>
												<div className='top__title--buttons'>
													<button>USD</button>
												</div>
											</div>
										</div>
										<div className='top__price'>
											<p>{`$` + coin?.market_data.current_price.usd}</p>
											<div
												className={
													Number(
														coin?.market_data.price_change_percentage_24h
													) >= 0
														? 'color-green'
														: 'color-red'
												}
											>
												{coin?.market_data.price_change_percentage_24h + `%`}
											</div>
										</div>
										<div className='top__minmax'>
											<div>
												<span>24ч. Мин. </span>
												<span>{`$` + coin?.market_data.low_24h.usd}</span>
											</div>

											<div className='progress-container'>
												<div
													className='progress'
													style={{ width: progress + '%' }}
												></div>
											</div>

											<div>
												<span>24ч. Макс. </span>
												<span>{`$` + coin?.market_data.high_24h.usd}</span>
											</div>
										</div>
									</div>
								</section>

								<section id='second'>
									<div className='main__information--table'>
										<div className='table__grid'>
											<div className='table__grid--item' id='1'>
												<p>24Ч Объём</p>
												<div>{`$` + coin?.market_data.market_cap.usd}</div>
											</div>
											<div className='table__grid--item' id='2'>
												<p>Самая высокая цена(ATH)</p>
												<div>{`$` + coin?.market_data.ath.usd}</div>
											</div>
											<div className='table__grid--item' id='3'>
												<p>Самая низкая цена(ATL)</p>
												<div>{`$` + coin?.market_data.atl.usd}</div>
											</div>
											<div className='table__grid--item' id='4'>
												<p>Рыночная капитализация</p>
												<div>{`$` + coin?.market_data.market_cap.usd}</div>
											</div>
											<div className='table__grid--item' id='5'>
												<p>Полностью разводненная стоимость</p>
												<div>
													{`$` + coin?.market_data.fully_diluted_valuation.usd}
												</div>
											</div>
											<div className='table__grid--item' id='6'>
												<p>Оборотное предложение</p>
												<div>{`$` + coin?.market_data.circulating_supply}</div>
											</div>
											<div className='table__grid--item' id='7'>
												<p>Общее предложение</p>
												<div>
													{coin?.market_data.total_supply +
														` ` +
														coin?.symbol.toUpperCase()}
												</div>
											</div>
											<div className='table__grid--item' id='8'>
												<p>Максимальное подача</p>
												<div>
													{coin?.market_data.max_supply +
														` ` +
														coin?.symbol.toUpperCase()}
												</div>
											</div>
											<div className='table__grid--item' id='9'>
												<p>* Данные от третьих лиц</p>
											</div>
										</div>
									</div>
								</section>

								<section id='third'>
									<div className='main__information--description'>
										<h3>{coin?.name}</h3>
										<p
											// not recommended
											dangerouslySetInnerHTML={{
												__html: coin?.description.en!,
											}}
										></p>
									</div>
								</section>

								<section id='fourth'>
									<div className='main__information--trend'>
										<table className='trend__table'>
											<thead className='trend__table--head'>
												<tr className='trend__table--head__row'>
													<th>
														<div>
															<span>Период времени</span>
														</div>
													</th>
													<th>
														<div>
															<span>Изменение цены</span>
														</div>
													</th>
													<th>
														<div>
															<span>% изменения</span>
														</div>
													</th>
												</tr>
											</thead>

											<tbody className='trend__table--body'>
												<tr className='trend__table--body__row'>
													<td>
														<div>1H</div>
													</td>
													<td>
														<div>{priceTrends[0] + '$'}</div>
													</td>
													<td>
														<div
															className={
																Number(
																	coin?.market_data
																		.price_change_percentage_1h_in_currency.usd
																) >= 0
																	? 'color-green'
																	: 'color-red'
															}
														>
															{coin?.market_data
																.price_change_percentage_1h_in_currency.usd +
																`%`}
														</div>
													</td>
												</tr>
												<tr className='trend__table--body__row'>
													<td>
														<div>24H</div>
													</td>
													<td>
														<div>{priceTrends[1] + '$'}</div>
													</td>
													<td>
														<div
															className={
																Number(
																	coin?.market_data
																		.price_change_percentage_24h_in_currency.usd
																) >= 0
																	? 'color-green'
																	: 'color-red'
															}
														>
															{coin?.market_data
																.price_change_percentage_24h_in_currency.usd +
																`%`}
														</div>
													</td>
												</tr>
												<tr className='trend__table--body__row'>
													<td>
														<div>7d</div>
													</td>
													<td>
														<div>{priceTrends[2] + '$'}</div>
													</td>
													<td>
														<div
															className={
																Number(
																	coin?.market_data
																		.price_change_percentage_7d_in_currency.usd
																) >= 0
																	? 'color-green'
																	: 'color-red'
															}
														>
															{coin?.market_data
																.price_change_percentage_7d_in_currency.usd +
																`%`}
														</div>
													</td>
												</tr>
												<tr className='trend__table--body__row'>
													<td>
														<div>30d</div>
													</td>
													<td>
														<div>{priceTrends[3] + '$'}</div>
													</td>
													<td>
														<div
															className={
																Number(
																	coin?.market_data
																		.price_change_percentage_30d_in_currency.usd
																) >= 0
																	? 'color-green'
																	: 'color-red'
															}
														>
															{coin?.market_data
																.price_change_percentage_30d_in_currency.usd +
																`%`}
														</div>
													</td>
												</tr>
												<tr className='trend__table--body__row'>
													<td>
														<div>1y</div>
													</td>
													<td>
														<div>{priceTrends[4] + '$'}</div>
													</td>
													<td>
														<div
															className={
																Number(
																	coin?.market_data
																		.price_change_percentage_1y_in_currency.usd
																) >= 0
																	? 'color-green'
																	: 'color-red'
															}
														>
															{coin?.market_data
																.price_change_percentage_1y_in_currency.usd +
																`%`}
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</section>
							</div>

							<aside className='coin__content--additional__information'>
								<section id='fifth'>
									<div className='additional__information--table'>
										<h4>Ключевая информация</h4>

										<div className='table__flex'>
											<div className='table__flex--item' id='1'>
												<span>Сайт</span>
												<ul>
													{coin?.links.homepage.slice(0, 1).map(tag => (
														<li key={tag} className='tag'>
															<a href={tag}>{tag}</a>
														</li>
													))}
												</ul>
											</div>
											<div className='table__flex--item' id='2'>
												<span>Проводники</span>
												<ul>
													{coin?.links.blockchain_site.slice(0, 4).map(tag => (
														<li key={tag} className='tag'>
															<a href={tag}>{tag}</a>
														</li>
													))}
												</ul>
											</div>
											<div className='table__flex--item' id='3'>
												<span>Сообщество</span>
												<ul>3</ul>
											</div>
											<div className='table__flex--item' id='4'>
												<span>Теги</span>
												<ul>
													{coin?.categories.map(tag => (
														<li key={tag} className='tag'>
															{tag}
														</li>
													))}
												</ul>
											</div>
										</div>
									</div>
								</section>
							</aside>
						</>
					)}
				</div>
			</div>
		</section>
	)
}
