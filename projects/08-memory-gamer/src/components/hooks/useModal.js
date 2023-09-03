import { useEffect, useState } from "react"

export const useModal = () => {
    const [open, setOpen] = useState(false)

    const manageModal = () => setOpen(!open)


    useEffect(() => {

        if(open){
            document.body.style.overflow = 'hidden'
            return
        }

        document.body.style.overflow = 'auto'


    }, [open])

    return {
        open,
        manageModal
    }
}