import React from 'react';
import { WrapperATag } from 'blued-pro';

export default () => {
  function handleClick() {
    // 执行你想执行的方法
    console.log('执行你想执行的方法');
  }

  return (
    <>
      <WrapperATag onClick={handleClick}>
        这是一个跳转到“更多按钮”的链接
      </WrapperATag>
    </>
  );
};
