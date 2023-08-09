export const ListJobs = ({ jobs, onAddFilter }) => {
	return (
		<>
			{jobs.map(job => (
				<article
					key={job.id}
					className={`px-4 pt-4 bg-white rounded-md ${
						job.featured ? 'border-l-4 border-[#5ba4a4]' : ''
					} shadow-lg justify-between lg:flex lg:py-4`}
				>
					<section className="items-center gap-4 lg:flex">
						<picture>
							<img
								src={`/${job.logo}`}
								alt=""
								className="w-10 h-10 -mt-9 lg:mt-0 lg:w-16 lg:h-16"
							/>
						</picture>
						<div className="pt-4 border-b border-[#5ba4a4] lg:border-0 lg:p-0">
							<div className="flex gap-1 items-center mb-2 lg:mb-0">
								<span className="font-bold text-[var(--bg)] mr-2 ">
									{job.company}
								</span>
								{job.new && (
									<span className="inline-block pt-1 px-2 bg-[var(--bg)] text-white font-bold uppercase rounded-xl lg:text-xs">
										new!
									</span>
								)}
								{job.featured && (
									<span className="inline-block pt-1 px-2 bg-[#2c3a3a] text-white font-bold uppercase rounded-xl lg:text-xs">
										featured
									</span>
								)}
							</div>
							<strong className="text-[#2c3a3a] text-lg transition-colors hover:text-[#5ba4a4] cursor-pointer ">
								{job.position}
							</strong>
							<ul className="text-[#7b8e8e] flex gap-6 items-center py-4 lg:p-0">
								<li> {job.postedAt} </li>
								<li className="relative before:content-[''] before:block before:bg-[#7b8e8e] before:w-1 before:h-1 before:rounded-full before:absolute before:-left-[13px] before:top-[10px]">
									{job.contract}
								</li>
								<li className="relative before:content-[''] before:block before:bg-[#7b8e8e] before:w-1 before:h-1 before:rounded-full before:absolute before:-left-[13px] before:top-[10px]">
									{job.location}
								</li>
							</ul>
						</div>
					</section>

					<section className="py-4 flex flex-wrap gap-2">
						<button
							onClick={() => onAddFilter(job.role)}
							className="transition-colors hover:text-white hover:bg-[#5ba4a4] pt-1 px-4 bg-[#effafa] text-[#5ba4a4] rounded-md font-bold"
						>
							{job.role}
						</button>
						<button
							onClick={() => onAddFilter(job.level)}
							className="transition-colors hover:text-white hover:bg-[#5ba4a4] pt-1 px-4 bg-[#effafa] text-[#5ba4a4] rounded-md font-bold"
						>
							{job.level}
						</button>
						{job.languages.map(language => (
							<button
								key={language}
								onClick={() => onAddFilter(language)}
								className="transition-colors hover:text-white hover:bg-[#5ba4a4] pt-1 px-4 bg-[#effafa] text-[#5ba4a4] rounded-md font-bold"
							>
								{language}
							</button>
						))}
						{job.tools.map(tool => (
							<button
								key={tool}
								onClick={() => onAddFilter(tool)}
								className="transition-colors hover:text-white hover:bg-[#5ba4a4] pt-1 px-4 bg-[#effafa] text-[#5ba4a4] rounded-md font-bold"
							>
								{tool}
							</button>
						))}
					</section>
				</article>
			))}
		</>
	)
}

/*

{/* {job.position}
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
</div> }*/
