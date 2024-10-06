import React, { useState, useCallback } from 'react';
import { Button } from '../../../../components/button';
import { TextField } from '../../../../components/textfield';
import { Divider } from '../divider';
import { KakaoButton } from '../kakao-button';
import { signIn } from '../../../../apis/api';
import { setLoginState, setUserProfile } from '../../../../redux/user-slice';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleInputChange = useCallback(
    (setter) => (e) => {
      setError(null);
      setter(e.target.value);
    },
    [],
  );

  const handleLogin = useCallback(async () => {
    try {
      const res = await signIn({ username: id, password: password });
      if (res === null) {
        setError('*계정 정보를 확인해주세요.');
        return;
      }
      dispatch(setLoginState(true));
      dispatch(setUserProfile(res));
      window.location.href =
        res.nickname === null || res.profilepic_id === null
          ? '/set-profile'
          : '/';
    } catch (error) {
      setError('*로그인 중 오류가 발생했습니다.');
    }
  }, [id, password]);

  const buttonVariant =
    id.length > 0 && password.length > 0 ? 'primary' : 'disabled';

  return (
    <div className="w-full max-w-md flex flex-col gap-5 items-start">
      <TextField
        label="id"
        placeholder="아이디"
        type="text"
        onChange={handleInputChange(setId)}
      />
      <TextField
        label="password"
        placeholder="비밀번호"
        type="password"
        onChange={handleInputChange(setPassword)}
      />
      {error && (
        <div className="h-6 px-1 mt-2">
          <div className="text-red-400 text-base font-normal">{error}</div>
        </div>
      )}
      <Button
        className="w-full h-14"
        variant={buttonVariant}
        onButtonClick={handleLogin}
      >
        로그인하기
      </Button>
      <Divider text="or continue with" />
      <KakaoButton isLogin={true} />
    </div>
  );
};
