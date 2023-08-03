export const EditComment = ({
	editContent,
	onHanldeEdit,
	onEditComment,
	setEdit,
	indexParent,
	index,
}) => {
	return (
		<div className="flex flex-col gap-4 items-end">
			<textarea
				value={editContent}
				onChange={onHanldeEdit}
				className="resize-none border-2 outline-none rounded-md py-2 px-4 overflow-hidden w-full h-[130px]"
			></textarea>
			<button
				onClick={() => {
					onEditComment({
						indexParent,
						userIndex: index,
						comment: editContent,
					})
					setEdit(false)
				}}
				className="bg-[#5457b6] text-white font-medium py-3 px-[30px] rounded-md uppercase "
			>
				update
			</button>
		</div>
	)
}
