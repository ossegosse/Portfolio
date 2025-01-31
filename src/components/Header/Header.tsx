import { EnvelopeIcon } from "@heroicons/react/24/solid"

export const Header = () => {

    return (
        <header className="sticky bg-black top-0 z-[20] mx-auto w-full items-center">
            
            <nav className="mx-auto flex max-w-7xl justify-between p-4 lg:px-8">
            <a href="/" className="uppercase text-lg font-bold">Ossian Igelberg</a>
                <div className="flex lg:flex-1"></div>
            <ul className="flex gap-8">
                <li className="cursor-pointer font-semibold border border-transparent px-3 py-1 hover:border-white hover:rounded-lg transition-all"><a href="#about">About</a></li>
                <li className="cursor-pointer font-semibold border border-transparent px-3 py-1 hover:border-white hover:rounded-lg transition-all"><a href="#projects">Projects</a></li>
                <li className="flex gap-2 cursor-pointer font-semibold border border-transparent px-3 py-1 hover:border-white hover:rounded-lg transition-all"><a href="#contact">Contact</a><EnvelopeIcon className="size-6"/></li>
            </ul>
            </nav>
        </header>
    )
}


