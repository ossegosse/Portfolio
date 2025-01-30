
export const Header = () => {

    return (
        <header className=" top-0 z-[20] mx-auto w-full items-center border border-gray-500">
            
            <nav className="mx-auto flex max-w-7xl justify-between p-6 lg:px-8">
            <a href="/" className="uppercase text-lg font-bold">Ossian Igelberg</a>
                <div className="flex lg:flex-1"></div>
            <ul className="flex gap-8">
                <li><button className="cursor-pointer text-gray-700 font-semibold hover:text-black hover:underline">About</button></li>
                <li><button className="cursor-pointer text-gray-700 font-semibold hover:text-black hover:underline">Projects</button></li>
                <li><button className="cursor-pointer text-gray-700 font-semibold hover:text-black hover:underline">Contact</button></li>
                
            </ul>
            </nav>
        </header>
    )
}