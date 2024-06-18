import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'
import Pagination from '../components/UI/Pagination/Pagination'
import { useFetching } from '../hooks/useFetching/useFetching'
import { ICoins } from '../types/types'
import { getPageCount, getPagesArray } from '../utils/pages'

export default function CoinList() {
	const [coins, setCoins] = useState<ICoins[] | null>(null)
	const [totalPages, setTotalPages] = useState<number[]>([])
	const [limit] = useState<number>(10)
	const [page, setPage] = useState<number>(1)

	const [fetchCoins, isLoading, coinError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page)
		setCoins(response.data)
	})

	const [fetchTotalCoinsCount] = useFetching(async () => {
		const response = await PostService.getTotalCoinsCount()
		const pages = getPagesArray(getPageCount(response.data.length, limit))
		setTotalPages(pages)
	})

	useEffect(() => {
		fetchCoins()
		fetchTotalCoinsCount()
	}, [page])

	const changePage = (page: number) => {
		setPage(page)
	}

	return (
		<div className='main__content' id='market'>
			<h2>
				<span>Coin Update</span>
			</h2>
			<div className='main__content--coin__list'>
				<div className='main__content--coin__list--top'>
					<p className='p--coin'>Coin</p>
					<p className='p--price'>Price</p>
					<p className='p--24hChange'>24h Change</p>
					<p className='p--MarketCap'>Market Cap</p>
				</div>
				<div className='main__content--coin__list--row'>
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
					{isLoading && <Loader />}
					{coins?.map(coin => (
						<Link
							to={`/home/${coin.id.toLowerCase()}`}
							className='coin__row'
							key={coin.id}
						>
							<div className='coin__row--title'>
								<img src={coin?.image} alt={coin.id} />
								<p className='coin__name'>
									{coin.name}{' '}
									<span className='coin__symbol'>{coin.symbol}</span>
								</p>
							</div>
							<div className='coin__row--price'>{`$` + coin.current_price}</div>
							<div
								className={
									Number(coin?.price_change_percentage_24h) >= 0
										? 'color-green coin__row--24h__change'
										: 'color-red coin__row--24h__change'
								}
							>
								{coin.price_change_percentage_24h + `%`}
							</div>
							<div className='coin__row--market__cap'>
								{`$` + coin.market_cap}
							</div>
						</Link>
					))}
				</div>
			</div>
			<Pagination page={page} changePage={changePage} totalPages={totalPages} />
		</div>
	)
}
