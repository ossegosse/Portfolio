
const Techstack = [
    "React", 
    "React Native",
    "Javascript",
    "Typescript",
    "Node.js",
    "TailwindCSS",
    "Figma",
    "CSS/SCSS",
    "HTML",

    
]

export const StackCard = () => {
    return (
        <div className="flex flex-wrap gap-6 justify-center">
            {Techstack.map((tech, index) => (
                <div key={index} className="px-4 py-2 bg-gray-800 text-white text-bold font-medium rounded-lg shadow-md transform transition-all hover:scale-105">
                    {tech}
                </div>
            ))}

        </div>
    )
}