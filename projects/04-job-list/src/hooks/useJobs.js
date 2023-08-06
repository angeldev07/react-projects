import { useEffect, useState } from 'react'

export const useJobs = initialState => {
	const [jobs, setJobs] = useState(initialState)
	const [filters, setFilters] = useState([])

	const toFilterJobs = (filters, jobs) => {
		filters.forEach(filter => {
			jobs = jobs.filter(job => getFilterJobs({ job, filter }))
		})
		setJobs(jobs)
	}

	const getFilterJobs = ({ job, filter }) => {
		const { role, level, languages, tools } = job
		return (
			role === filter ||
			level === filter ||
			languages.includes(filter) ||
			tools.includes(filter)
		)
	}

	const hanldeAddFilter = filter => {
		if (filters.includes(filter)) return
		setFilters([...filters, filter])
	}

	const handleClearFilters = () => {
		setFilters([])
	}

	const handleDeleteFilter = index => {
		const newFilters = [...filters]
		newFilters.splice(index, 1)
		setFilters(newFilters)
	}

	useEffect(() => {
		if (filters.length > 0) {
			toFilterJobs(filters, initialState)
		} else setJobs(initialState)
	}, [filters])

	return {
		jobs,
		filters,
		hanldeAddFilter,
		handleClearFilters,
		handleDeleteFilter,
	}
}
