import { Link } from 'react-router-dom'
import { ICoins } from '../types/types'
import Loader from './UI/Loader/Loader'

interface IExtraTableProps {
	sortedCoins: ICoins[]
	isLoading: boolean
	coinError: any
}

const ExtraTable: React.FC<IExtraTableProps> = ({
	sortedCoins,
	isLoading,
	coinError,
}) => {
	return (
		<div className='extra-table'>
			<h4>growth leaders 24H</h4>
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
					sortedCoins.slice(0, 6).map(coin => (
						<Link
							to={`/CoinPing/${coin.id.toLowerCase()}`}
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

export default ExtraTable
