import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { PoweringGlobalTrade } from '../components/PoweringGlobalTrade';
import { CoreServices } from '../components/CoreServices';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { CtaSection } from '../components/CtaSection';
import { useNavigate } from 'react-router-dom';

interface HomePageProps {
  onOpenQuote: () => void;
  onOpenTracking: (trackingNum?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenQuote,
  onOpenTracking,
}) => {
  const navigate = useNavigate();

  return (
    <main>
      <HeroSection
        onOpenQuote={onOpenQuote}
        onOpenTracking={(num) => {
          if (num) {
            navigate(`/tracking?id=${num}`);
          } else {
            onOpenTracking();
          }
        }}
      />
      <PoweringGlobalTrade />
      <CoreServices
        onOpenQuote={onOpenQuote}
        onSelectService={() => navigate('/services')}
      />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <CtaSection
        onGetStarted={onOpenQuote}
        onTalkToExpert={() => navigate('/contact')}
      />
    </main>
  );
};
