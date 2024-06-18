import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
	const canvasFN = () => {
		const canvas = document.getElementById('canvas') as HTMLCanvasElement
		if (canvas.getContext) {
			const ctx = canvas?.getContext('2d')
			if (ctx) {
				// canvas size
				canvas.width = 200
				canvas.height = 200

				// abstract shapes
				ctx.fillStyle = '#FFD700'
				ctx.beginPath()
				ctx.moveTo(100, 0)
				ctx.lineTo(200, 100)
				ctx.lineTo(100, 200)
				ctx.lineTo(0, 100)
				ctx.closePath()
				ctx.fill()

				ctx.fillStyle = '#AFEEEE'
				ctx.beginPath()
				ctx.arc(100, 100, 50, 0, Math.PI * 2, true) // Circle
				ctx.fill()

				// Add some dynamic lines for visual interest
				ctx.moveTo(0, 0)
				ctx.lineTo(200, 200)
				ctx.moveTo(200, 0)
				ctx.lineTo(0, 200)
				ctx.strokeStyle = '#FFFFFF'
				ctx.stroke()
			} else {
				alert('ctx not found')
			}
		}
	}
	useEffect(() => {
		canvasFN()
	}, [])
	return (
		<footer id='footer'>
			<div className='footer-navigation'>
				<h3>Quick Links</h3>
				<ul>
					<li>
						<Link to='/home'>Home</Link>
					</li>
					<li>
						<Link to='/home'>About Us</Link>
					</li>
					<li>
						<Link to='/home'>Services</Link>
					</li>
					<li>
						<Link to='#contact'>Contact</Link>
					</li>
				</ul>
			</div>
			<div className='footer-contact'>
				<h3>Contact Us</h3>
				<p>Email: info@example.com</p>
				<p>Phone: +123 456 7890</p>
			</div>
			<div className='footer-social'>
				<h3>Follow Us</h3>
				<div className='social-icons'>
					<a
						href='https://facebook.com'
						target='_blank'
						className='social-icon'
					>
						FB
					</a>
					<a href='https://twitter.com' target='_blank' className='social-icon'>
						TW
					</a>
					<a
						href='https://instagram.com'
						target='_blank'
						className='social-icon'
					>
						IG
					</a>
				</div>
			</div>
			<div className='footer-art'>
				<canvas id='canvas'></canvas>
			</div>
		</footer>
	)
}
