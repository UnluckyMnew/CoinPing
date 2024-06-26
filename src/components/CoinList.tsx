import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'
import Pagination from '../components/UI/Pagination/Pagination'
import { useFetching } from '../hooks/useFetching/useFetching'
import { ICoins } from '../types/types'
import { getPageCount, getPagesArray } from '../utils/pages'
import Input from './UI/Input/Input'

export default function CoinList() {
	const [coins, setCoins] = useState<ICoins[] | null>(null)
	const [totalPages, setTotalPages] = useState<number[]>([])
	const [limit] = useState<number>(20)
	const [page, setPage] = useState<number>(1)
	const [selectedSort, setSelectedSort] = useState({
		selectedSort: '',
		selectedSortCheck: false,
	})
	const [sortedCoins, setSortedCoins] = useState<ICoins[] | null>(null)
	const [searchQuery, setSearchQuery] = useState<string>('')

	const [fetchCoins, isLoading, coinError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page)
		setCoins(response.data)
		setSortedCoins(response.data)
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

	const getSortSetting = (e: React.MouseEvent<HTMLButtonElement>): void => {
		console.log('изменение метода сортировки')
		setSelectedSort(prevState => ({
			...prevState,
			selectedSort: (e.target as HTMLButtonElement).value,
			selectedSortCheck: !prevState.selectedSortCheck,
		}))
	}

	const sortCoins = () => {
		console.log('отработала сортировка')
		// idk dry lmao*)
		if (coins && selectedSort.selectedSortCheck) {
			setSortedCoins(
				[...coins].sort((a, b) => {
					const valueA = a[selectedSort.selectedSort as keyof ICoins]
					const valueB = b[selectedSort.selectedSort as keyof ICoins]
					if (typeof valueA === 'string' && typeof valueB === 'string') {
						return valueA.localeCompare(valueB)
					} else {
						return Number(valueA) - Number(valueB)
					}
				})
			)
		}
		if (coins && !selectedSort.selectedSortCheck) {
			setSortedCoins(
				[...coins].sort((a, b) => {
					const valueA = a[selectedSort.selectedSort as keyof ICoins]
					const valueB = b[selectedSort.selectedSort as keyof ICoins]
					if (typeof valueA === 'string' && typeof valueB === 'string') {
						return valueB.localeCompare(valueA)
					} else {
						return Number(valueB) - Number(valueA)
					}
				})
			)
		}
	}

	useEffect(() => {
		sortCoins()
	}, [selectedSort])

	const sortedAndSearchedCoins = useMemo(() => {
		return sortedCoins?.filter(coin =>
			coin.name.toLowerCase().includes(searchQuery.toLowerCase())
		)
	}, [searchQuery, sortedCoins])

	console.log('RENDER ALL')
	return (
		<div className='main__content' id='market'>
			<h2>
				<span>Coin Update</span>
			</h2>
			<div className='main__content--coin__list'>
				<div className='main__content--quick-search'>
					<Input
						value={searchQuery}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setSearchQuery(e.target.value)
						}
						type='text'
						placeholder='Поиск...'
					/>
				</div>

				<div className='main__content--coin__list--top'>
					<button
						value='id'
						className='p--coin sort-btn'
						onClick={getSortSetting}
					>
						Coin
					</button>
					<button
						value='current_price'
						className='p--price sort-btn'
						onClick={getSortSetting}
					>
						Price
					</button>
					<button
						value='price_change_percentage_24h'
						className='p--24hChange sort-btn'
						onClick={getSortSetting}
					>
						24h Change
					</button>
					<button
						value='market_cap'
						className='p--MarketCap sort-btn'
						onClick={getSortSetting}
					>
						Market Cap
					</button>
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
					{sortedAndSearchedCoins?.map(coin => (
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
