/* eslint-disable react/prop-types */
import { useRef, useState } from 'react'

export const Comment = ({ content, onAddCommentsReplay, indexParent }) => {
	const [replay, setReplay] = useState(false)
    const valueInput = useRef('')

	const handleReplay = () => setReplay(!replay)

    const handleAddCommentsReplay = () => {
        const replay = {
            content: `${valueInput.current.value} ${indexParent}`
        }

        onAddCommentsReplay(indexParent, replay)
        
        valueInput.current.value = ''
        handleReplay()
    }

	return (
		<article>
			<p> {content} </p>
			<button disabled={replay} onClick={handleReplay}>
				Replay
			</button>
			{replay && (
				<>
					<input ref={valueInput} type="text" placeholder="Escribe tu respuesta" />
					<button onClick={handleReplay}>cancelar</button>
					<button onClick={handleAddCommentsReplay} >enviar</button>
				</>
			)}
		</article>
	)
}
