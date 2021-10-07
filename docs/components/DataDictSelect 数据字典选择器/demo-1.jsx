import React from 'react';
import { DataDictSelect } from 'blued-pro';

const dataSource = {
  STD_BSN_LINE: [
    {
      dictId: '1',
      dictName: '公司 ',
      dictTypeNo: 'STD_BSN_LINE',
      rmk: null,
      dicSeqNo: null,
      dicSts: '1',
    },
    {
      dictId: '2',
      dictName: '普惠 ',
      dictTypeNo: 'STD_BSN_LINE',
      rmk: null,
      dicSeqNo: null,
      dicSts: '1',
    },
    {
      dictId: '3',
      dictName: '信用卡',
      dictTypeNo: 'STD_BSN_LINE',
      rmk: null,
      dicSeqNo: null,
      dicSts: '1',
    },
    {
      dictId: '4',
      dictName: '金融市场',
      dictTypeNo: 'STD_BSN_LINE',
      rmk: null,
      dicSeqNo: null,
      dicSts: '1',
    },
  ],
  STD_LMT_STS: [
    {
      dictId: '0',
      dictName: '不通过',
      dictTypeNo: 'STD_LMT_STS',
      rmk: null,
      dicSeqNo: null,
      dicSts: '1',
    },
    {
      dictId: '1',
      dictName: '正常',
      dictTypeNo: 'STD_LMT_STS',
      rmk: null,
      dicSeqNo: null,
      dicSts: '1',
    },
    {
      dictId: '2',
      dictName: '全部冻结',
      dictTypeNo: 'STD_LMT_STS',
      rmk: null,
      dicSeqNo: null,
      dicSts: '1',
    },
    {
      dictId: '3',
      dictName: '全部注销',
      dictTypeNo: 'STD_LMT_STS',
      rmk: null,
      dicSeqNo: null,
      dicSts: '1',
    },
    {
      dictId: '4',
      dictName: '解冻',
      dictTypeNo: 'STD_LMT_STS',
      rmk: null,
      dicSeqNo: null,
      dicSts: '1',
    },
    {
      dictId: '5',
      dictName: '部分冻结',
      dictTypeNo: 'STD_LMT_STS',
      rmk: null,
      dicSeqNo: null,
      dicSts: '1',
    },
    {
      dictId: '6',
      dictName: '部分注销 ',
      dictTypeNo: 'STD_LMT_STS',
      rmk: null,
      dicSeqNo: null,
      dicSts: '1',
    },
    {
      dictId: '7',
      dictName: '到期',
      dictTypeNo: 'STD_LMT_STS',
      rmk: null,
      dicSeqNo: null,
      dicSts: '1',
    },
    {
      dictId: '8',
      dictName: '在流',
      dictTypeNo: 'STD_LMT_STS',
      rmk: null,
      dicSeqNo: null,
      dicSts: '1',
    },
    {
      dictId: '9',
      dictName: '待激活状态',
      dictTypeNo: 'STD_LMT_STS',
      rmk: null,
      dicSeqNo: null,
      dicSts: '1',
    },
  ],
};

export default () => {
  return (
    <DataDictSelect
      dataSource={dataSource}
      dictTypeNo="STD_LMT_STS"
      style={{ width: 120 }}
    />
  );
};
