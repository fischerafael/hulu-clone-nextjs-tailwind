import Image from 'next/image'

export const Header = () => {
    return (
        <header className="bg-background">
            <Image
                width={100}
                height={100}
                className="object-contain"
                src="/hulu-logo.svg"
            />
        </header>
    )
}
