import { ReactElement } from 'react';
import Head from 'next/head';

import { Navbar } from '@/components/Navbar';

interface Props {
  children: ReactElement;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Next Initial Demo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>{children}</main>
    </>
  );
};
