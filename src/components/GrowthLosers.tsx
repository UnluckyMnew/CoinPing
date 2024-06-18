import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PostService from '../API/PostService'
import { useFetching } from '../hooks/useFetching/useFetching'
import { ICoins } from '../types/types'
import Loader from './UI/Loader/Loader'
const GrowthLosers = () => {
	const [coins, setCoins] = useState<ICoins[] | null>(null)

	const [fetchCoins, isLoading, coinError] = useFetching(async () => {
		const response = await PostService.getTotalCoinsCount()
		setCoins(
			response.data.sort(function (a, b) {
				return a.price_change_percentage_24h - b.price_change_percentage_24h
			})
		)
	})

	useEffect(() => {
		fetchCoins()
	}, [])

	return (
		<div className='growth-losers'>
			<h4>growth losers 24H</h4>
			<>
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
					coins?.slice(0, 6).map(coin => (
						<Link
							to={`/home/${coin.id.toLowerCase()}`}
							className='coin__row'
							key={coin.name}
						>
							<div className='coin__row--title'>
								<img src={coin?.image} alt={coin.id} />
								<p className='coin__name'>{coin.name} </p>
							</div>
							<div className='coin__row--price'>
								{`$` + coin.current_price.toFixed(2)}
							</div>
							<div
								className={
									Number(coin?.price_change_percentage_24h) >= 0
										? 'color-green coin__row--24h__change'
										: 'color-red coin__row--24h__change'
								}
							>
								{coin.price_change_percentage_24h.toFixed(2) + `%`}
							</div>
						</Link>
					))
				)}
			</>
		</div>
	)
}

export default GrowthLosers
