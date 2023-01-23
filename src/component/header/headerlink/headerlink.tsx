import { ReactNode } from 'react';
import './headerlink.css';

type headerType = { children: ReactNode; url?: string };
const HeaderLink = ({ children, url }: headerType) => {
  return (
    <a className='HeaderLink mr-2 ml-2' href={url}>
      {children}
    </a>
  );
};

export { HeaderLink };
