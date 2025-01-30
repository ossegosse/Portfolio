import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/github'


export const Footer = () => {
  return (
    <footer className=" py-4">
      <section>
      <SocialIcon network="github" />
      <SocialIcon network='linkedin' url="https://www.linkedin.com/in/ossian-igelberg/" />
      </section>
    </footer>
  );
};

