import { useEffect, useState } from "react"

export const useModal = (isOpen) => {
    const [open, setOpen] = useState(isOpen ? isOpen :  false)

    const manageModal = () => setOpen(!open)


    useEffect(() => {
        setOpen(isOpen)

        if(open){
            document.body.style.overflow = 'hidden'
            return
        }

        document.body.style.overflow = 'auto'


    }, [open, isOpen])

    return {
        open,
        manageModal
    }
}