import React from 'react';
import { MyTabs as Tabs } from 'blued';
import { MoreButton, EditableTab } from 'blued-pro';

const { TabPane } = EditableTab;

export default () => {
  function callback(e) {
    // console.log(e.target.innerHTML);
    console.log(e);
  }

  return (
    <EditableTab defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </EditableTab>
  );
};
