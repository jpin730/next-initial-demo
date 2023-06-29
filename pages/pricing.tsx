import { MainLayout } from '@/components/layouts/MainLayout';
import { DarkLayout } from '@/components/layouts/DarkLayout';
import { NextPageWithLayout } from './_app';

const PricingPage: NextPageWithLayout = () => {
  return <h1>Pricing Page</h1>;
};

PricingPage.getLayout = (page) => {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default PricingPage;
