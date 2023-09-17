
interface Props {
    children: JSX.Element,
    handleClose: (e:React.MouseEvent<HTMLElement, MouseEvent>) => void,
    open: boolean
}

export const Modal = ({children, handleClose, open}: Props) => {

  return (
    <div onClick={handleClose} className={`bg-[#ffffff63] absolute z-[99999] w-full h-screen left-0 top-0 flex items-center justify-center transition-transform ${!open ? 'scale-[0]': 'scale-[1]'}`}>
        <section  className="w-11/12 max-w-[350px] py-6 p-5 bg-[#151619] rounded-lg">
            {children}
        </section>
    </div>
  )
}
