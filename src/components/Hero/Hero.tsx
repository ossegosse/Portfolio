import { HeroButton } from "../ui/Button/HeroButton";

export const Hero = () => {
  return (
    <section className="min-h-screen text-white text-center flex gap-8 justify-center items-center">
      <img
        src="/selfie.png"
        alt="picture"
        className="h-96 w-96 object-cover rounded-sm"
      />
      <div className="flex flex-col lg:w-100 items-center">
        <h1 className=" md:text-5xl font-bold mb-4">Hello! I'm Ossian</h1>
        <h2 className="text-lg md:text-3xl mb-6">Software engineer</h2>
        <div className="flex gap-4">
          <HeroButton>
            <a>Projects</a>
          </HeroButton>
          <HeroButton>
            <a>Contact</a>
          </HeroButton>
        </div>
      </div>
    </section>
  );
};
