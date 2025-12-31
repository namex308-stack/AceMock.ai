import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import Features from '~/components/widgets/Features';
import FAQs2 from '~/components/widgets/FAQs2';
import Pricing from '~/components/widgets/Pricing';
import CallToAction2 from '~/components/widgets/CallToAction2';
import {
  callToAction2Home,
  faqs2Home,
  featuresHome,
  heroHome,
  pricingHome,
} from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero {...heroHome} />
      <Features {...featuresHome} />
      <Pricing {...pricingHome} />
      <FAQs2 {...faqs2Home} />
      <CallToAction2 {...callToAction2Home} />
    </>
  );
}
