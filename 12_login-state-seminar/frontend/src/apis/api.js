import { instance, instanceWithToken } from './axios';
import { getCookie } from '../utils/cookie';

export const signIn = async (data) => {
  try {
    const response = await instance.post('/user/signin/', data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const signUp = async (data) => {
  try {
    const response = await instance.post('/user/signup/', data);
    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const signOut = async () => {
  try {
    const response = await instanceWithToken.post('/user/signout/', {
      refresh: getCookie('refresh_token'),
    });
    if (response.status === 204) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const kakaoSignIn = async (data) => {
  try {
    const response = await instance.post(
      '/user/kakao/callback/?code=' + data.code,
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const fetchUserInfo = async () => {
  try {
    const response = await instanceWithToken.get('/user/me');
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const userInfoUpdate = async (data) => {
  try {
    const response = await instanceWithToken.put(`/user/me/`, data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const checkDuplicateUser = async (data) => {
  try {
    const response = await instance.post(`/user/check/`, data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};
