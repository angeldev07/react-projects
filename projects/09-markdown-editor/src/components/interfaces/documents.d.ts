export interface Document {
	id: string
	title: string
	content: string
	createdAt: string
}

export type action =
	| { type: 'add' }
	| { type: 'delete' }
	| { type: 'updateNameDoc', payload: {title: string} }
	| { type: 'updateMarkdown', payload: {content: string} }
	| { type: 'select', payload: {id: string} }
	| { type: 'save' }
