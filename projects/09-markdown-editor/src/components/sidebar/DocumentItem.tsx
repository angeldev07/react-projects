import { DocumentIcon } from "../icons/icons"

export const DocumentItem = () => {
  return (
    <li className="flex items-center leading-none cursor-pointer group">
        <span className="mr-4">
            <DocumentIcon />
        </span>
        <div className="flex flex-col w-full">
            <span className="text-[#7c8187] font-light text-sm">Creat at</span>
            <span className="text-white text-sm group-hover:text-[#e46643] transition-colors">Welcome.md</span>
        </div>
    </li>
  )
}
