// import { useEffect, useState } from 'react'
import jobsInitialList from './assets/data.json'
import { ListJobs } from './components/ListJobs'
import { FilterList } from './components/FilterList'
import { useJobs } from './hooks/useJobs'

function App() {

	const { jobs, filters, handleClearFilters, handleDeleteFilter, hanldeAddFilter } = useJobs(jobsInitialList)
	
	return (
		<main>
			<div className="w-full h-[156px] bg-no-repeat bg-cover bg-[var(--bg)] bg-[url('../src/assets/images/bg-header-mobile.svg')] md:bg-[url('../src/assets/images/bg-header-desktop.svg')]">
				{/* <img src="../src/assets/images/bg-header-mobile.svg" alt="" /> */}
			</div>
			{/* filters */}
			{filters.length > 0 && (
				<section className="bg-white rounded-md w-[90%] max-w-5xl mx-auto -mt-6 mb-10 p-4 flex flex-wrap gap-4">
					<FilterList
						filter={filters}
						onDeleteFilter={handleDeleteFilter}
					/>
					<button
						onClick={handleClearFilters}
						className="ml-auto text-[#7b8e8e] font-bold text-sm transition-colors hover:underline hover:text-[#5ba4a4]"
					>
						Clear
					</button>
				</section>
			)}

			{/* jobs list */}
			<section className="w-[90%] mx-auto max-w-5xl flex flex-col gap-8 mt-10 mb-4">
				<ListJobs jobs={jobs} onAddFilter={hanldeAddFilter} />
			</section>
		</main>
	)
}

export default App
