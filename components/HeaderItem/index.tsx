export const HeaderItem = ({ title, Icon }) => {
    return (
        <div className="group flex flex-col items-center cursor-pointer justify-center w-12 sm:w-16">
            <Icon className="text-white h-8 group-hover:text-gray-500" />
            <span className="text-white opacity-0 group-hover:opacity-100 group-hover:text-gray-500 tracking-widest">
                {title}
            </span>
        </div>
    )
}
