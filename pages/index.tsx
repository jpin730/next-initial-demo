import { MainLayout } from '@/components/layouts/MainLayout';
import { LightLayout } from '@/components/layouts/LightLayout';
import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = () => {
  return <h1>Home Page</h1>;
};

HomePage.getLayout = (page) => {
  return (
    <MainLayout>
      <LightLayout>{page}</LightLayout>
    </MainLayout>
  );
};

export default HomePage;
