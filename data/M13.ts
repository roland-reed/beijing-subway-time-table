import { Line } from '../shared';

const M13: Line = {
  name: '13 号线',
  shortName: '13',
  code: 'M13',
  color: '#F4DA40',
  stations: [
    {
      name: '西直门',
      transfers: ['M2', 'M4'],
    },
    {
      name: '大钟寺',
    },
    {
      name: '知春路',
      transfers: ['M10'],
    },
    {
      name: '五道口',
    },
    {
      name: '知春路',
      transfers: ['M13'],
    },
    {
      name: '上地',
    },
    {
      name: '清河站',
    },
    {
      name: '西二旗',
      transfers: ['M27'],
    },
    {
      name: '龙泽',
    },
    {
      name: '回龙观',
    },
    {
      name: '霍营',
      transfers: ['M8'],
    },
    {
      name: '立水桥',
      transfers: ['M5'],
    },
    {
      name: '北苑',
    },
    {
      name: '望京西',
      transfers: ['M15'],
    },
    {
      name: '芍药居',
      transfers: ['M10'],
    },
    {
      name: '光熙门',
    },
    {
      name: '柳芳',
    },
    {
      name: '东直门',
      transfers: ['M2', 'M34'],
    },
  ],
};

export default M13;
