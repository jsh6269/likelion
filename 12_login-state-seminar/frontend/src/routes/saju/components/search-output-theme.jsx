import { useState } from 'react';
import { OutputCard } from './output-card';
import { Button } from '../../../components/button';
import { OutputCardBack } from './output-card-back';
import { SajuPurchaseModal } from '../../../components/modals/saju-purchase-modal';
import { SajuShareModal } from '../../../components/modals/share-modal';
import locked from '../../../assets/images/locked.png';

export const SearchOutputTheme = () => {
  const OutputCardData = [
    {
      title: '건강운',
      image: '/images/health.png',
      shadow: 'rgba(136, 73, 0, 0.30)',
      msg: '오늘은 건강 면에서 무난한 하루가 될 것입니다. 특별한 건강 문제나 불편함 없이 일상을 보낼 수 있을 것입니다. 그러나 긴장이나 스트레스를 피하는 것이 중요합니다. 식이조절과 규칙적인 운동을 통해 건강을 유지하는 데 신경 써야 합니다.',
    },
    {
      title: '취업/학업운',
      image: '/images/career.png',
      shadow: 'rgba(0, 15, 96, 0.30)',
      msg: '취업이나 학업에서는 오늘 새로운 기회가 찾아올 수 있는 긍정적인 날입니다. 노력이 보상받을 수 있는 시기이니 성실하게 임하는 것이 중요합니다. 특히 의견을 주고 받는 상황에서 자신의 의견을 확실히 표현하는 것이 좋습니다.',
    },
    {
      title: '연애운',
      image: '/images/love.png',
      shadow: 'rgba(225, 0, 0, 0.30)',
      msg: '연애 운세는 오늘 조금 불안정할 수 있습니다. 상대방과의 의사소통에 어려움이 있을 수 있으니 이해하려는 노력이 필요합니다. 감정의 변화에 따라 변동성이 있을 수 있으니 서로의 감정을 주고 받는 것에 주의를 기울이세요. ',
    },
    {
      title: '재물운',
      image: '/images/wealth.png',
      shadow: 'rgba(103, 0, 152, 0.30)',
      msg: '재물 운세는 오늘 자산 관리에 대한 새로운 아이디어나 기회가 찾아올 수 있는 날입니다. 금융 상품이나 투자에 관심을 가지고 다양한 정보를 모으는 것이 좋습니다. 소비와 절약에 대한 균형을 유지하는 것이 중요합니다.',
    },
  ];

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const openPurchaseModal = () => {
    setIsPurchaseModalOpen(true);
  };

  const openShareModal = () => {
    setIsShareModalOpen(true);
  };

  return (
    <div className="flex flex-col justify-center items-center p-20 gap-20">
      <h1 className="text-[40px] font-extrabold leading-[48px] nanum-extra-bold mt-2">
        테마별 운세 보기
      </h1>
      {isUnlocked ? (
        <div className="relative w-fit grid grid-cols-2 gap-16 p-4 justify-items-center">
          {OutputCardData.map((data, index) => (
            <OutputCard key={index} data={data} isUnlocked={isUnlocked} />
          ))}
        </div>
      ) : (
        <div className="relative" onClick={openPurchaseModal}>
          <div className="relative w-fit grid grid-cols-2 gap-16 p-4 justify-items-center">
            {OutputCardData.map((data, index) => (
              <div className={'relative w-[500px] h-[370px] cursor-pointer'}>
                <OutputCardBack
                  key={index}
                  data={data}
                  isUnlocked={isUnlocked}
                />
              </div>
            ))}
          </div>
          <img
            src={locked}
            alt="locked"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[228px] h-[228px]"
          />
        </div>
      )}
      {isPurchaseModalOpen && (
        <SajuPurchaseModal setIsModalOpen={setIsPurchaseModalOpen} />
      )}
      {isUnlocked && (
        <>
          <Button
            className={
              'bg-primary-500 text-white font-bold rounded-[10px] mt-4'
            }
            onButtonClick={openShareModal}
          >
            오늘 운세 공유하기
          </Button>
          {isShareModalOpen && (
            <SajuShareModal setIsModalOpen={setIsShareModalOpen} />
          )}
        </>
      )}
    </div>
  );
};
