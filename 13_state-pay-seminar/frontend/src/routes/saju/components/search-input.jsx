import React, { useState, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import calendarIcon from 'assets/icons/bx_calendar.png';
import dropdownArrow from 'assets/icons/dropdown-arrow.png';

registerLocale('ko', ko);

export const SajuSearchInput = ({ onSubmit }) => {
  const titleClass = 'text-neutral-800 text-2xl font-bold pb-5';

  const [gender, setGender] = useState('');
  const [yearType, setYearType] = useState('');
  const [birthDate, setBirthDate] = useState(null);
  const [birthTime, setBirthTime] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleYearTypeChange = (event) => {
    setYearType(event.target.value);
  };

  const handleBirthTimeChange = (event) => {
    setBirthTime(event.target.value);
  };

  useEffect(() => {
    if (gender && yearType && birthDate && birthTime) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [gender, yearType, birthDate, birthTime]);

  return (
    <form className="flex flex-col gap-10 text-left w-full px-[60px] py-10">
      <div className="flex pb-2 border-b text-neutral-800 text-[40px] font-extrabold border-neutral-500 justify-start items-start nanum-extra-bold">
        오늘의 운세
      </div>
      <div>
        {/* gender */}
        <div className={titleClass}>성별</div>
        <div className="flex items-center">
          <label className="mr-8 flex items-center text-xl">
            <input
              type="radio"
              value="male"
              className="mr-2 w-5 h-5"
              checked={gender === 'male'}
              onChange={handleGenderChange}
            />
            남자
          </label>
          <label className="flex items-center text-xl">
            <input
              type="radio"
              value="female"
              className="mr-2 w-5 h-5"
              checked={gender === 'female'}
              onChange={handleGenderChange}
            />
            여자
          </label>
        </div>
      </div>

      {/* birthday */}
      <div>
        <div className={titleClass}>생년월일</div>
        <div className="flex justify-between gap-6">
          <div className="relative w-60">
            <select
              name="yeartype"
              value={yearType}
              onChange={handleYearTypeChange}
              className="w-full h-14 px-5 py-3 border-neutral-500 border rounded-xl text-xl font-normal font-['Pretendard'] appearance-none focus:outline-none focus:ring-0"
            >
              <option value="">선택</option>
              <option value="solar">양력</option>
              <option value="lunar">음력</option>
            </select>
            <img
              className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
              src={dropdownArrow}
              alt="Dropdown Arrow"
            />
          </div>
          <div className="relative h-14 bg-white rounded-xl border border-neutral-500 flex items-center grow">
            <DatePicker
              selected={birthDate}
              onChange={(date) => setBirthDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="날짜 선택"
              className="w-full h-full text-xl font-normal font-['Pretendard'] pl-4 pr-10 focus:outline-none focus:ring-0 focus:border-transparent"
              locale="ko"
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={40}
            />
            <img
              className="absolute right-4 w-[30px] h-[30px]"
              src={calendarIcon}
              alt="Calendar Icon"
            />
          </div>
        </div>
      </div>

      {/* birth time */}
      <div>
        <div className={titleClass}>태어난 시간</div>
        <div className="relative w-full">
          <select
            name="birthtime"
            value={birthTime}
            onChange={handleBirthTimeChange}
            className="w-full h-14 px-5 py-3 border-neutral-500 border rounded-xl text-xl font-normal font-['Pretendard'] appearance-none focus:outline-none focus:ring-0"
          >
            <option value="">선택</option>
            {Array.from({ length: 13 }, (_, i) => i).map((index) => (
              <option key={index} value={index}>
                {birthTimeText[index]}
              </option>
            ))}
          </select>
          <img
            className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            src={dropdownArrow}
            alt="Dropdown Arrow"
          />
        </div>
      </div>
      <button
        type="button"
        onClick={onSubmit}
        disabled={!isFormValid}
        className={`w-full h-14 px-5 py-3 rounded-xl text-xl font-bold font-['Pretendard'] ${
          isFormValid
            ? 'bg-primary text-neutral-100'
            : 'bg-neutral-400 text-neutral-500'
        }`}
      >
        사주 운세 보기
      </button>
    </form>
  );
};

const birthTimeText = [
  '모름',
  '子(자) 23:30 ~ 01:29',
  '丑(축) 01:30 ~ 03:29',
  '寅(인) 03:30 ~ 05:29',
  '卯(묘) 05:30 ~ 07:29',
  '辰(진) 07:30 ~ 09:29',
  '巳(사) 09:30 ~ 11:29',
  '午(오) 11:30 ~ 13:29',
  '未(미) 13:30 ~ 15:29',
  '申(신) 15:30 ~ 17:29',
  '酉(유) 17:30 ~ 19:29',
  '戌(술) 19:30 ~ 21:29',
  '亥(해) 21:30 ~ 23:29',
];
