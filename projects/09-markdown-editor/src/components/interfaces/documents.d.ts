export interface Document {
	id: string
	title: string
	content: string
	createdAt: string
}


export interface DocumentContext { 

}

export type action =
	| { payload: []; type: 'delete' }
	| { payload: []; type: 'save' }
	| { payload: []; type: 'add' }
