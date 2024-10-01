import loadingImg from '../../../assets/images/loading-temp.png';

const SajuSearchLoading = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-[60px]">
      <div className="text-neutral-800 text-[36px] font-extrabold nanum-extra-bold">
        사주 결과 분석 중
      </div>
      <LoadingLottie />
    </div>
  );
};

export default SajuSearchLoading;

const LoadingLottie = () => {
  return <img src={loadingImg} alt="loading" />;
};
