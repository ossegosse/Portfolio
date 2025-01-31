import { StackCard } from "../StackCard/StackCard";
import { HeroButton } from "../ui/Button/HeroButton";


export const About = () => {
  return (
    <section id="about" className="flex flex-col justify-center items-center gap-10 bg-gray-900 min-h-screen">
      <h2
        id="#about"
        className="uppercase font-bold text-4xl text-red-400 border-r-1 border-l-1 px-2"
      >
        About me
      </h2>

      <div className="flex flex-col md:flex-row justify-center max-w-">
        <section className="px-12 py-6 flex flex-col gap-4">
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
          <HeroButton>
            <a href="#contact">Contact</a>
          </HeroButton>
        </section>
        <section className="px-12 py-6 flex flex-col gap-1">
          <h3 className="text-3xl">My skills</h3>
          <StackCard />
        </section>
      </div>
    </section>
  );
};
