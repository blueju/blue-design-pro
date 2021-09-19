import React, { useState } from 'react';
// @ts-ignore
import {
  MyButton as Button,
  MyDropdown as Dropdown,
  MyMenu as Menu,
  MySpace as Space,
  MyInput as Input,
  MyTabs as Tabs,
} from 'blued';

interface EditableTabProps {
  showNumber: number;
  spaceSize?: number;
  children?: React.ReactNode;
}

const InternalEditableTab: React.ForwardRefRenderFunction<
  unknown,
  EditableTabProps
> = (props, ref) => {
  const [activeKey, SetActiveKey] = useState('1');
  const [tabData, setTabData] = useState([
    {
      key: '1',
      title: 'Tab 1',
      editable: false,
    },
    {
      key: '2',
      title: 'Tab 2',
      editable: false,
    },
  ]);

  function handleDoubleClick(key) {
    const newTabData = tabData.map((item) => {
      if (item.key === activeKey) {
        return {
          ...item,
          editable: true,
        };
      } else {
        return {
          ...item,
          editable: false,
        };
      }
    });
    setTabData(newTabData);
  }

  function renderTabBar(DefaultTabBarProps, DefaultTabBar) {
    return (
      <DefaultTabBar {...DefaultTabBarProps}>
        {(node) => {
          return (
            <div key={node.key} onDoubleClick={handleDoubleClick}>
              {node}
            </div>
          );
        }}
      </DefaultTabBar>
    );
  }

  function handleTabTitleChange(e) {
    console.log('handleTabTitleChange');
    console.log(e.target.value);
    const newTabData = tabData.map((item) => {
      if (item.key === activeKey) {
        return {
          ...item,
          title: e.target.value,
          editable: e.type === 'blur' ? false : true,
        };
      } else {
        return item;
      }
    });
    setTabData(newTabData);
  }

  function renderTab(tabData) {
    if (tabData.editable) {
      return (
        <Input
          bordered={false}
          size="small"
          value={tabData.title}
          onChange={handleTabTitleChange}
          onBlur={handleTabTitleChange}
        />
      );
    } else {
      return tabData.title;
    }
  }

  return (
    <Tabs
      type="card"
      renderTabBar={renderTabBar}
      activeKey={activeKey}
      onChange={(activeKey: string) => SetActiveKey(activeKey)}
    >
      {tabData.map((item) => {
        return (
          <Tabs.TabPane key={item.key} tab={renderTab(item)}>
            {item.title}
          </Tabs.TabPane>
        );
      })}
    </Tabs>
  );
};

const EditableTab = React.forwardRef<unknown, EditableTabProps>(
  InternalEditableTab,
);

EditableTab.displayName = 'EditableTab';

export default EditableTab;
