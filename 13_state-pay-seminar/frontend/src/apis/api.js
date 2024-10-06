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

// 포인트 목록을 불러오는 api
export const getPointList = async () => {
  try {
    const response = await instance.get('/point/');
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};

// 카카오페이 준비 api
export const paymentReady = async ({ point, price }) => {
  try {
    const res = await instanceWithToken.post('/payment/ready/', {
      cid: process.env.REACT_APP_KAKAO_PAY_CID,
      partner_order_id: 'POID1234',
      partner_user_id: 'PUID1234',
      item_name: point.toString(),
      quantity: 1,
      total_amount: parseInt(price.replaceAll(',', '')),
      tax_free_amount: 0,
      approval_url: 'http://localhost:3000/approval',
      cancel_url: 'http://localhost:3000/cancel',
      fail_url: 'http://localhost:3000/fail',
    });
    return res;
  } catch (e) {
    console.error(e);
  }
};

// 카카오페이 결제 승인 api
export const paymentApprove = async (tid, pg_token) => {
  try {
    const res = await instanceWithToken.post('/payment/approve/', {
      pg_token: pg_token,
      tid: tid,
      cid: process.env.REACT_APP_KAKAO_PAY_CID,
    });
    return res;
  } catch (e) {
    console.error(e);
  }
};

// 사용자의 포인트를 감소하는 api
export const reducePoint = async (point) => {
  try {
    const response = await instanceWithToken.put('/user/pointreduce/', {
      point_to_deduct: point,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};
