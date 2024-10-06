import { Button } from 'components/button';
import { SectionLayout } from './section-layout';

export const MainSection = () => {
  return (
    <SectionLayout>
      <div className="flex flex-col w-full gap-8 items-start">
        <h1 className="text-[64px] leading-normal whitespace-pre-wrap text-left nanum-extra-bold">
          <span>멋쟁이</span> <s className="text-gray-500">사자</s>
          {'\n'}
          <span>사주처럼</span>
        </h1>
        <p className="text-lg text-left">
          오늘의 사주 운세를 확인하고, 친구에게 공유하자!
        </p>
        <a href="/saju">
          <Button>멋사주 시작하기</Button>
        </a>
      </div>
      <div className="absolute -bottom-10 right-[20vw] w-[341px] h-[329px]">
        <img
          src="/images/snulion.png"
          className="absolute z-50 object-contain"
          alt="Main Illustration"
        />
        <img
          src="/images/card1.png"
          className="absolute scale-[60%] left-[77px] -translate-x-[75%] -translate-y-[25%] -rotate-45 object-contain"
          alt="Card1 Illustration"
        />
        <img
          src="/images/card2.png"
          className="absolute scale-[60%] left-[77px] -translate-x-[30%] -translate-y-[45%] -rotate-[15deg] object-contain"
          alt="Card2 Illustration"
        />
        <img
          src="/images/card3.png"
          className="absolute scale-[60%] left-[77px] translate-x-[30%] -translate-y-[45%] rotate-[15deg] object-contain"
          alt="Card3 Illustration"
        />
        <img
          src="/images/card4.png"
          className="absolute scale-[60%] left-[77px] translate-x-[75%] -translate-y-[25%] rotate-45 object-contain"
          alt="Card4 Illustration"
        />
      </div>
    </SectionLayout>
  );
};
