import React from 'react';
import { MySelect } from 'blued';
import omit from 'rc-util/lib/omit';

interface DataDictSelectProps {
  /* 数据字典数据源 */
  dataSource: {
    [key: string]: DictItem[];
  };
  /* 字典类别编号 */
  dictTypeNo: string;
  children?: React.ReactNode;
}

interface DictItem {
  dictId: string;
  dictName: string;
  [key: string]: string;
}

const InternalDataDictSelect: React.ForwardRefRenderFunction<
  unknown,
  DataDictSelectProps
> = (props, ref) => {
  const { dataSource = {}, dictTypeNo = '' } = props;
  function renderOptions() {
    const dictList = dictTypeNo in dataSource ? dataSource[dictTypeNo] : [];
    return (
      dictList.length &&
      dictList.map((item: DictItem) => {
        return (
          <MySelect.Option key={item.dictId} value={item.dictId} data={item}>
            {item.dictName}
          </MySelect.Option>
        );
      })
    );
  }
  const dataDictSelectProps = omit(props, ['dataSource', 'dictTypeNo']);
  return <MySelect {...dataDictSelectProps}>{renderOptions()}</MySelect>;
};

const DataDictSelect = React.forwardRef<unknown, DataDictSelectProps>(
  InternalDataDictSelect,
);

DataDictSelect.displayName = 'DataDictSelect';

export default DataDictSelect;
