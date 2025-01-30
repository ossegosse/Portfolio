import { ArrowDownCircleIcon } from '@heroicons/react/24/solid'

export const HeroButton = () => {
    return (
        <button className="flex justify-center gap-3 px-8 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none cursor-pointer"><p>About me </p><ArrowDownCircleIcon className="size-6"/></button>
    )
}

