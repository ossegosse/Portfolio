import { HeroButton } from "../ui/Button/HeroButton";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center gap-10 bg-gray-900 min-h-screen py-10"
    >
      <h2 className="uppercase font-bold text-4xl text-red-400 border-r-1 border-l-1 px-2">
        Contact me
      </h2>
      <h3>
        Feel free to contact me and I'll get back to you as soon as possible!
      </h3>

      <form
        action="post"
        className="flex flex-col border rounded px-8 py-8 bg-white text-black gap-12 w-3/6 shadow-lg"
      >
        <div className="flex flex-col">
          <label htmlFor="" className="font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="py-2 px-2 rounded bg-gray-200"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="font-bold mb-2">
            E-mail
          </label>
          <input
            type="email"
            placeholder="Enter your E-mail"
            className="py-2 px-2 rounded bg-gray-200"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="font-bold mb-2">
            Message
          </label>
          <input
            type="text"
            placeholder="Enter your message"
            className="h-20 px-2 rounded bg-gray-200"
          />
        </div>
        <HeroButton>Submit</HeroButton>
      </form>
    </section>
  );
};
