import { EnvelopeIcon } from "@heroicons/react/24/solid"

export const Header = () => {

    return (
        <header className="sticky bg-white text-black top-0 z-[20] mx-auto w-full">
            
            <nav className="mx-auto flex items-center justify-between p-2 lg:px-15">
            <a href="/" className="uppercase text-lg font-bold">Ossian Igelberg</a>
                <div className="flex lg:flex-1"></div>
            <ul className="flex gap-8">
                <li className="cursor-pointer font-semibold border border-transparent px-3 py-1 hover:border-black hover:rounded-lg transition-all"><a href="#about">About</a></li>
                <li className="cursor-pointer font-semibold border border-transparent px-3 py-1 hover:border-black hover:rounded-lg transition-all"><a href="#projects">Projects</a></li>
                <li className="flex gap-2 cursor-pointer font-semibold border border-transparent px-3 py-1 hover:border-black hover:rounded-lg transition-all"><a href="#contact">Contact</a><EnvelopeIcon className="size-6"/></li>
            </ul>
            </nav>
        </header>
    )
}


