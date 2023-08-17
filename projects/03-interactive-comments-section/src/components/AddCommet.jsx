import { useRef } from 'react'
export const AddCommet = ({
	currentUser,
	onAddComment,
	replyUser,
}) => {
	const { image, username } = currentUser
	const comment = useRef('')

	const cleanComment = ({token, comment}) => {
		return comment.includes(token) ? comment.split(token)[1] : comment
	}

	const handleAddComment = () => {

		const content = cleanComment({token:`@${replyUser} `, comment:comment.current.value })

		const newComment = {
			id: Date.now(),
			content ,
			createdAt: new Date().toISOString(),
			score: 0,
			user: { image, username },
			replies: [],
		}

		if (replyUser) {
			newComment['replyingTo'] = replyUser
		}

		onAddComment(newComment)
		comment.current.value = ''
	}

	return (
		<div className="bg-white p-4 rounded-md flex flex-col  md:flex-row md:justify-between md:items-start md:gap-4">
			<img
				src={image.png}
				alt={`profile user image to ${username}`}
				width={45}
				height={45}
				className="hidden md:inline-block"
			/>

			<textarea
				className="resize-none border-2 outline-none rounded-md py-2 px-4 overflow-hidden md:w-full transition-colors hover:border-[#5457b6] focus:border-[#5457b6]"
				ref={comment}
				placeholder="Add comment..."
				defaultValue={replyUser ?  `@${replyUser}` : ''}
			></textarea>

			<div className="flex justify-between items-start pt-4">
				<img
					src={image.png}
					alt={`profile user image to ${username}`}
					width={45}
					height={45}
					className="md:hidden"
				/>
				<button
					className="bg-[#5457b6] text-white font-medium py-3 px-[30px] rounded-md uppercase transition-opacity hover:opacity-50"
					onClick={handleAddComment}
				>
					{replyUser ? 'reply' : 'send'}
				</button>
			</div>
		</div>
	)
}
