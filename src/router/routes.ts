import Coin from '../pages/Coin'
import Home from '../pages/Home'
import Pricing from '../pages/Pricing'

export const RoutesArr = [
	{ path: '/', element: Home },
	{ path: '/CoinPing/home', element: Home },
	{ path: '/CoinPing/:id', element: Coin },
	{ path: '/CoinPing/pricing', element: Pricing },
]
