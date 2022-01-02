import { Line } from '../shared';

const XJ: Line = {
  name: '西郊线',
  shortName: '西郊',
  code: 'XJ',
  color: '#D22630',
  stations: [
    {
      name: '巴沟',
      transfers: ['M10'],
    },
    {
      name: '颐和园西门',
    },
    {
      name: '茶棚',
    },
    {
      name: '万安',
    },
    {
      name: '植物园',
    },
    {
      name: '香山',
    },
  ].reverse(),
};

export default XJ;
