import React, { useState, useEffect } from 'react';
import { Button } from '../../../../components/button';
import { TextField } from '../../../../components/textfield';
import { Divider } from '../divider';
import { KakaoButton } from '../kakao-button';
import { signUp, checkDuplicateUser } from '../../../../apis/api';
import { setLoginState, setUserProfile } from '../../../../redux/user-slice';
import { useDispatch } from 'react-redux';

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    id: '',
    password: '',
    passwordConfirm: '',
  });

  const [errors, setErrors] = useState({
    idError: null,
    passwordError: null,
    passwordConfirmError: null,
  });

  const [idStatus, setIdStatus] = useState({
    checked: false,
    confirmText: null,
  });

  useEffect(() => {
    if (formState.password.length >= 8) {
      setErrors((prev) => ({ ...prev, passwordError: null }));
    }
  }, [formState.password]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'id') {
      setIdStatus({ checked: false, confirmText: null });
      setErrors((prev) => ({ ...prev, idError: null }));
    }

    if (name === 'passwordConfirm') {
      setErrors((prev) => ({ ...prev, passwordConfirmError: null }));
    }
  };

  const handelCheckId = async () => {
    if (idStatus.checked || formState.id === '') return;

    const res = await checkDuplicateUser({ username: formState.id });
    if (res != null) {
      setIdStatus({ checked: true, confirmText: '*사용 가능한 아이디입니다.' });
      setErrors((prev) => ({ ...prev, idError: null }));
    } else {
      setIdStatus({ checked: false, confirmText: null });
      setErrors((prev) => ({
        ...prev,
        idError: '*이미 존재하는 아이디입니다.',
      }));
    }
  };

  const handleSignUp = async () => {
    if (!idStatus.checked) {
      setErrors((prev) => ({
        ...prev,
        idError: '*아이디 중복확인을 해주세요.',
      }));
      return;
    }
    if (formState.password.length < 8) {
      setErrors((prev) => ({
        ...prev,
        passwordError: '*8자 이상의 숫자, 영문자, 특수문자를 입력해주세요.',
      }));
      return;
    }
    if (
      formState.password !== formState.passwordConfirm ||
      formState.password === ''
    ) {
      setErrors((prev) => ({
        ...prev,
        passwordConfirmError: '*비밀번호가 일치하지 않습니다.',
      }));
      return;
    }

    const resData = await signUp({
      username: formState.id,
      password: formState.password,
      nickname: null,
      profilepic_id: null,
    });
    if (resData === null) {
      alert('회원가입에 실패했습니다.');
      return;
    }
    dispatch(setLoginState(true));
    dispatch(setUserProfile(resData));
    if (resData.nickname === null || resData.profilepic_id === null) {
      window.location.href = '/set-profile';
    } else {
      window.location.href = '/';
    }
  };

  const idCheckButtonVariant = idStatus.checked ? 'disabled' : 'primary';
  const buttonVariant =
    idStatus.checked &&
    formState.password.length > 0 &&
    formState.passwordConfirm.length > 0
      ? 'primary'
      : 'disabled';

  return (
    <div className="self-stretch w-[450px] flex flex-col justify-start items-center gap-5">
      <div className="w-[450px] justify-start items-start gap-3 inline-flex">
        <TextField
          label="id"
          name="id"
          placeholder="아이디"
          type="text"
          error={errors.idError}
          onChange={handleInputChange}
          confirmText={idStatus.confirmText}
        />
        <Button
          className="w-[108px] h-[54px]"
          size="small"
          variant={idCheckButtonVariant}
          onButtonClick={handelCheckId}
        >
          중복확인
        </Button>
      </div>
      <TextField
        label="password"
        name="password"
        placeholder="비밀번호"
        type="password"
        error={errors.passwordError}
        onChange={handleInputChange}
      />
      <TextField
        label="passwordConfirm"
        name="passwordConfirm"
        placeholder="비밀번호 확인"
        type="password"
        error={errors.passwordConfirmError}
        onChange={handleInputChange}
      />
      <Button
        className="w-[450px] h-[58px]"
        variant={buttonVariant}
        onButtonClick={handleSignUp}
      >
        회원가입
      </Button>
      <Divider text="or continue with" />
      <KakaoButton isLogin={false} />
    </div>
  );
};
