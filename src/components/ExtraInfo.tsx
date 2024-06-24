import { ReactNode } from 'react'

interface IExtraInfoProps {
	title: string
	children: ReactNode
}
export default function ExtraInfo({ title, children }: IExtraInfoProps) {
	return (
		<div className='extra-info'>
			<h4 className='title'>{title}</h4>
			<button
				className='more-btn btn'
				onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
					e.currentTarget.classList.toggle('active')
					e.currentTarget.innerText = e.currentTarget.classList.contains(
						'active'
					)
						? 'Less'
						: 'More'
					e.currentTarget
						.closest('div')
						?.querySelector('.info')
						?.classList.toggle('active')
				}}
			>
				More
			</button>
			<p className='info'>{children}</p>
		</div>
	)
}
