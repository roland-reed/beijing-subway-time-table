import { Line } from '../shared';

const M24: Line = {
  name: '亦庄线',
  shortName: '亦庄',
  code: 'M24',
  color: '#D0006F',
  stations: [
    {
      name: '宋家庄',
      transfers: ['M15', 'M10'],
    },
    {
      name: '肖村',
    },
    {
      name: '小红门',
    },
    {
      name: '旧宫',
    },
    {
      name: '亦庄桥',
    },
    {
      name: '亦庄文化园',
    },
    {
      name: '万源街',
    },
    {
      name: '荣京东街',
    },
    {
      name: '荣昌东街',
      transfers: ['YZT1'],
    },
    {
      name: '同济南路',
    },
    {
      name: '经海路',
    },
    {
      name: '次渠南',
    },
    {
      name: '次渠',
      transfers: ['M17'],
    },
    {
      name: '亦庄火车站',
    },
  ].reverse(),
};

export default M24;
