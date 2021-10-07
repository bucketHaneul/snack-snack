import React, { useEffect } from 'react';
import useSnackbar from '../src/useSnackbar';

// 사용 예시
const Example = () => {
  const { openSnackbar } = useSnackbar();

  useEffect(() => {
    openSnackbar('Open new page');
  }, []);

  return <div>Example</div>;
};

export default Example;
