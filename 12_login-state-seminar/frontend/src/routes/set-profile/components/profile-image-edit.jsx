import React from 'react';
import { ReactComponent as EditIcon } from '../../../assets/icons/edit.svg';
import profile1 from '../../../assets/images/profile1.png';
import profile2 from '../../../assets/images/profile2.png';
import profile3 from '../../../assets/images/profile3.png';
import profile4 from '../../../assets/images/profile4.png';
import profile5 from '../../../assets/images/profile5.png';
import profile6 from '../../../assets/images/profile6.png';

export const ProfileImageEdit = ({ profileImg, openModal }) => {
  return (
    <div className="w-[144px] h-[136px]">
      <div className="w-36 h-[136px] relative">
        <div className="w-[135px] h-[134px] left-0 top-0 absolute bg-red-300 rounded-[200px]">
          <img src={
            profileImg === 1 ? profile1 :
              profileImg === 2 ? profile2 :
                profileImg === 3 ? profile3 :
                  profileImg === 4 ? profile4 :
                    profileImg === 5 ? profile5 :
                      profile6
          } alt="profileImg"
          />
        </div>
        <div onClick={openModal}>
          <EditIcon className="left-[98px] top-[90px] absolute w-[46px] h-[46px]" />
        </div>
      </div>
    </div>
  );
};
