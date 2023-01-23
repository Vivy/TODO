import { HeaderLink } from './headerlink/headerlink';
import './style/header.css';

export const Header = () => {
  return (
    <header className='Header'>
      <div className='HeaderTitle'>Todo App</div>
      <nav className='m-auto'>
        <HeaderLink>Home</HeaderLink>
        <HeaderLink>About</HeaderLink>
        <HeaderLink>Stats</HeaderLink>
      </nav>
    </header>
  );
};
