import { useRef } from "react"

export const EditComment = ({
	editContent,
	onEditComment,
}) => {
	console.log(editContent);
	const editRef = useRef(editContent)
	return (
		<div className="flex flex-col gap-4 items-end">
			<textarea
				ref={editRef}
				defaultValue={editContent}
				className="resize-none border-2 outline-none rounded-md py-2 px-4 overflow-hidden w-full h-[130px]"
			></textarea>
			<button
				onClick={() => {
					onEditComment(editRef.current.value)
				}}
				className="bg-[#5457b6] text-white font-medium py-3 px-[30px] rounded-md uppercase "
			>
				update
			</button>
		</div>
	)
}
