export const FilterList = ({ filter, onDeleteFilter }) => {
	return (
		<>
			{filter.map((filter, index) => (
				<div
					key={filter}
					className="inline-flex items-center gap-3 pl-2 bg-[#effafa] text-[#5ba4a4] rounded-md font-bold"
				>
					<span className="inline-block pt-1"> {filter} </span>
					<button
						onClick={() => onDeleteFilter(index)}
						className="text-white bg-[#5ba4a4] w-full h-full p-2 rounded-r-md transition-colors hover:bg-[#2c3a3a]"
					>
						<img
							src="../../src/assets/images/icon-remove.svg"
							alt="remove icon"
						/>
					</button>
				</div>
			))}
		</>
	)
}
