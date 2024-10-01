import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { kakaoSignIn } from 'apis/api';

function Auth() {
  const navigate = useNavigate();

  const getToken = async () => {
    const token = new URL(window.location.href).searchParams.get('code');
    const res = await kakaoSignIn({ code: token });
    return res;
  };

  useEffect(() => {
    getToken()
      .then((res) => {
        if (res === null) {
          navigate('/login');
        }
        if (res.nickname === null || res.profilepic_id === null) {
          window.location.href = '/set-profile';
        } else {
          window.location.href = '/';
        }
      })
      .catch((err) => console.log(err));
  });

  return <></>;
}

export default Auth;
