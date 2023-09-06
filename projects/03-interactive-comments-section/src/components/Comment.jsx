import { useState, useContext, useEffect } from 'react'
import userContext from '../contexts/user'
import { AddCommet } from './AddCommet'
import { EditComment } from './EditComment'
import { Rate } from './Rate'
import { Modal } from './Modal'
import { formatDistanceToNowStrict } from 'date-fns'
import CommentContext from '../contexts/CommentsContext'

export const Comment = ({
	indexParent,
	indexSon,
	comment
}) => {
	const { user: currentUser } = useContext(userContext)
	const { handleAddCommentsReply, handleDeleteComment, handleEditComment } = useContext(CommentContext)
	const { content, user, createdAt, replyingTo, score } = comment
	
	const [reply, setReply] = useState(false)
	const [edit, setEdit] = useState(false)
	const [open, setOpen] = useState(false)
	

	const handleEdit = newEditContent => {
		handleEditComment({indexParent, userIndex:indexSon, comment:newEditContent})
		setEdit(false)
	}

	const hanldeDelete = () => {
		handleDeleteComment({ index: indexParent, userIndex: indexSon })
		setOpen(false)
	}

	const onAddComment = (comment) => {
		handleAddCommentsReply({index: indexParent, comment})
		setReply(false)
	}

	useEffect(() => {
		if (open) document.body.style.overflow = 'hidden'

		return () => (document.body.style.overflow = 'auto')
	}, [open])

	return (
		<>
			<article className="bg-white rounded-md p-4 font-rubik relative flex-row-reverse gap-6 md:static md:flex md:p-6">
				{/* donde ira todo  */}
				<section className="w-full">
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
							{user.username === currentUser.username && (
								<span className="bg-[#5457b6] text-white rounded-md inline-block px-3 text-sm font-normal">
									you
								</span>
							)}
							<span className="text-[#67727e]">
								{formatDistanceToNowStrict(new Date(createdAt), {
									addSuffix: true,
								})}
							</span>
						</div>

						{/* reply */}
						{user.username !== currentUser.username && (
							<div className="flex justify-between ml-auto absolute bottom-7 right-4 md:static">
								<button
									className="flex items-center gap-2 text-[#5457b6] font-bold transition-opacity hover:opacity-60"
									disabled={reply}
									onClick={() => setReply(!reply)}
								>
									<img
										src="/images/icon-reply.svg"
										alt="icono de replay"
									/>
									Reply
								</button>
							</div>
						)}

						{/* controles: edit y delete */}
						{user.username === currentUser.username && (
							<div className="flex items-center gap-3 ml-auto absolute bottom-7 right-4 md:static">
								<button
									className="text-[#ed6468] font-bold flex items-center gap-2 transition-opacity hover:opacity-50"
									onClick={() => setOpen(true)}
								>
									<img
										src="/images/icon-delete.svg"
										alt="icono de replay"
									/>
									delete
								</button>
								<button
									className="text-[#5457b6] font-bold flex items-center gap-2 transition-opacity hover:opacity-50"
									disabled={edit}
									onClick={() => setEdit(true)}
								>
									<img
										src="/images/icon-edit.svg"
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
								editContent={content}
								onEditComment={handleEdit}
							/>
						</div>
					)}
				</section>
				{/* para contador y botones de control en mobile */}
				<div>
					<Rate score={score} />
				</div>

				{open && (
					<Modal
						title="Delete comment"
						description="Are you sure you want to delete this comment? This will remove the comment and can't be undone."
						onConfirm={hanldeDelete}
						onCancel={() => setOpen(false)}
					/>
				)}
			</article>

			{reply && (
				<div className="pt-4 w-ful">
					<AddCommet
						currentUser={currentUser}
						onAddComment={onAddComment}
						replyUser={user.username}
					/>
				</div>
			)}
		</>
	)
}
