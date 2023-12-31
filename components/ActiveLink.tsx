import { useRouter } from 'next/router';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  activeClass?: string;
  className?: string;
  href: string;
  text: string;
}

export const ActiveLink: FC<Props> = ({
  activeClass = 'active',
  className = '',
  href,
  text,
}) => {
  const { asPath } = useRouter();

  const classList = className.split(' ');

  asPath === href && classList.push(activeClass);

  return (
    <Link href={href} className={classList.join(' ')}>
      {text}
    </Link>
  );
};
