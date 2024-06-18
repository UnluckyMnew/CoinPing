export const getPageCount = (totalCount: number, limit: number) => {
	return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages: number): number[] => {
	let pages: number[] = []
	for (let i = 0; i < totalPages; i++) {
		pages.push(i + 1)
	}
	return pages
}