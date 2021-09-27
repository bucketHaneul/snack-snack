import React from 'react';
import Snackbar from './Snackbar';

export default {
  title: 'Snackbar',
  component: Snackbar,
};

const Template = (args) => <Snackbar {...args} />;

export const Default = Template.bind({});
export const Red = Template.bind({});
Default.args = {
  children: '스낵바 메세지',
};
Red.args = {
  children: '빨간 스낵바 메세지',
  styles: {
    backgroundColor: 'red',
  },
};
