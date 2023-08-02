import { useRef } from "react"

export const AddCommet = ({ user, onAddComment }) => {
	const { image } = user
    const comment = useRef('')

    const handleAddComment = () => {
        const newComment = {
            id: Date.now(),
            content: comment.current.value,
            replies: []
        }
        onAddComment({comment: newComment})
    }

	return (
		<div>
			<img src={image.png} alt="" width={32} height={32} />
			<input ref={comment} type="text" placeholder="Add a comment " />
			<button onClick={handleAddComment}>send</button>
		</div>
	)
}
