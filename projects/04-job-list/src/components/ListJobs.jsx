export const ListJobs = ({ jobs, onAddFilter }) => {
	return (
		<>
			{jobs.map(job => (
				<div key={job.id}>
					{job.position}
					<hr />
					<div className="mt-4 px-4 flex flex-wrap gap-3">
						<button onClick={() => onAddFilter(job.role)} className="text-white  py-1 px-4 bg-teal-500 rounded-md">
							{job.role}
						</button>
						<button onClick={() => onAddFilter(job.level)} className="text-white  py-1 px-4 bg-teal-500 rounded-md">
							{job.level}
						</button>
						{job.languages.map(language => (
							<button key={language} onClick={() => onAddFilter(language)} className="text-white  py-1 px-4 bg-teal-500 rounded-md">
								{language}
							</button>
						))}
						{job.tools.map(tool => (
							<button key={tool} onClick={() => onAddFilter(tool)} className="text-white  py-1 px-4 bg-teal-500 rounded-md">
								{tool}
							</button>
						))}
					</div>
				</div>
			))}
		</>
	)
}
