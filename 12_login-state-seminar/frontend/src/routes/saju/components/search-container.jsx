import { useState } from 'react';
import { SajuSearchInput } from './search-input';
import SajuSearchLoading from './search-loading';
import SajuSearchOutput from './search-output';
import sajuDummyRequest from './saju-dummy-request.jsx';

export const SajuSearchContainer = () => {
  const [step, setStep] = useState(0);

  function onSubmit() {
    setStep(1);
    sajuDummyRequest().then(() => {
      setStep(2);
    });
  }

  return (
    <div className="flex w-[800px] h-[670px] bg-white rounded-2xl shadow-lg flex-col justify-start items-start">
      {step === 0 && <SajuSearchInput onSubmit={onSubmit} />}
      {step === 1 && <SajuSearchLoading />}
      {step === 2 && <SajuSearchOutput outputs={tempOutputs} />}
    </div>
  );
};

const tempOutputs = {
  name: '닉네임',
  headline: '주도적이고 철저한 계획이 필요한 날, 변화에 유연하게 대처하세요!',
  content:
    '매사에 있어서 주도면밀한 태도를 가질 필요가 있는 날이 될 것으로 보입니다. 처음에는 쉽게 뜻대로 잘 풀려 나갔던 일들이 후반으로 갈수록 어려워지는 날입니다. \
    일관된 태도를 견지해야 합니다. 그래야만 손해를 줄이고 이윤을 볼 수 있겠습니다. 아주 시급한 사건만 아니라면 여유를 가지고 사안을 분석해보세요. \
    가능한 한 많은 변인을 찾아보고 그것에 대해 미리 대책을 세워 놓고 있는 것이 해답을 빨리 찾을 수 있는 지름길이 아닐까 싶습니다.',
};
