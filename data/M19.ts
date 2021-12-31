import { Line } from '../shared';

const M19: Line = {
  name: '19 号线',
  shortName: '19',
  code: 'M19',
  color: '#D6ABC1',
  stations: [
    {
      name: '牡丹园',
      transfers: ['M10'],
    },
    {
      name: '北太平庄',
      state: 'paused',
    },
    {
      name: '积水潭',
      transfers: ['M2'],
    },
    {
      name: '平安里',
      state: 'paused',
      transfers: ['M4', 'M6'],
    },
    {
      name: '太平桥',
      state: 'paused',
    },
    {
      name: '牛街',
    },
    {
      name: '景风门',
      state: 'paused',
    },
    {
      name: '草桥',
      transfers: ['M10', 'M35'],
    },
    {
      name: '新发地',
    },
    {
      name: '新宫',
      transfers: ['M4'],
    },
  ],
};

export default M19;
