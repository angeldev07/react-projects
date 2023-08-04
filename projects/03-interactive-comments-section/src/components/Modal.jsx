
export const Modal = ({
    title,
    description,
    onConfirm,
    onCancel
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#00000034] z-[9999] flex items-center justify-center overflow-y-hidden">
        <section className="bg-white w-[90%] max-w-[337.5px] p-6 rounded-md">
            <h2 className="text-[#324152] font-bold text-xl ">{title}</h2>
            <p className="text-[#67727e] py-4">{description}</p>
            <div className="flex justify-between items-center text-white">
                <button className="bg-[#67727e] rounded-md py-2 px-4 uppercase" onClick={onCancel}>no, cancel</button>
                <button className="bg-[#ed6468] rounded-md py-2 px-4 uppercase" onClick={onConfirm}>yes, delete</button>
            </div>
        </section>
    </div>
  )
}
