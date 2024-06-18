import { useState } from 'react'

export const useFetching = (callback: any) => {
	const [isLoading, setIsLoading] = useState<Boolean>(false)
	const [error, setError] = useState<any>('')

	const fetching = async () => {
		try {
			setIsLoading(true)
			await callback()
		} catch (error: any) {
			setError(error.message)
		} finally {
			setIsLoading(false)
		}
	}
	return [fetching, isLoading, error]
}