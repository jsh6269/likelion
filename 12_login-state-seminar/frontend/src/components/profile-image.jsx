import profile1 from '../assets/images/profile1.png';
import profile2 from '../assets/images/profile2.png';
import profile3 from '../assets/images/profile3.png';
import profile4 from '../assets/images/profile4.png';
import profile5 from '../assets/images/profile5.png';
import profile6 from '../assets/images/profile6.png';

export const ProfileImage = ({ profileImageId, additionalClassName }) => {
  const defaultClassName = 'w-[64px] h-[64px]';
  const className = additionalClassName
    ? additionalClassName
    : defaultClassName;

  return (
    <img
      src={
        profileImageId === 1
          ? profile1
          : profileImageId === 2
            ? profile2
            : profileImageId === 3
              ? profile3
              : profileImageId === 4
                ? profile4
                : profileImageId === 5
                  ? profile5
                  : profileImageId === 6
                    ? profile6
                    : null
      }
      alt={`profile${profileImageId}`}
      className={className}
    />
  );
};
