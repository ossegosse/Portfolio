import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'


export const Footer = () => {
  return (
    <footer className=" flex gap-3 justify-center py-4">
      <section className="flex gap-3">
      <SocialIcon className='size-1' network="github" url=""/>
      <SocialIcon className='size-1' url="https://www.linkedin.com/in/ossian-igelberg/"  />
      </section>
    </footer>
  );
};

