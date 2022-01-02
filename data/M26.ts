import { Line } from '../shared';

const M26: Line = {
  name: 'S1 线',
  shortName: 'S1',
  code: 'M26',
  color: '#A45A2A',
  stations: [
    {
      name: '苹果园',
      transfers: ['M1', 'M6'],
    },
    {
      name: '金安桥',
      transfers: ['M6', 'M11'],
    },
    {
      name: '四道桥',
    },
    {
      name: '桥户营',
    },
    {
      name: '上岸',
    },
    {
      name: '栗园庄',
    },
    {
      name: '小园',
    },
    {
      name: '石厂',
    },
  ].reverse(),
};

export default M26;
