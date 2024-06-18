// import About from '../pages/About'
import Coin from '../pages/Coin'
// import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Pricing from '../pages/Pricing'

export const RoutesArr = [
	{ path: '/', element: Home },
	{ path: '/home', element: Home },
	{ path: '/home/:id', element: Coin },
	{ path: '/pricing', element: Pricing },
	// { path: '/about', element: About },
	// { path: '/contact', element: Contact },
]
