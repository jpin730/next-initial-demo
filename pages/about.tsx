import { MainLayout } from '@/components/layouts/MainLayout';
import { DarkLayout } from '../components/layouts/DarkLayout';
import { NextPageWithLayout } from './_app';

const AboutPage: NextPageWithLayout = () => {
  return <h1>About Page</h1>;
};

AboutPage.getLayout = (page) => (
  <MainLayout>
    <DarkLayout>{page}</DarkLayout>
  </MainLayout>
);

export default AboutPage;
