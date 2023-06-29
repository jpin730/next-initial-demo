import { MainLayout } from '@/components/layouts/MainLayout';
import { NextPageWithLayout } from './_app';
import { LightLayout } from '@/components/layouts/LightLayout';

const HomePage: NextPageWithLayout = () => {
  return <h1>Home Page</h1>;
};

HomePage.getLayout = (page) => (
  <MainLayout>
    <LightLayout>{page}</LightLayout>
  </MainLayout>
);

export default HomePage;
