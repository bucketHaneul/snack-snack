import React, { useEffect } from 'react';
import useSnackBar from '../src/useSnackbar';

const Test = () => {
  const { openSnackBar } = useSnackBar();

  useEffect(() => {
    openSnackBar('저장에 성공했습니다.');
  }, []);

  return <div>test</div>;
};

export default Test;
