import { useEffect, useRef } from 'react'

export const AddCommet = ({
	currentUser,
	onAddComment,
	index,
	onHanldeReplay,
	replayUser,
}) => {
	const { image, username } = currentUser
	const comment = useRef('')

	useEffect(() => {
		if (replayUser) {
			const value = `@${replayUser} `
			comment.current.defaultValue = value
			comment.current.setSelectionRange(value.length, value.length)
			comment.current.focus()
		}
	})

	const cleanComment = ({token, comment}) => {
		return comment.includes(token) ? comment.split(token)[1] : comment
	}

	const handleAddComment = () => {

		const content = cleanComment({token:`@${replayUser} `, comment:comment.current.value })

		const newComment = {
			id: Date.now(),
			content ,
			createdAt: '',
			score: 0,
			user: { image, username },
			replies: [],
		}

		if (replayUser) {
			newComment['replyingTo'] = replayUser
			onHanldeReplay(false)
		}

		onAddComment({ comment: newComment, index: index })
		comment.current.value = ''
	}

	return (
		<div className="bg-white p-4 rounded-md flex flex-col  md:flex-row md:justify-between md:items-start md:gap-4">
			<img
				src={image.png}
				alt=""
				width={45}
				height={45}
				className="hidden md:inline-block"
			/>

			<textarea
				className="resize-none border-2 outline-none rounded-md py-2 px-4 overflow-hidden md:w-full"
				ref={comment}
				placeholder="Add comment..."
			></textarea>

			<div className="flex justify-between items-start pt-4">
				<img
					src={image.png}
					alt=""
					width={45}
					height={45}
					className="md:hidden"
				/>
				<button
					className="bg-[#5457b6] text-white font-medium py-3 px-[30px] rounded-md uppercase "
					onClick={handleAddComment}
				>
					{replayUser ? 'reply' : 'send'}
				</button>
			</div>
		</div>
	)
}
