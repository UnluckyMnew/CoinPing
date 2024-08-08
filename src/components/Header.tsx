import { NavLink } from 'react-router-dom'

export const Header = () => {
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
					<li>
						<NavLink to='/CoinPing/home'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/CoinPing/pricing'>Pricing</NavLink>
					</li>
					<li>
						<a className='nav__w' href='#market'>
							Market
						</a>
					</li>
					<li>
						<a className='nav__w' href='#whyus'>
							WhyUs
						</a>
					</li>
					<li>
						<a className='nav__w' href='#footer'>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}
