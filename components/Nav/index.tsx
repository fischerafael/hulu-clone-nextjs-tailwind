import { requests } from '../../utils/requests'

export const Nav = () => {
    return (
        <nav>
            <div>
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h1>{title}</h1>
                ))}
            </div>
        </nav>
    )
}
