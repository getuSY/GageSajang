import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';

export const usePostCode = (
  setState: React.Dispatch<React.SetStateAction<string>>
) => {
  const scriptUrl =
    '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = (data: any) => {
    if (data.addressType === 'R') {
      if (data.sido === '서울' && data.sigungu !== '' && data.bname !== '') {
        setState(`${data.sigungu} ${data.bname}`);
      }
    }
  };
  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return handleClick;
};
