import { MainSection } from 'routes/main/components/main-section';
import { SajuSection } from 'routes/main/components/saju-section';
import { ShareSection } from 'routes/main/components/share-section';
import { FAQSection } from 'routes/main/components/faq-section';

const MainPage = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-gradient-to-b from-neutral-400 to-neutral-200">
      <MainSection />
      <SajuSection />
      <ShareSection />
      <FAQSection />
    </div>
  );
};

export default MainPage;
