/* eslint-disable react/prop-types */
import { useState, useContext } from 'react'
import userContext from '../contexts/user'
import { AddCommet } from './AddCommet'

export const Comment = ({
	content,
	onAddCommentsReplay,
	indexParent,
	username,
}) => {

	const { user } = useContext(userContext)
	const [replay, setReplay] = useState(false)

	return (
		<article>
			<h5> {username} </h5>
			<p>  {content} </p>
			<button disabled={replay} onClick={ () => setReplay(!replay)  }>
				Replay
			</button>
			{username === user.username && (
				<div>
					<button>delete</button>
					<button>edit</button>
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
