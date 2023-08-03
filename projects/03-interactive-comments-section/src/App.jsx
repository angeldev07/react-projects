import { useContext, useState } from 'react'
import { Comment } from './components/Comment'
import commentsList from '/public/data.json'
import userContext from './contexts/user'
import { AddCommet } from './components/AddCommet'

const { comments: initialComments } = commentsList

export const App = () => {
	const { user } = useContext(userContext)

	const [comments, setComments] = useState(initialComments)

	const handleAddCommentsReplay = ({index, comment}) => {
		// creo una copia del estado actual
		const commentsToUpdate = [...comments]

		// actualizo el estado en el indice
		if (index !== undefined)
			commentsToUpdate[index].replies.push(comment)
		else 
			commentsToUpdate.push(comment)

		setComments(commentsToUpdate)
	}

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
					/>
					{comment.replies.length > 0 &&
						comment.replies.map((replay, i) => (
							<div key={i * 2} style={{ marginLeft: '1.5rem' }}>
								<Comment
									content={replay.content}
									indexParent={index}
									onAddCommentsReplay={handleAddCommentsReplay}
									username={replay.user.username}
								/>
							</div>
						))}
				</div>
			))}
			<br />
			<AddCommet currentUser={user} onAddComment={handleAddCommentsReplay}  />
		</main>
	)
}
