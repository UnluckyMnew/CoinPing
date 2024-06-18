interface IChooseBox {
	img: any
	title: string
	text: string
}

export default function ChooseBox({ img, title, text }: IChooseBox) {
	return (
		<div className='choose-box'>
			<i>{img}</i>
			<div className='choose-box__text'>
				<h4>{title}</h4>
				<p>{text}</p>
			</div>
		</div>
	)
}
