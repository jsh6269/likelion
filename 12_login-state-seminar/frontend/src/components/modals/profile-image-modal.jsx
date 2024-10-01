import React from "react";
import profile1 from "../../assets/images/profile1.png";
import profile2 from "../../assets/images/profile2.png";
import profile3 from "../../assets/images/profile3.png";
import profile4 from "../../assets/images/profile4.png";
import profile5 from "../../assets/images/profile5.png";
import profile6 from "../../assets/images/profile6.png";

export const ProfileImageModal = ({ setIsModalOpen, profileImg, setProfileImg }) => {
    const onClickSave = () => {
        console.log("Save profile image", profileImg); // 선택한 프로필 이미지 번호
        setIsModalOpen(false); // 모달 닫기
    };

    const imageStyle = "w-[80px] h-[80px] cursor-pointer";
    const selectedImageStyle = "w-[80px] h-[80px] cursor-pointer drop-shadow-xl";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-[422px] bg-white rounded-[18px] shadow-md px-[30px] py-5">
                <div className="flex justify-end">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={() => setIsModalOpen(false)}>
                        <path d="M23.875 8.13754C23.7594 8.02166 23.622 7.92972 23.4708 7.86699C23.3196 7.80427 23.1575 7.77198 22.9938 7.77198C22.8301 7.77198 22.668 7.80427 22.5168 7.86699C22.3655 7.92972 22.2282 8.02166 22.1125 8.13754L16 14.2375L9.88754 8.12504C9.77181 8.00931 9.63442 7.91751 9.48321 7.85488C9.33201 7.79225 9.16995 7.76001 9.00629 7.76001C8.84262 7.76001 8.68056 7.79225 8.52936 7.85488C8.37815 7.91751 8.24076 8.00931 8.12504 8.12504C8.00931 8.24076 7.91751 8.37815 7.85488 8.52936C7.79225 8.68056 7.76001 8.84262 7.76001 9.00629C7.76001 9.16995 7.79225 9.33201 7.85488 9.48321C7.91751 9.63442 8.00931 9.77181 8.12504 9.88754L14.2375 16L8.12504 22.1125C8.00931 22.2283 7.91751 22.3656 7.85488 22.5169C7.79225 22.6681 7.76001 22.8301 7.76001 22.9938C7.76001 23.1574 7.79225 23.3195 7.85488 23.4707C7.91751 23.6219 8.00931 23.7593 8.12504 23.875C8.24076 23.9908 8.37815 24.0826 8.52936 24.1452C8.68056 24.2078 8.84262 24.2401 9.00629 24.2401C9.16995 24.2401 9.33201 24.2078 9.48321 24.1452C9.63442 24.0826 9.77181 23.9908 9.88754 23.875L16 17.7625L22.1125 23.875C22.2283 23.9908 22.3656 24.0826 22.5169 24.1452C22.6681 24.2078 22.8301 24.2401 22.9938 24.2401C23.1574 24.2401 23.3195 24.2078 23.4707 24.1452C23.6219 24.0826 23.7593 23.9908 23.875 23.875C23.9908 23.7593 24.0826 23.6219 24.1452 23.4707C24.2078 23.3195 24.2401 23.1574 24.2401 22.9938C24.2401 22.8301 24.2078 22.6681 24.1452 22.5169C24.0826 22.3656 23.9908 22.2283 23.875 22.1125L17.7625 16L23.875 9.88754C24.35 9.41254 24.35 8.61254 23.875 8.13754Z" fill="#333333"/>
                    </svg>
                </div>
                <div className="flex flex-col justify-center items-center gap-[60px] mt-[10px]">
                    <span className="text-2xl leading-6 font-extrabold text-[#14142B] tracking-tighter">프로필 이미지 고르기</span>
                    <div className="grid grid-cols-3 gap-[35px]">
                        <img src={profile1} alt="profile1" className={profileImg === 1 ? selectedImageStyle : imageStyle} onClick={() => setProfileImg(1)} />
                        <img src={profile2} alt="profile2" className={profileImg === 2 ? selectedImageStyle : imageStyle} onClick={() => setProfileImg(2)} />
                        <img src={profile3} alt="profile3" className={profileImg === 3 ? selectedImageStyle : imageStyle} onClick={() => setProfileImg(3)} />
                        <img src={profile4} alt="profile4" className={profileImg === 4 ? selectedImageStyle : imageStyle} onClick={() => setProfileImg(4)} />
                        <img src={profile5} alt="profile5" className={profileImg === 5 ? selectedImageStyle : imageStyle} onClick={() => setProfileImg(5)} />
                        <img src={profile6} alt="profile6" className={profileImg === 6 ? selectedImageStyle : imageStyle} onClick={() => setProfileImg(6)} />
                    </div>
                    <button className="bg-[#4A3AFF] text-white w-[362px] h-[58px] rounded-[13px] font-bold text-[20px]" onClick={onClickSave}>저장하기</button>
                </div>
            </div>
        </div>
    )
};
