import Image from 'next/image'
import { HeaderItem } from '../HeaderItem'
import {
    HomeIcon,
    LightningBoltIcon,
    BadgeCheckIcon,
    CollectionIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'

export const Header = () => {
    return (
        <header className="bg-background flex flex-col center items-center md:flex-row md:justify-between p-2 h-30">
            <nav className="flex items-center content-center">
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                <HeaderItem title="ACCOUNT" Icon={UserIcon} />
            </nav>
            <section className="pr-4 cursor-pointer">
                <Image
                    width={100}
                    height={100}
                    className="object-contain"
                    src="/hulu-logo.svg"
                />
            </section>
        </header>
    )
}
