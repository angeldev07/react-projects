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

	const handleAddComment = () => {
		const newComment = {
			id: Date.now(),
			content: comment.current.value,
			replies: [],
			user: { username },
		}
		onAddComment({ comment: newComment, index: index })
		comment.current.value = ''
		if (replayUser) onHanldeReplay(false)
	}

	return (
		<div>
			<img src={image.png} alt="" width={32} height={32} />
			<textarea ref={comment} className="add-input" placeholder="Add comment"></textarea>
			<button onClick={handleAddComment}>send</button>
		</div>
	)
}
