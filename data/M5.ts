import { Line } from '../shared';

const M5: Line = {
  name: '5 号线',
  shortName: '5',
  code: 'M5',
  color: '#AA0061',
  stations: [
    {
      name: '天通苑北',
    },
    {
      name: '天通苑',
    },
    {
      name: '天通苑南',
    },
    {
      name: '立水桥',
    },
    {
      name: '立水桥南',
    },
    {
      name: '北苑路北',
    },
    {
      name: '大屯路东',
      transfers: ['M15'],
    },
    {
      name: '惠新西街北口',
    },
    {
      name: '惠新西街南口',
      transfers: ['M10'],
    },
    {
      name: '和平西桥',
    },
    {
      name: '和平里北街',
    },
    {
      name: '雍和宫',
      transfers: ['M2'],
    },
    {
      name: '北新桥',
      transfers: ['M34'],
    },
    {
      name: '张自忠路',
    },
    {
      name: '东四',
      transfers: ['M6'],
    },
    {
      name: '灯市口',
    },
    {
      name: '东单',
      transfers: ['M1'],
    },
    {
      name: '崇文门',
      transfers: ['M2'],
    },
    {
      name: '磁器口',
      transfers: ['M7'],
    },
    {
      name: '天坛东门',
    },
    {
      name: '蒲黄榆',
      transfers: ['M14'],
    },
    {
      name: '刘家窑',
    },
    {
      name: '宋家庄',
      transfers: ['M10', 'M24'],
    },
  ].reverse(),
};

export default M5;
