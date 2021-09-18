import React from 'react';
import { MyButton, MySpace } from 'blued';
import { MoreButton } from 'blued-pro';

export default () => {
  function handleClick(e) {
    // console.log(e.target.innerHTML);
    console.log(e);
  }

  return (
    <>
      {/*<Slider value={size} onChange={(value) => setSize(value)} />*/}
      <MoreButton spaceSize={8} showNumber={3}>
        {/*<MySpace size={8}>*/}
        <MyButton onClick={handleClick}>新增</MyButton>
        <MyButton onClick={handleClick}>修改</MyButton>
        <MyButton onClick={handleClick}>删除</MyButton>
        <MyButton onClick={handleClick}>全选</MyButton>
        <MyButton onClick={handleClick}>查看</MyButton>
        <MyButton onClick={handleClick}>导出</MyButton>
        <MyButton onClick={handleClick}>导入</MyButton>
        <MyButton onClick={handleClick}>打印</MyButton>
        {/*</MySpace>*/}
      </MoreButton>
    </>
  );
};
