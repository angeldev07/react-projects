import { useReducer } from 'react'
import { Document, action } from '../components/interfaces/documents'

interface State {
	documents: Array<Document>
	selectedDocument: Document
}

const INITIAL_STATE: State = {
	documents: JSON.parse(localStorage.getItem('docs') ?? '[]') ,
	selectedDocument: JSON.parse(localStorage.getItem('selectedDoc') ?? `{"title": "no available document", "id": "-1", "content": "", "createdAt": ""}`) 
}

const reducer = (state: State, action: action): State => {
	if (action.type === 'add') {
		// create a new doc and make currentSelection
		const doc: Document = {
			id: Date.now() + '',
			title: 'untitled-doc.md',
			content: '# Create your new markdown here!',
			createdAt: new Date().toDateString(),
		}

		const newDocs = [doc, ...state.documents]

		localStorage.setItem('docs', JSON.stringify(newDocs))
		localStorage.setItem('selectedDoc', JSON.stringify(state.selectedDocument))

		return {
			documents: newDocs,
			selectedDocument: newDocs.length === 1 ? newDocs[0] : state.selectedDocument,
		}
	}

	if (action.type === 'delete') {
		const newDocs = state.documents.filter(
			doc => doc.id !== state.selectedDocument.id
		)

		localStorage.setItem('docs', JSON.stringify(newDocs))
		if( newDocs.length !== 0)
			localStorage.setItem('selectedDoc', JSON.stringify(newDocs[0]))
		else
			localStorage.removeItem('selectedDoc')
			
		return {
			documents: newDocs,
			selectedDocument:
				newDocs.length === 0
					? {
						title: 'no available document',
						id: '-1',
						content: '',
						createdAt: '',
					}
					: newDocs[0],
		}
	}

	if (action.type === 'select') {
		const indexDoc = state.documents.findIndex(
			doc => doc.id === action.payload.id
		)
		localStorage.setItem('selectedDoc', JSON.stringify(state.documents[indexDoc]))
		return {
			documents: state.documents,
			selectedDocument: state.documents[indexDoc],
		}
	}

	if (action.type === 'updateNameDoc') {
		const { title } = action.payload
		const updateDoc = { ...state.selectedDocument, ['title']: title }
		return {
			...state,
			selectedDocument: updateDoc
		}
	}

	if (action.type === 'updateMarkdown') {
		const { content } = action.payload
		const updateDoc = { ...state.selectedDocument, ['content']: content }
		return {
			...state,
			selectedDocument: updateDoc,
		}
	}

	if (action.type === 'save') {
		const newDocs = state.documents.map(doc => {
			if (doc.id === state.selectedDocument.id) {
				return {
					...state.selectedDocument,
					['title']: `${state.selectedDocument.title}.md`
				}
			}
			return doc
		})

		localStorage.setItem('docs', JSON.stringify(newDocs))
		localStorage.setItem('selectedDoc', JSON.stringify(state.selectedDocument))
		return {
			...state,
			documents: newDocs,
		}
	}

	return state
}

export interface useDocumentsI extends State {
	handleSomething: () => void
	handleAddDoc: () => void
	handleDeletedDoc: () => void
	handleSelectDoc: (id: string) => void
	updateNameDoc: (title: string) => void
	saveDoc: () => void,
	updateMarkdown: (content: string) => void
}

export const useDocuments = () => {
	const [{ documents, selectedDocument }, dispatch] = useReducer(
		reducer,
		INITIAL_STATE
	)

	const handleAddDoc = () => {
		dispatch({ type: 'add' })
	}

	const handleDeletedDoc = () => {
		dispatch({ type: 'delete' })
	}

	const handleSelectDoc = (id: string) => {
		dispatch({ type: 'select', payload: { id } })
	}

	const updateNameDoc = (title: string) => {
		dispatch({ type: 'updateNameDoc', payload: { title } })
	}

	const saveDoc = () => {
		dispatch({ type: 'save' })
	}

	const updateMarkdown = (content: string) => {
		dispatch({ type: 'updateMarkdown', payload: { content } })
	}

	const handleSomething = () => {
		dispatch({ type: 'add' })
	}

	return {
		documents,
		selectedDocument,
		handleSomething,
		handleAddDoc,
		handleDeletedDoc,
		handleSelectDoc,
		updateNameDoc,
		saveDoc,
		updateMarkdown
	}
}
