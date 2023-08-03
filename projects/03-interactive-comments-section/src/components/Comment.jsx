import { useState, useContext } from 'react'
import userContext from '../contexts/user'
import { AddCommet } from './AddCommet'
import { EditComment } from './EditComment'
import { Rate } from './Rate'

export const Comment = ({
	content,
	onAddCommentsReplay,
	indexParent,
	user,
	index,
	onDeleteComment,
	onEditComment,
	replyingTo,
	score
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
			<article className="bg-white rounded-md p-4 font-rubik ">
				{/* para el contrador en desktop */}
				<div className="hidden">
					<Rate score={0} />
				</div>
				{/* donde ira todo  */}
				<div>
					<header className="flex">
						{/* contenedor para la imagen, time ago */}
						<div className="flex items-center gap-3 ">
							<img
								src={user.image.png}
								className="rounded-full"
								alt={`imagen de perfil de @${user.username}`}
								width={32}
								height={32}
							/>
							<span className="text-[#324152] font-bold">{user.username}</span>
						</div>

						{/* reply */}
						{user.username !== currentUser.username && (
							<div className="flex justify-between ml-auto">
								<button
									className="flex items-center gap-2 text-[#5457b6] font-bold"
									disabled={replay}
									onClick={() => setReplay(!replay)}
								>
									<img
										src="/public/images/icon-reply.svg"
										alt="icono de replay"
									/>
									Reply
								</button>
							</div>
						)}

						{/* controles: edit y delete */}
						{user.username === currentUser.username && (
							<div className="flex items-center gap-3 ml-auto">
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
									<img
										src="/public/images/icon-edit.svg"
										alt="icono de replay"
									/>
									edit
								</button>
							</div>
						)}
					</header>
					{!edit ? (
						<p className="text-[#67727e] font-normal py-4 break-words">
							{replyingTo && (
								<span className="text-[#5457b6] font-bold">
									{`@${replyingTo} `}
								</span>
							)}
							{content}
						</p>
					) : (
						<div className="mt-3 ">
							<EditComment
								editContent={editContent}
								onHanldeEdit={handleEdit}
								onEditComment={onEditComment}
								setEdit={setEdit}
								indexParent={indexParent}
								index={index}
							/>
						</div>
					)}
				</div>
				{/* para contador y botones de control en mobile */}
				<div>
					<Rate score={score} />
				</div>
			</article>

			{replay && (
				<div className="pt-4 w-ful">
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

