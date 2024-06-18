import { NavLink } from 'react-router-dom'

export const Header = () => {
	const activeClick = (): void => {
		document.querySelector('.nav')?.classList.toggle('active')
	}

	return (
		<header id='header' className='header'>
			<NavLink to='/home' className='logo'>
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
						<NavLink to='/home'>Home</NavLink>
					</li>
					<li>
						<a href='#market'>Market</a>
					</li>
					<li>
						<NavLink to='/pricing'>Pricing</NavLink>
					</li>
					<li>
						<a href='#whyus'>WhyUs</a>
					</li>
					<li>
						<a href='#footer'>Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}
