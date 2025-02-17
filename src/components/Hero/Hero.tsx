import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import { HeroButton } from "../ui/Button/HeroButton";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/github";
import "react-social-icons/linkedin";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-primary text-text-primary text-center flex flex-col lg:flex-row gap-8 sm:gap-6 md:gap-8 justify-center items-center">
      
      <img
        src="/selfie.png"
        alt="picture"
        className="w-64 h-64 md:w-64 md:h-64 lg:w-96 lg:h-96 object-cover rounded-full border-4 shadow-lg"
      />
      
      <div className="flex flex-col sm:w-3/4 md:w-2/3 lg:w-1/2 items-center gap-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ">Hello! I'm Ossian</h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">Frontend Developer</h2>
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl mb-4">
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
