import { MainSection } from 'routes/main/components/main-section';
import { SajuSection } from 'routes/main/components/saju-section';
import { ShareSection } from 'routes/main/components/share-section';
import { FAQSection } from 'routes/main/components/faq-section';
// Step 1
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../../../redux/dark-slice';
import { FiSun } from 'react-icons/fi';
import { FiMoon } from 'react-icons/fi';

const MainPage = () => {
  const darkMode = useSelector((state) => state.darkMode.value);
  const dispatch = useDispatch();

  return (
    <div
      className={`flex flex-col w-full items-center bg-gradient-to-b ${darkMode ? 'from-neutral-900 to-neutral-800' : 'from-neutral-400 to-neutral-200'} ${darkMode ? 'dark' : ''}`}
    >
      <div className="w-full flex justify-end pt-3 px-3">
        <button
          onClick={() => dispatch(toggleDarkMode())}
          className="p-3 bg-primary text-white rounded"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>
      <MainSection />
      <SajuSection />
      <ShareSection />
      <FAQSection />
    </div>
  );
};

export default MainPage;
