import React from 'react';
// @ts-ignore
import { MyButton, MyDropdown, MyMenu, MySpace } from 'blued';
import { DownOutlined } from '@ant-design/icons';

interface MoreButtonProps {
  // 按钮显示个数
  showNumber: number;
  // 按钮间距大小
  spaceSize?: number;
  children?: React.ReactNode;
}

const InternalMoreButton: React.ForwardRefRenderFunction<
  unknown,
  MoreButtonProps
> = (props, ref) => {
  const { showNumber = 4, spaceSize = 8 } = props;

  /**
   * 渲染可见按钮
   * @param props
   */
  function renderVisibleButton(props: MoreButtonProps) {
    const { showNumber } = props;
    return React.Children.map(props.children, (child, index) => {
      if (index < showNumber) {
        return child;
      }
    });
  }

  /**
   * 渲染更多操作按钮
   * @param props
   */
  function renderMoreButton(props: MoreButtonProps) {
    function getDropdownMenu() {
      return (
        <MyMenu>
          {React.Children.map<unknown, React.ReactNode>(
            props.children,
            (child, index) => {
              if (index >= showNumber && React.isValidElement(child)) {
                return (
                  <MyMenu.Item
                    key={index}
                    onClick={(e: any) => child.props.onClick(e.domEvent)}
                  >
                    {child.props.children}
                  </MyMenu.Item>
                );
              }
            },
          )}
        </MyMenu>
      );
    }

    if (showNumber >= React.Children.count(props.children)) {
      return null;
    } else {
      return (
        <MyDropdown overlay={getDropdownMenu()}>
          <MyButton>
            更多操作 <DownOutlined />
          </MyButton>
        </MyDropdown>
      );
    }
  }

  return (
    <>
      <MySpace size={spaceSize}>
        {renderVisibleButton(props)}
        {renderMoreButton(props)}
      </MySpace>
    </>
  );
};

const MoreButton = React.forwardRef<unknown, MoreButtonProps>(
  InternalMoreButton,
);

MoreButton.displayName = 'MoreButton';

export default MoreButton;
