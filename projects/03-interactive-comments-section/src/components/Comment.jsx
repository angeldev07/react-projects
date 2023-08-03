import { useState, useContext } from 'react'
import userContext from '../contexts/user'
import { AddCommet } from './AddCommet'

export const Comment = ({
	content,
	onAddCommentsReplay,
	indexParent,
	username,
	index,
	onDeleteComment,
}) => {
	const { user } = useContext(userContext)
	const [replay, setReplay] = useState(false)
	const [edit, setEdit] = useState(false)
	const [editContent, setEditContent] = useState(content)

	const handleEdit = e => {
		setEditContent(e.target.value)
	}

	return (
		<article>
			<h5> {username} </h5>
			{!edit ? (
				<p> {content} </p>
			) : (
				<textarea
					value={editContent}
					cols="30"
					rows="10"
					onChange={handleEdit}
				></textarea>
			)}
			{username !== user.username && (
				<button disabled={replay} onClick={() => setReplay(!replay)}>
					Replay
				</button>
			)}
			{username === user.username && (
				<div>
					<button
						onClick={() =>
							onDeleteComment({ index: indexParent, userIndex: index })
						}
					>
						delete
					</button>
					<button disabled={edit} onClick={() => setEdit(true)}>
						edit
					</button>
					{edit && (
						<button
							onClick={() => {
								onAddCommentsReplay({
									index: indexParent,
									comment: editContent,
									edit: true,
									userIndex: index,
								})
								setEdit(false)
							}}
						>
							update
						</button>
					)}
				</div>
			)}
			{replay && (
				<AddCommet
					index={indexParent}
					currentUser={user}
					onAddComment={onAddCommentsReplay}
					onHanldeReplay={setReplay}
					replayUser={username}
				/>
			)}
		</article>
	)
}
