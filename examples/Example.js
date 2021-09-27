import React, { useEffect } from 'react';
import useSnackBar from '../src/useSnackbar';

const Example = () => {
  // 사용 예시

  const { openSnackBar } = useSnackBar();

  useEffect(() => {
    openSnackBar('새로운 페이지가 열렸습니다.');
  }, []);

  return <div>Example</div>;
};

export default Example;
