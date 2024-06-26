import { useEffect, useState } from 'react'
import PostService from '../API/PostService'
import { useFetching } from '../hooks/useFetching/useFetching'
import { ICoins } from '../types/types'
import ExtraTable from './ExtraTable'
import ExtraInfoWrapper from './ExtraInfoWrapper'

export default function Hero() {
	const [coins, setCoins] = useState<ICoins[] | null>(null)
	const [fetchCoins, isLoading, coinError] = useFetching(async () => {
		const response = await PostService.getTotalCoinsCount()
		setCoins(response.data)
	})
	const [growthLeaders, setGrowthLeaders] = useState<ICoins[]>([])
	const getGrowthLeaders = (): void => {
		if (coins) {
			setGrowthLeaders(
				[...coins]
					.sort((current, next) => {
						return String(current.price_change_percentage_24h).localeCompare(
							String(next.price_change_percentage_24h)
						)
					})
					.reverse()
			)
		}
	}
	const [growthLosers, setGrowthLosers] = useState<ICoins[]>([])
	const getGrowthLosers = (): void => {
		if (coins) {
			setGrowthLosers(
				[...coins].sort((current, next) => {
					return (
						current.price_change_percentage_24h -
						next.price_change_percentage_24h
					)
				})
			)
		}
	}
	useEffect(() => {
		fetchCoins()
	}, [])

	useEffect(() => {
		getGrowthLeaders()
		getGrowthLosers()
	}, [coins])

	return (
		<>
			<section id='hero' className='hero__section'>
				<div className='hero__content'>
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
						<ExtraTable
							sortedCoins={growthLeaders}
							isLoading={isLoading}
							coinError={coinError}
						/>
						<ExtraTable
							sortedCoins={growthLosers}
							isLoading={isLoading}
							coinError={coinError}
						/>
					</div>
				</div>
				<ExtraInfoWrapper />
			</section>
		</>
	)
}
