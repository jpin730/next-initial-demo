import { MainLayout } from '@/components/layouts/MainLayout';
import { NextPageWithLayout } from './_app';
import { DarkLayout } from '@/components/layouts/DarkLayout';

const PricingPage: NextPageWithLayout = () => {
  return <h1>Pricing Page</h1>;
};

PricingPage.getLayout = (page) => (
  <MainLayout>
    <DarkLayout>{page}</DarkLayout>
  </MainLayout>
);

export default PricingPage;
