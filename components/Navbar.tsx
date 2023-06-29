import { FC } from 'react';
import { ActiveLink } from './ActiveLink';

import styles from './Navbar.module.css';

interface NavItem {
  text: string;
  href: string;
}

export const Navbar: FC = () => {
  const activeClass = `${styles.active}`;
  const className = 'text-white text-decoration-none py-3 px-4';
  const navItems: NavItem[] = [
    {
      href: '/',
      text: 'Home',
    },
    {
      href: '/pricing',
      text: 'Pricing',
    },
    {
      href: '/contact',
      text: 'Contact',
    },
    {
      href: '/about',
      text: 'About',
    },
  ];

  return (
    <div className={styles.navbar}>
      <nav className="bg-primary">
        <div className="container d-flex">
          {navItems.map((item) => (
            <ActiveLink
              key={item.href}
              href={item.href}
              text={item.text}
              className={className}
              activeClass={activeClass}
            />
          ))}
        </div>
      </nav>
    </div>
  );
};
