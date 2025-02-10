import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import { HeroButton } from "../ui/Button/HeroButton";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/github";
import "react-social-icons/linkedin";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gray-950 text-white text-center flex flex-col md:flex-row gap-8 justify-center items-center">
      <img
        src="/selfie.png"
        alt="picture"
        className="h-96 w-96 object-cover rounded-full border-4 shadow-lg"
      />
      <div className="flex flex-col lg:w-100 items-center">
        <h1 className=" md:text-5xl font-bold mb-4">Hello! I'm Ossian</h1>
        <h2 className="text-lg md:text-3xl mb-6">Frontend Developer</h2>
        <h3 className="text-lg md:text-1xl mb-6">
          I have a passion for all things frontend and design while also trying
          to develop my backend skills, to someday be proud to call myself a
          fullstack developer
        </h3>
        <div className="flex gap-4">
          <a href="#projects">
            <HeroButton>
              Projects
              <ArrowDownCircleIcon className="size-6" />
            </HeroButton>
          </a>
          
            <SocialIcon
              className="size-1 transform transition-all hover:scale-115"
              url="https://www.linkedin.com/in/ossian-igelberg/"
            />
          
        </div>
      </div>
    </section>
  );
};
