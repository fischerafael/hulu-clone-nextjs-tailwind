import { categories } from '../../utils/requests'

export const Nav = () => {
    return (
        <nav className="bg-background p-2">
            <div className="w-500 gap-10 flex flex-row no-scrollbar justify-start overflow-x-scroll overflow-y-hidden overscroll-contain">
                {categories.map((category, index) => (
                    <NavLink key={index} category={category} />
                ))}
            </div>
        </nav>
    )
}

const NavLink = ({ category }) => {
    return (
        <h1
            className="text-white cursor-pointer transform hover:scale-110 hover:text-gray-600 duration-200 active:text-red-500"
            key={category.title}
        >
            {category.title}
        </h1>
    )
}
