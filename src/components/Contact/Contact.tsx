import emailjs from "emailjs-com";
import { ArrowRight } from "lucide-react";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export const Contact = () => {
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        alert("Message Sent Successfully");
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong!");
      }
    );

    form.reset();
  };

  return (
    <section
      id="contact"
      className="min-h-[80vh] flex flex-col items-center gap-5 bg-secondary py-12 px-6 sm:px-8"
    >
      <h2 className="uppercase font-bold text-4xl text-text-secondary px-2">
        Contact
      </h2>
      <h3 className="text-text-secondary text-sm sm:text-base md:text-lg lg:text-xl mb-4 font-bold">
        Feel free to contact me and I'll get back to you as soon as possible!
      </h3>

      <form
        action="post"
        onSubmit={handleOnSubmit}
        className="flex flex-col rounded-lg px-8 py-8 bg-white text-text-secondary gap-8 sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2 shadow-lg"
      >
        {/* Name Input */}
        <div className="flex flex-col">
          <label htmlFor="" className="font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="from_name"
            placeholder="Enter your name"
            className="py-2 px-3 rounded bg-gray-200 text-left focus:outline-none"
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col">
          <label htmlFor="" className="font-bold mb-2">
            E-mail
          </label>
          <input
            type="email"
            name="from_email"
            placeholder="Enter your E-mail"
            className="py-2 px-3 rounded bg-gray-200 text-left focus:outline-none"
          />
        </div>

        {/* Message Input */}
        <div className="flex flex-col">
          <label htmlFor="" className="font-bold mb-2">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows={4}
            className="px-3 py-2 rounded bg-gray-200 text-left focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="flex gap-5 justify-center">
          <button
            type="submit"
            className="flex gap-2 px-4 font-bold py-3 bg-tertiary text-white rounded-full shadow-lg hover:bg-gray-500 focus:outline-none cursor-pointer transform transition-all hover:scale-105"
          >
            Send
            <ArrowRight />
          </button>
        </div>
      </form>
    </section>
  );
};
