import classes from "./Pagination.module.css"

interface IPagination {
	page: number
	changePage: (p: number) => void
	totalPages: number[]
}

export default function Pagination({ page, changePage, totalPages }: IPagination) {
	// постраничная навигация
	return (
		<div className={classes.page__wrapper}>
			{totalPages.map(p => (
				<span
					className={`${
						page === p
							? classes.page + ' ' + classes.page__current
							: classes.page
					}`}
					key={p}
					onClick={() => changePage(p)}
				>
					{p}
				</span>
			))}
		</div>
	)
}
