import React, { useEffect } from 'react';
import useSnackbar from '../src/useSnackbar';

// 사용 예시
const Example = () => {
  const { openSnackbar } = useSnackbar();

  useEffect(() => {
    openSnackbar('새로운 페이지가 열렸습니다.');
  }, []);

  return <div>Example</div>;
};

export default Example;
