import { createContext, useEffect, useState } from "react";

import commentsList from '/public/data.json'

const CommentContext = createContext()

// creamos el proveedor del contexto 
const { comments: initialComments } = commentsList


const CommentProvider = ({children}) => {

	const [comments, setComments] = useState(
		localStorage.getItem('comments')
			? JSON.parse(localStorage.getItem('comments'))
			: initialComments
	)

    /**
     * Funcion para agregar un comentario cuando se responde o bien si es un comentario nuevo
     * @param {index, comment} index del comentario padre, comment comentario para agregar 
     */
	const handleAddCommentsReply = ({ index, comment }) => {
		// creo una copia del estado actual
		const commentsToUpdate = [...comments]

		// actualizo el estado en el indice
		if (index !== undefined) commentsToUpdate[index].replies.push(comment)
		else commentsToUpdate.push(comment)

		setComments(commentsToUpdate)
	}

    /**
     * Funcion para editar un comentario si es principal o si es una respuesta a otro comentario.
     * @param {indexParent, userIndex, comment} indexParent ubicacion del comentario si es principal, userIndex si es una respueta, comment para el comentario nuevo. 
     */
	const handleEditComment = ({ indexParent, userIndex, comment }) => {
		const commentsToUpdate = [...comments]

		if (indexParent && !userIndex) {
			commentsToUpdate[indexParent].content = comment
		} else {
			commentsToUpdate[indexParent].replies[userIndex].content = comment
		}

		setComments(commentsToUpdate)
	}

    /**
     * Funcion para eliminar un comentario si es principal o si es una respuesta a otro comentario.
     * @param {index, userIndex} indexParent ubicacion del comentario si es principal, userIndex si es una respueta.
     */
	const handleDeleteComment = ({ index, userIndex }) => {
		const commentsToUpdate = [...comments]

		if (userIndex !== undefined)
			commentsToUpdate[index].replies.splice(userIndex, 1)
		else commentsToUpdate.splice(index, 1)

		setComments(commentsToUpdate)
	}

	useEffect(() => {
		localStorage.setItem('comments', JSON.stringify(comments))
	}, [comments])

    const data = { comments, handleAddCommentsReply, handleDeleteComment, handleEditComment}

    return (
        <CommentContext.Provider value={data}> 
            {children}
        </CommentContext.Provider>
    )
}


export {CommentProvider}
export default CommentContext

