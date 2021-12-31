import { Line } from '../shared';

const M15: Line = {
  name: '15 号线',
  shortName: '15',
  code: 'M15',
  color: '#653279',
  stations: [
    {
      name: '清华东路西口',
    },
    {
      name: '六道口',
    },
    {
      name: '北沙滩',
    },
    {
      name: '奥林匹克公园',
      transfers: ['M8'],
    },
    {
      name: '安立路',
    },
    {
      name: '大屯路东',
      transfers: ['M5'],
    },
    {
      name: '关庄',
    },
    {
      name: '望京西',
      transfers: ['M13'],
    },
    {
      name: '望京',
      transfers: ['M14'],
    },
    {
      name: '望京东',
    },
    {
      name: '崔各庄',
    },
    {
      name: '马泉营',
    },
    {
      name: '孙河',
    },
    {
      name: '国展',
    },
    {
      name: '花梨坎',
    },
    {
      name: '后沙峪',
    },
    {
      name: '南法信',
    },
    {
      name: '石门',
    },
    {
      name: '顺义',
    },
    {
      name: '俸伯',
    },
  ],
};

export default M15;
