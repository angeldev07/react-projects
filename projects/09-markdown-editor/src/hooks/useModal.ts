import { useState } from 'react'
export const useModal = () => {
	const [openModal, setOpenModal] = useState(false)

    const handleClose = (e:React.MouseEvent<HTMLElement, MouseEvent>) => {
        
        if(e.target === e.currentTarget)
            setOpenModal(false)
    }


    const handleModal = (value: boolean) => setOpenModal(value)

	return {
		openModal,
        handleClose,
        handleModal
	}
}
