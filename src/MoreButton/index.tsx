import React from 'react';
// @ts-ignore
import { MyButton, MyDropdown, MyMenu, MySpace } from 'blued';
import { DownOutlined } from '@ant-design/icons';

interface MoreButtonProps {
  showNumber: number;
  spaceSize?: number;
  children?: React.ReactNode;
}

const InternalMoreButton: React.ForwardRefRenderFunction<
  unknown,
  MoreButtonProps
> = (props, ref) => {
  const { showNumber = 5, spaceSize = 8, children, ...rest } = props;
  console.log('showNumber', showNumber);

  function renderVisibleButton(props: MoreButtonProps) {
    const { showNumber } = props;
    return React.Children.map(props.children, (child, index) => {
      if (index < showNumber) {
        return child;
      }
    });
  }

  function renderInvisibleButton(props: MoreButtonProps) {
    const { showNumber } = props;
    return React.Children.map(props.children, (child, index) => {
      if (index >= showNumber && React.isValidElement(child)) {
        return React.cloneElement(child, {
          style: {
            display: 'none',
          },
        });
      }
    });
  }

  function renderMoreButton(props: MoreButtonProps) {
    function getDropdownMenu() {
      return (
        <MyMenu>
          {React.Children.map<unknown, React.ReactNode>(
            props.children,
            (child, index) => {
              console.log(child);
              if (index >= showNumber && React.isValidElement(child)) {
                return (
                  <MyMenu.Item key={index} onClick={child.props.onClick}>
                    {child.props.children}
                  </MyMenu.Item>
                );
              }
            },
          )}
        </MyMenu>
      );
    }

    const { showNumber } = props;
    return (
      <MyDropdown overlay={getDropdownMenu()}>
        <MyButton>
          更多操作 <DownOutlined />
        </MyButton>
      </MyDropdown>
    );
  }

  return (
    <>
      <MySpace size={spaceSize}>
        {renderVisibleButton(props)}
        {renderMoreButton(props)}
      </MySpace>
      {renderInvisibleButton(props)}
    </>
  );
};

const MoreButton = React.forwardRef<unknown, MoreButtonProps>(
  InternalMoreButton,
);

MoreButton.displayName = 'MoreButton';

export default MoreButton;
