import { useContext, useEffect, useState } from 'react'
import { Comment } from './components/Comment'
import commentsList from '/public/data.json'
import userContext from './contexts/user'
import { AddCommet } from './components/AddCommet'

const { comments: initialComments } = commentsList

export const App = () => {
	const { user } = useContext(userContext)

	const [comments, setComments] = useState(initialComments)

	const handleAddCommentsReplay = ({ index, comment }) => {
		// creo una copia del estado actual
		const commentsToUpdate = [...comments]

		// actualizo el estado en el indice
		if (index !== undefined) commentsToUpdate[index].replies.push(comment)
		else commentsToUpdate.push(comment)

		setComments(commentsToUpdate)
	}

	const handleEditComment = ({ indexParent, userIndex, comment }) => {
		const commentsToUpdate = [...comments]

		if (indexParent && !userIndex) {
			commentsToUpdate[indexParent].content = comment
		} else {
			commentsToUpdate[indexParent].replies[userIndex].content = comment
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
		<main className="w-full min-h-screen flex flex-col items-center justify-center py-6">
			<div className="w-[90%] mx-auto max-w-[735px]  mb-3 flex flex-col gap-4">
				{comments.map((comment, index) => (
					<div key={comment.id}>
						<Comment
							content={comment.content}
							indexParent={index}
							onAddCommentsReplay={handleAddCommentsReplay}
							user={comment.user}
							onDeleteComment={handleDeleteComment}
							onEditComment={handleEditComment}
							score={comment.score}
						/>
						{comment.replies.length > 0 && (
							<div className="pl-4 my-4 border-l-2 border-[#eaecf1] md:ml-10 md:pl-10 flex flex-col gap-4">
								{comment.replies.map((replay, i) => (
									<Comment
										key={i * 2}
										content={replay.content}
										indexParent={index}
										onAddCommentsReplay={handleAddCommentsReplay}
										user={replay.user}
										index={i}
										onDeleteComment={handleDeleteComment}
										onEditComment={handleEditComment}
										replyingTo={replay.replyingTo}
										score={replay.score}
									/>
								))}
							</div>
						)}
					</div>
				))}
				<div className="w-full">
					<AddCommet
						currentUser={user}
						onAddComment={handleAddCommentsReplay}
					/>
				</div>
			</div>
		</main>
	)
}
