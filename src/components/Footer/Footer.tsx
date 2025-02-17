import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'


export const Footer = () => {
  return (
    <footer className=" flex  bg-primary">
      <section className="flex gap-2 justify-center items-center w-full">
      <SocialIcon className='transform scale-75' network="github" url=""/>
      <SocialIcon className='transform scale-75' url="https://www.linkedin.com/in/ossian-igelberg/"  />
      </section>
    </footer>
  );
};

