import { useEffect, useRef } from 'react'

export const AddCommet = ({
	currentUser,
	onAddComment,
	index,
	onHanldeReplay,
	replayUser,
}) => {
	const { image, username } = currentUser
	const comment = useRef('')

	useEffect(() => {
		if (replayUser) {
			const value = `@${replayUser} `
			comment.current.defaultValue = value
			comment.current.setSelectionRange(value.length, value.length)
			comment.current.focus()
		}
	})

	const handleAddComment = () => {
		const newComment = {
			id: Date.now(),
			content: comment.current.value,
			replies: [],
			user: { username },
		}
		onAddComment({ comment: newComment, index: index })
		comment.current.value = ''
		if (replayUser) onHanldeReplay(false)
	}

	return (
		<div className='bg-white p-4 rounded-md flex flex-col  md:flex-row md:justify-between md:items-start md:gap-4'>
			<img src={image.png} alt="" width={45} height={45} className='hidden md:inline-block' />

			<textarea className='resize-none border outline-none rounded-md py-2 px-4 overflow-hidden md:w-full' ref={comment}  placeholder="Add comment..."></textarea>
			
			<div className='flex justify-between items-start pt-4'>
				<img src={image.png} alt="" width={45} height={45} className='md:hidden' />
				<button className='bg-[#5457b6] text-white font-medium py-2 px-6 rounded-md uppercase ' onClick={handleAddComment}>send</button>
			</div>
		</div>
	)
}
