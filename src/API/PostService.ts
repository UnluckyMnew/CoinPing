import axios from 'axios'
import { ICoin, ICoins } from '../types/types'

export default class PostService {
	static async getAll(limit = 10, page = 1) {
		const response = await axios.get<ICoins[]>(
			`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=${page}&x_cg_demo_api_key=CG-5xR4fuYFprU1Xi7qtEXu69yy`,
			{
				headers: {
					'Access-Control-Allow-Origin': '*',
				},
			}
		)
		return response
	}

	static async getTotalCoinsCount() {
		const response = await axios.get<ICoins[]>(
			`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=CG-5xR4fuYFprU1Xi7qtEXu69yy`,
			{
				headers: {
					'Access-Control-Allow-Origin': '*',
				},
			}
		)
		return response
	}

	static async getById(id: any) {
		console.log(id)
		const response = await axios.get<ICoin>(
			`https://api.coingecko.com/api/v3/coins/${id}?&x_cg_demo_api_key=CG-5xR4fuYFprU1Xi7qtEXu69yy`,
			{
				headers: {
					'Access-Control-Allow-Origin': '*',
				},
			}
		)
		return response
	}
}
