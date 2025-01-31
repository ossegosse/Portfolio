import { StackCard } from "../StackCard/StackCard";
import { HeroButton } from "../ui/Button/HeroButton";
import { EnvelopeIcon } from "@heroicons/react/24/solid"


export const About = () => {
  return (
    <section id="about" className="flex flex-col justify-center items-center gap-10 bg-gray-900 min-h-screen">
      <h2
        className="uppercase font-bold text-4xl text-red-400 border-r-1 border-l-1 px-2"
      >
        About me
      </h2>

      <div className="flex flex-col md:flex-row justify-center lg:px-20 sm:px-5">
        <section className=" lg:py-6 px-12 flex flex-col gap-8 lg:max-w-1/2 bg-white text-black items-center">
          <h3 className="text-3xl">Who I am</h3>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius a
            quam quod expedita ducimus nam vitae voluptatum totam ipsa pariatur
            dicta architecto, optio ut dolorem. Perspiciatis nostrum earum
            eveniet hic.
            <br /><br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            dicta delectus possimus porro accusantium dolor quidem magnam
            ratione asperiores praesentium similique amet nihil corporis
            molestias quod doloremque, qui nesciunt ipsa.
          </p>
          <a href="#contact">
          <HeroButton>
            Contact me
            <EnvelopeIcon className="size-7"/>
          </HeroButton>
          </a>
        </section>
        <section className="px-12 py-6 flex flex-col gap-5 bg-gray-200 text-black items-center">
          <h3 className="text-3xl">My skills</h3>
          <StackCard />
        </section>
      </div>
    </section>
  );
};
