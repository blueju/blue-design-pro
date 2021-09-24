import React, { useState } from 'react';
import { MyButton, MySlider } from 'blued';
import { MoreButton } from 'blued-pro';

export default () => {
  const [sliderSize, setSliderSize] = useState(4);

  function handleClick(e) {
    console.log(e);
  }

  return (
    <>
      <MySlider
        value={sliderSize}
        max={8}
        onChange={(value) => setSliderSize(value)}
      />
      <br />
      <MoreButton spaceSize={8} showNumber={sliderSize}>
        <MyButton onClick={handleClick}>新增</MyButton>
        <MyButton onClick={handleClick}>删除</MyButton>
        <MyButton onClick={handleClick}>全选</MyButton>
        <MyButton onClick={handleClick}>查看</MyButton>
        <MyButton onClick={handleClick}>导出</MyButton>
        <MyButton onClick={handleClick}>导入</MyButton>
        <MyButton onClick={handleClick}>打印</MyButton>
      </MoreButton>
    </>
  );
};
