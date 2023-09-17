import { useReducer } from 'react'
import { Document, action } from '../components/interfaces/documents'

interface State {
	documents: Array<Document>
	selectedDocument: Document
}

const INITIAL_STATE: State = {
	documents: [
		{
			id: '1',
			title: 'welcome.md',
			createdAt: '04 January 2022',
			content:
				"# Welcome to Markdown\n\nMarkdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.\n\n## How to use this?\n\n1. Write markdown in the markdown editor window\n2. See the rendered markdown in the preview window\n\n### Features\n\n- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists\n- Name and save the document to access again later\n- Choose between Light or Dark mode depending on your preference\n\n> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).\n\n#### Headings\n\nTo create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.\n\n##### Lists\n\nYou can see examples of ordered and unordered lists above.\n\n###### Code Blocks\n\nThis markdown editor allows for inline-code snippets, like this: `<p>I'm inline</p>`. It also allows for larger code blocks like this:\n\n```\n<main>\n  <h1>This is a larger code block</h1>\n</main>\n```",
		},
	],
	selectedDocument: {
		id: '1',
		title: 'welcome.md',
		createdAt: '04 January 2022',
		content:
			"# Welcome to Markdown\n\nMarkdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.\n\n## How to use this?\n\n1. Write markdown in the markdown editor window\n2. See the rendered markdown in the preview window\n\n### Features\n\n- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists\n- Name and save the document to access again later\n- Choose between Light or Dark mode depending on your preference\n\n> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).\n\n#### Headings\n\nTo create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.\n\n##### Lists\n\nYou can see examples of ordered and unordered lists above.\n\n###### Code Blocks\n\nThis markdown editor allows for inline-code snippets, like this: `<p>I'm inline</p>`. It also allows for larger code blocks like this:\n\n```\n<main>\n  <h1>This is a larger code block</h1>\n</main>\n```",
	},
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
			selectedDocument: state.selectedDocument,
		}
	}

	if (action.type === 'delete') {
		const newDocs = state.documents.filter(
			doc => doc.id !== state.selectedDocument.id
		)

		localStorage.setItem('docs', JSON.stringify(newDocs))
		localStorage.setItem('selectedDoc', JSON.stringify(newDocs[0]))

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
