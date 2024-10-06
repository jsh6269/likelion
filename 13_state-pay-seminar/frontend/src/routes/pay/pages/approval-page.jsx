// 추가
import React, { useEffect } from 'react';
import { fetchUserInfo, paymentApprove } from 'apis/api';
import { useDispatch, useSelector } from 'react-redux';
import { setUserProfile } from '../../../redux/user-slice';

export default function ApprovalPage() {
  // 추가
  const dispatch = useDispatch();
  const data = useSelector((data) => data.user);

  useEffect(() => {
    const url = new URL(window.location.href);
    const pg_token = url.searchParams.get('pg_token');

    if (pg_token) {
      paymentApprove(localStorage.getItem('tid'), pg_token).then(
        async (res) => {
          console.log('res', res);
          localStorage.removeItem('tid');

          // 사용자 포인트 업데이트 필요
          await fetchUserInfo().then((res) => {
            console.log('userinfo', res);
            dispatch(
              setUserProfile({
                ...data,
                remaining_points: res.remaining_points,
              }),
            );
          });

          window.location.href = '/';
        },
      );
    }
  }, []);

  return <div>결제가 완료되었습니다.</div>;
}
