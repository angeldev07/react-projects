import { createContext } from 'react'
import { useDocuments, useDocumentsI } from '../hooks/useDocuments'

interface Props {
	children: JSX.Element
}

//create the context
export const DocumentsContext = createContext<useDocumentsI>(
	{} as useDocumentsI
)

//create the provider of context

export const DocumentsProvider: React.FC<Props> = ({ children }) => {
	const { documents, selectedDocument, handleSomething, handleAddDoc, handleDeletedDoc, handleSelectDoc, updateNameDoc, saveDoc, updateMarkdown } = useDocuments()
	return (
		<DocumentsContext.Provider
			value={{ documents, selectedDocument, handleSomething, handleAddDoc,handleDeletedDoc, handleSelectDoc, updateNameDoc, saveDoc, updateMarkdown }}
		>
			{children}
		</DocumentsContext.Provider>
	)
}
