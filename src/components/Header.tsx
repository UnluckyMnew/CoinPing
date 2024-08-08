import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

interface INavItems {
	id: number
	title: string
	link: string
	dynamic?: boolean
}

export const Header = () => {
	const location = useLocation()
	const [navItems, setNavItems] = useState<INavItems[]>([
		{
			id: 1,
			title: 'Home',
			link: '/CoinPing/home',
			dynamic: true,
		},
		{
			id: 2,
			title: 'Pricing',
			link: '/CoinPing/pricing',
			dynamic: true,
		},
		{
			id: 3,
			title: 'Market',
			link: '#market',
			dynamic: false,
		},
		{
			id: 4,
			title: 'WhyUs',
			link: '#whyus',
			dynamic: false,
		},
		{
			id: 5,
			title: 'Contact',
			link: '#footer',
			dynamic: false,
		},
	])

	const activeClick = (): void => {
		document.querySelector('.nav')?.classList.toggle('active')
	}

	return (
		<header id='header' className='header'>
			<NavLink to='/CoinPing/home' className='logo'>
				CoinPing
			</NavLink>

			<div className='hamburger' onClick={activeClick}>
				<div className='line'></div>
				<div className='line'></div>
				<div className='line'></div>
			</div>

			<nav className='nav'>
				<ul>
					{navItems.map(item => {
						if (item.dynamic) {
							return (
								<li key={item.id}>
									<NavLink to={item.link}>{item.title}</NavLink>
								</li>
							)
						}
						if (location.pathname.split("/").pop() === "home") {
							return (
								<li key={item.id}>
									<a href={item.link}>{item.title}</a>
								</li>
							)
						}
					})}
				</ul>
			</nav>
		</header>
	)
}
