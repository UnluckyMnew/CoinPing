import { useEffect, useState } from 'react'
import PostService from '../API/PostService'
import { useFetching } from '../hooks/useFetching/useFetching'
import { ICoins } from '../types/types'
import ExtraInfo from './ExtraInfo'

export default function ExtraInfoWrapper() {
	const [marketCap, setMarketCap] = useState<ICoins[]>([])
	const [totalMarketCap, setTotalMarketCap] = useState<number>(0)
	const [fetchCoins] = useFetching(async () => {
		const response = await PostService.getTotalCoinsCount()
		setMarketCap(response.data)
	})

	const totalMarketCapitalization = () => {
		setTotalMarketCap(marketCap.reduce((acc, coin) => acc + coin.market_cap, 0))
	}

	useEffect(() => {
		fetchCoins()
		totalMarketCapitalization()
	}, [])
	console.log(totalMarketCap);
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
				Общая рыночная капитализация криптовалют составляет ${totalMarketCap}.
				Доминирование Bitcoin находится на 46.021% , а доминирование Ethereum —
				на 11.83% Объем торгов за последние 24 часа составляет $47.03 B
			</ExtraInfo>
		</div>
	)
}
