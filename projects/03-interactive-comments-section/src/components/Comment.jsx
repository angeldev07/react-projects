import { useState, useContext } from 'react'
import userContext from '../contexts/user'
import { AddCommet } from './AddCommet'

export const Comment = ({
	content,
	onAddCommentsReplay,
	indexParent,
	user,
	index,
	onDeleteComment,
}) => {
	const { user: currentUser } = useContext(userContext)
	const [replay, setReplay] = useState(false)
	const [edit, setEdit] = useState(false)
	const [editContent, setEditContent] = useState(content)

	const handleEdit = e => {
		setEditContent(e.target.value)
	}

	return (
		<>
			<article className="bg-white rounded-md p-4 font-rubik">
				<header className="flex items-center gap-3">
					<img
						src={user.image.png}
						className="rounded-full"
						alt={`imagen de perfil de @${user.username}`}
						width={32}
						height={32}
					/>
					<span className="text-[#324152] font-bold"> {user.username} </span>
				</header>
				{!edit ? (
					<p className="text-[#67727e] font-normal py-4"> {content} </p>
				) : (
					<textarea
						value={editContent}
						cols="30"
						rows="10"
						onChange={handleEdit}
					></textarea>
				)}
				{user.username !== currentUser.username && (
					<div className="flex justify-between">
						<span>contador</span>
						<button
							className="flex items-center gap-2 text-[#5457b6] font-bold"
							disabled={replay}
							onClick={() => setReplay(!replay)}
						>
							<img src="/public/images/icon-reply.svg" alt="icono de replay" />
							Reply
						</button>
					</div>
				)}
				{user.username === currentUser.username && (
					<div className="flex justify-between">
						<span>contador</span>
						<div className="flex items-center gap-3">
							<button
								className="text-[#ed6468] font-bold flex items-center gap-2"
								onClick={() =>
									onDeleteComment({ index: indexParent, userIndex: index })
								}
							>
								<img
									src="/public/images/icon-delete.svg"
									alt="icono de replay"
								/>
								delete
							</button>
							<button
								className="text-[#5457b6] font-bold flex items-center gap-2"
								disabled={edit}
								onClick={() => setEdit(true)}
							>
								<img src="/public/images/icon-edit.svg" alt="icono de replay" />
								edit
							</button>
						</div>

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
			</article>

			{replay && (
				<div className='pt-4 w-ful'>
					<AddCommet
						index={indexParent}
						currentUser={currentUser}
						onAddComment={onAddCommentsReplay}
						onHanldeReplay={setReplay}
						replayUser={user.username}
					/>
				</div>
			)}
		</>
	)
}
