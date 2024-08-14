export const numberFormatter = (number: number) => {
	return `$${number
		.toString()
		.replace(/(^0|[A-Za-zА-Яа-яЁё]|\s)/, '')
		.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1.')}`
}
