

type HeroButtonProps = {
    children: React.ReactNode;
}

export const HeroButton: React.FC<HeroButtonProps> = ({ children }) => {
    return (
        <button className="flex justify-center gap-3 px-8 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none cursor-pointer">
            {children}
            </button>
    )
}

