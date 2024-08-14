import { useEffect, useState } from 'react'
import PostService from '../API/PostService'
import { useFetching } from '../hooks/useFetching/useFetching'
import { ICoins } from '../types/types'
import { numberFormatter } from '../utils/priceFormat'
import ExtraInfo from './ExtraInfo'

export default function ExtraInfoWrapper() {
	const [coins, setCoins] = useState<ICoins[]>([])
	const [totalMarketCap, setTotalMarketCap] = useState<number>(0)

	const [bitcoin, setBitcoin] = useState<ICoins | null>(null)
	const [bitcoinDominancePercentage, setBitcoinDominancePercentage] =
		useState<number>(0)
	const [ethereum, setEthereum] = useState<ICoins | null>(null)
	const [ethereumDominancePercentage, setEthereumDominancePercentage] =
		useState<number>(0)

	const [fetchCoins] = useFetching(async () => {
		const response = await PostService.getTotalCoinsCount()
		setCoins(response.data)
		setBitcoin(response.data[0])
		setEthereum(response.data[1])
	})

	const totalMarketCapitalization = () => {
		setTotalMarketCap(coins.reduce((acc, coin) => acc + coin.market_cap, 0))
	}

	const coinsDominancePercentage = () => {
		if (bitcoin) {
			setBitcoinDominancePercentage(
				Number(((bitcoin.market_cap / totalMarketCap) * 100).toFixed(2))
			)
		}
		if (ethereum) {
			setEthereumDominancePercentage(
				Number(((ethereum.market_cap / totalMarketCap) * 100).toFixed(2))
			)
		}
	}

	useEffect(() => {
		fetchCoins()
	}, [])

	useEffect(() => {
		totalMarketCapitalization()
	}, [coins])

	useEffect(() => {
		coinsDominancePercentage()
	}, [bitcoin, ethereum, totalMarketCap])

	// temp -----------------------------------------------------------------------|
	useEffect(() => {
		console.log(bitcoinDominancePercentage)
		console.log(ethereumDominancePercentage)
	}, [bitcoinDominancePercentage, ethereumDominancePercentage])
	// temp -----------------------------------------------------------------------|

	return (
		<div className='extra-info__wrapper'>
			<ExtraInfo title='Торгуемые криптовалюты'>
				Получите исчерпывающую информацию обо всех криптовалютах, доступных на
				платформе CoinPing. На этой странице показаны текущие цены, объем торгов
				за 24 часа, изменения цен и рыночная капитализация для всех криптовалют,
				доступных на платформе CoinPing. Здесь пользователи могут быстро
				получить доступ к самой важной информации об этих цифровых активах и
				торговой странице.
				<br />
				<br />
				Представленные данные носят исключительно информационный характер.
				Некоторая приведенная информация взята с сайта GateIO и предоставляется
				по принципу «как есть», без каких-либо гарантий.
			</ExtraInfo>
			<ExtraInfo title='Капитализация криптовалют'>
				Общая рыночная капитализация криптовалют составляет{' '}
				<span>{numberFormatter(totalMarketCap)}</span>. Доминирование Bitcoin
				находится на <span>{bitcoinDominancePercentage}%</span>, а доминирование
				Ethereum — на <span>{ethereumDominancePercentage}%</span>.
			</ExtraInfo>
		</div>
	)
}
