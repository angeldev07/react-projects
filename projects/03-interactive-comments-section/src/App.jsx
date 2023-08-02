import { useState } from 'react'
import { Comment } from './components/Comment'
import commentsList from '/public/data.json'
import { useEffect } from 'react'

const { comments: initialComments } = commentsList

export const App = () => {
	const [comments, setComments] = useState(initialComments)

	const handleAddCommentsReplay = (index, comment) => {
		// creo una copia del estado actual
		const commentsToUpdate = [...comments]

		// actualizo el estado en el indice
		commentsToUpdate[index].replies.push(comment)

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
					/>
					{comment.replies.length > 0 &&
						comment.replies.map((replay, i) => (
							<div key={i * 2} style={{marginLeft: '1.5rem'}}>
								<Comment
									content={replay.content}
									indexParent={index}
									onAddCommentsReplay={handleAddCommentsReplay}
								/>
							</div>
						))}
				</div>
			))}
		</main>
	)
}
