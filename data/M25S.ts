import { Line } from '../shared';

const M25S: Line = {
  name: '燕房线',
  shortName: '燕房',
  code: 'M25S',
  color: '#D86018',
  stations: [
    {
      name: '阎村东',
      transfers: ['M25N'],
    },
    {
      name: '紫草坞',
    },
    {
      name: '阎村',
    },
    {
      name: '星城',
    },
    {
      name: '大石河东',
    },
    {
      name: '马各庄',
    },
    {
      name: '饶乐府',
    },
    {
      name: '房山城关',
    },
    {
      name: '燕山',
    },
  ].reverse(),
};

export default M25S;
