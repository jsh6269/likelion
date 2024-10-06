import React, { useState } from 'react';
import { ProfileImageModal } from '../../../components/modals/profile-image-modal';
import { ProfileImageEdit } from '../components/profile-image-edit';
import { TextField } from '../../../components/textfield';
import { Button } from '../../../components/button';
import { userInfoUpdate } from 'apis/api';
import { useDispatch } from 'react-redux';
import { setUserProfile } from '../../../redux/user-slice';

const SetProfilePage = () => {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileImg, setProfileImg] = useState(getRandomNumber());
  const [nickname, setNickname] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [error, setError] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleNicknameChange = (e) => {
    if (e.target.value.length > 10) {
      setError('*10자 이내의 한글, 숫자, 영문자를 입력해주세요.');
      setIsButtonEnabled(false);
    } else {
      setError(null);
      setNickname(e.target.value);
      if (e.target.value.length > 0) {
        setIsButtonEnabled(true);
      }
    }
  };

  const handleUserInfoUpdate = async () => {
    const res = await userInfoUpdate({
      nickname: nickname,
      profilepic_id: profileImg,
    });
    if (res === null) {
      setError('*닉네임 중복을 확인해주세요.');
    } else {
      dispatch(setUserProfile(res));
      window.location.href = '/';
    }
  };

  return (
    <div className={`w-screen h-screen flex justify-center items-center`}>
      <div className="w-[450px] h-[446px] flex flex-col justify-center items-center gap-12">
        <h3 className="text-4xl font-extrabold text-neutral-800 nanum-extra-bold">
          프로필 설정
        </h3>
        <ProfileImageEdit openModal={openModal} profileImg={profileImg} />
        <TextField
          placeholder={'닉네임 (10자 이내)'}
          onChange={handleNicknameChange}
          value={nickname}
          error={error}
        />
        <Button
          variant={isButtonEnabled ? 'primary' : 'disabled'}
          className="w-[450px] h-[58px]"
          onButtonClick={handleUserInfoUpdate}
        >
          멋사주 시작하기
        </Button>
        <div className="w-screen h-screen flex justify-center items-center">
          {isModalOpen && (
            <ProfileImageModal
              setIsModalOpen={setIsModalOpen}
              profileImg={profileImg}
              setProfileImg={setProfileImg}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SetProfilePage;
