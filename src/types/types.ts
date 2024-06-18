// coins
export interface ICoins {
	id: string
	symbol: string
	name: string
	image: string
	current_price: number
	market_cap: number
	market_cap_rank: number
	fully_diluted_valuation: number
	total_volume: number
	high_24h: number
	low_24h: number
	price_change_24h: number
	price_change_percentage_24h: number
	market_cap_change_24h: number
	market_cap_change_percentage_24h: number
	circulating_supply: number
	total_supply: number
	max_supply: number
}

// coin
export interface IPrice_change_percentage_in_currency {
	usd: number
}

interface ILow_24h {
	usd: number
}

interface IHigh_24h {
	usd: number
}

interface IFully_diluted_valuation {
	usd: number
}

interface IMarket_cap {
	usd: number
}

interface IAtl {
	usd: number
}

interface IAth {
	usd: number
}

interface ICurrent_price {
	usd: number
}

interface IMarket_data {
	current_price: ICurrent_price
	ath: IAth
	atl: IAtl
	market_cap: IMarket_cap
	fully_diluted_valuation: IFully_diluted_valuation
	high_24h: IHigh_24h
	low_24h: ILow_24h
	price_change_24h: number
	price_change_percentage_24h: number
	price_change_percentage_7d: number
	price_change_percentage_30d: number
	price_change_percentage_1y: number
	price_change_percentage_1h_in_currency: IPrice_change_percentage_in_currency
	price_change_percentage_24h_in_currency: IPrice_change_percentage_in_currency
	price_change_percentage_7d_in_currency: IPrice_change_percentage_in_currency
	price_change_percentage_14d_in_currency: IPrice_change_percentage_in_currency
	price_change_percentage_30d_in_currency: IPrice_change_percentage_in_currency
	price_change_percentage_60d_in_currency: IPrice_change_percentage_in_currency
	price_change_percentage_200d_in_currency: IPrice_change_percentage_in_currency
	price_change_percentage_1y_in_currency: IPrice_change_percentage_in_currency
	total_supply: number
	max_supply: number
	circulating_supply: number
}

interface IImage {
	thumb: string
	small: string
	large: string
}

interface IRepos_url {
	github: string[]
}

interface ILinks {
	homepage: string[]
	whitepaper: string
	blockchain_site: string[]
	official_forum_url: string[]
	subreddit_url: string
	repos_url: IRepos_url
}

interface IDescription {
	en: string
}

export interface ICoin {
	id: string
	categories: string[]
	symbol: string
	name: string
	description: IDescription
	links: ILinks
	image: IImage
	genesis_date: string
	market_cap_rank: number
	market_data: IMarket_data
}
