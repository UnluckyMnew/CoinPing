import ChooseBox from './ChooseBox.tsx'
// import handImg from "/images/choose-main.png"

export default function WhyUs() {
	return (
		<>
			<section id='whyus' className='why-section'>
				<div className='choose-container'>
					<h2>
						why <span>choose us</span>
					</h2>
					<div className='choose-container__content'>
						<div className='choose-container__content__1'>
							<ChooseBox
								img={1}
								title='CONNECT YOUR WALLET'
								text='Use Trust Wallet, Metamask or to connect to the app.'
							/>
							<ChooseBox
								img={2}
								title='SELECT YOUR QUANTITY'
								text='Upload your crypto and set a title, description and price.'
							/>
							<ChooseBox
								img={3}
								title='CONFIRM TRANSACTION'
								text='Earn by selling your crypto on our marketplace.'
							/>
						</div>
						<div className='choose-container__content__2'>
							{/* <img src={handImg} alt='hand_img' /> */}
							<p>hand img</p>
						</div>
						<div className='choose-container__content__3'>
							<ChooseBox
								img={4}
								title='RECEIVE YOUR OWN NFTS'
								text='Invest all your crypto at one place on one platform.'
							/>
							<ChooseBox
								img={5}
								title='TAKE A MARKET
                  TO SELL'
								text='Discover, collect the right crypto collections to buy or sell.'
							/>
							<ChooseBox
								img={6}
								title='DRIVE YOUR COLLECTION'
								text='We make it easy to Discover, Invest and manage.'
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
