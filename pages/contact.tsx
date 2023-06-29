import { MainLayout } from '@/components/layouts/MainLayout';
import { LightLayout } from '@/components/layouts/LightLayout';
import { NextPageWithLayout } from './_app';

const ContactPage: NextPageWithLayout = () => {
  return <h1>Contact Page</h1>;
};

ContactPage.getLayout = (page) => {
  return (
    <MainLayout>
      <LightLayout>{page}</LightLayout>
    </MainLayout>
  );
};

export default ContactPage;
