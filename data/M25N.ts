import { Line } from '../shared';

const M25N: Line = {
  name: '房山线',
  shortName: '房山',
  code: 'M25N',
  color: '#653279',
  stations: [
    {
      name: '东管头南',
      transfers: ['M16'],
    },
    {
      name: '首经贸',
      transfers: ['M10'],
    },
    {
      name: '花乡东桥',
    },
    {
      name: '白盆窑',
    },
    {
      name: '郭公庄',
      transfers: ['M9'],
    },
    {
      name: '大葆台',
    },
    {
      name: '稻田',
    },
    {
      name: '长阳',
    },
    {
      name: '篱笆房',
    },
    {
      name: '广阳城',
    },
    {
      name: '良乡大学城北',
    },
    {
      name: '良乡大学城',
    },
    {
      name: '良乡大学城西',
    },
    {
      name: '良乡南关',
    },
    {
      name: '苏庄',
    },
    {
      name: '阎村东',
    },
  ].reverse(),
};

export default M25N;
