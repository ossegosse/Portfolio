import { StackCard } from "../StackCard/StackCard";
import { HeroButton } from "../ui/Button/HeroButton";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center gap-10 bg-secondary "
    >
      <h2 className="text-4xl font-bold text-center uppercase text-text-secondary px-2">
        About me
      </h2>

      <div className="flex flex-col gap-6 md:flex-row justify-center lg:px-20 sm:px-5">
        <section className=" lg:py-6 px-12 flex flex-col gap-8 lg:max-w-2/3 bg-white text-black items-center rounded">
          <h3 className="text-3xl">Who I am</h3>
          <p className="leading-relaxed lg:text-lg mb-8">
            I am a Front-end Developer soon to graduate from a higher vocational
            education where I mostly studied HTML, CSS, Javascript, Typescript
            and with a focus on learning React. I also touched on other
            technologies such as Node.js, Express, MongoDB and SQL. I love the design part of web development, watching my creation take form.
            <br />
            <br />
            In my free time I like to work on my own projects, trying to expand
            on my knowledge and skills. I am always looking for new challenges
            and opportunities to learn and grow. I also like to spend my free
            time playing videogames, and read fantasy novels. Im a bit of a
            geek.
            <br />
            <br />
            Be sure to send me and email if you want to work together!
          </p>
          <a href="#contact">
            <HeroButton>
              Contact me
              <EnvelopeIcon className="size-7" />
            </HeroButton>
          </a>
        </section>
        <section className="py-6 flex flex-col gap-5 bg-tertiary items-center rounded">
          <h3 className="text-3xl">My skills</h3>
          <StackCard />
        </section>
      </div>
    </section>
  );
};
