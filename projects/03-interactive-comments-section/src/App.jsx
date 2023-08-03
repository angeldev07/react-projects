import { useContext, useEffect, useState } from 'react'
import { Comment } from './components/Comment'
import commentsList from '/public/data.json'
import userContext from './contexts/user'
import { AddCommet } from './components/AddCommet'

const { comments: initialComments } = commentsList

export const App = () => {
	const { user } = useContext(userContext)

	const [comments, setComments] = useState(initialComments)

	const handleAddCommentsReplay = ({ index, comment, edit, userIndex }) => {
		// creo una copia del estado actual
		const commentsToUpdate = [...comments]

		// actualizo el estado en el indice
		if (index !== undefined && !edit)
			commentsToUpdate[index].replies.push(comment)

		if (edit) {
			commentsToUpdate[index].replies[userIndex].content = comment
		} else {
			commentsToUpdate.push(comment)
		}

		setComments(commentsToUpdate)
	}

	const handleDeleteComment = ({ index, userIndex }) => {
		const commentsToUpdate = [...comments]

		if (userIndex !== undefined)
			commentsToUpdate[index].replies.splice(userIndex, 1)
		else commentsToUpdate.splice(index, 1)

		setComments(commentsToUpdate)
	}

	useEffect(() => {
		console.log(comments)
	}, [comments])

	return (
		<main>
			<h1>Listado de comentarios owo</h1>
			{comments.map((comment, index) => (
				<div key={comment.id}>
					<Comment
						content={comment.content}
						indexParent={index}
						onAddCommentsReplay={handleAddCommentsReplay}
						username={comment.user.username}
						onDeleteComment={handleDeleteComment}
					/>
					{comment.replies.length > 0 &&
						comment.replies.map((replay, i) => (
							<div key={i * 2} style={{ marginLeft: '1.5rem' }}>
								<Comment
									content={replay.content}
									indexParent={index}
									onAddCommentsReplay={handleAddCommentsReplay}
									username={replay.user.username}
									index={i}
									onDeleteComment={handleDeleteComment}
								/>
							</div>
						))}
				</div>
			))}
			<br />
			<AddCommet currentUser={user} onAddComment={handleAddCommentsReplay} />
		</main>
	)
}
