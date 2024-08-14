import { memo, useEffect, useRef } from 'react'

function TradingViewWidget() {
	const container = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const script = document.createElement('script')
		script.src =
			'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
		script.type = 'text/javascript'
		script.async = true
		script.innerHTML = `
        {
          "width": "958",
          "height": "500",
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "Europe/Moscow",
          "theme": "dark",
          "style": "3",
          "locale": "ru",
          "backgroundColor": "#0d0618",
          "gridColor": "rgba(255, 255, 255, 0.06)",
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`
		if (container.current) {
			;(container.current as HTMLElement).appendChild(script)
		}
	}, [])

	return (
		<div className='tradingview-widget-container' ref={container}>
			<div className='tradingview-widget-container__widget'></div>
			<div className='tradingview-widget-copyright'>
				<a
					href='https://ru.tradingview.com/'
					rel='noopener nofollow'
					target='_blank'
				>
					{/* <span className='blue-text'>Все рынки на TradingView</span> */}
				</a>
			</div>
		</div>
	)
}

export default memo(TradingViewWidget)
