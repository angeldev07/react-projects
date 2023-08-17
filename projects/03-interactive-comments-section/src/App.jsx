import { useContext } from 'react'
import { Comment } from './components/Comment'
import { AddCommet } from './components/AddCommet'
import userContext from './contexts/user'
import CommentContext from './contexts/CommentsContext'


export const App = () => {
	const { user } = useContext(userContext)
	const {
		comments,
		handleAddCommentsReplay
	} = useContext(CommentContext)

	const onAddComment = (newComment) => {
		handleAddCommentsReplay({comment: newComment})
	}

	return (
		<main className="w-full min-h-screen flex flex-col items-center justify-center py-6">
			<section className="w-[90%] mx-auto max-w-[735px]  mb-3 flex flex-col gap-4">
				{comments.map((comment, index) => (
					<div key={comment.id}>
						<Comment
							indexParent={index}
							comment={comment}		
						/>
						{comment.replies.length > 0 && (
							<div className="pl-4 my-4 border-l-2 border-[#eaecf1] md:ml-10 md:pl-10 flex flex-col gap-4">
								{comment.replies.map((reply, i) => (
									<Comment
										key={reply.id * 2}
										indexSon={i}
										indexParent={index}
										comment={reply}
									/>
								))}
							</div>
						)}
					</div>
				))}
				<div className="w-full">
					<AddCommet
						currentUser={user}
						onAddComment={onAddComment}
					/>
				</div>
			</section>
		</main>
	)
}

/**
 <div key={comment.id}>
						<Comment
							content={comment.content}
							indexParent={index}
							onAddCommentsReplay={handleAddCommentsReplay}
							user={comment.user}
							onDeleteComment={handleDeleteComment}
							onEditComment={handleEditComment}
							score={comment.score}
							created={comment.createdAt}
						/>
						{comment.replies.length > 0 && (
							<div className="pl-4 my-4 border-l-2 border-[#eaecf1] md:ml-10 md:pl-10 flex flex-col gap-4">
								{comment.replies.map((replay, i) => (
									<Comment
										key={replay.id * 2}
										content={replay.content}
										indexParent={index}
										onAddCommentsReplay={handleAddCommentsReplay}
										user={replay.user}
										index={i}
										onDeleteComment={handleDeleteComment}
										onEditComment={handleEditComment}
										replyingTo={replay.replyingTo}
										score={replay.score}
										created={replay.createdAt}
									/>
								))}
							</div>
						)}
					</div> 
 */
