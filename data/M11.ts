import { Line } from '../shared';

const M11: Line = {
  name: '11 号线',
  shortName: '11',
  code: 'M11',
  color: '#ED796B',
  stations: [
    {
      name: '模式口',
      state: 'paused',
    },
    {
      name: '金安桥',
      transfers: ['M6', 'M26'],
    },
    {
      name: '北辛安',
    },
    {
      name: '新首钢',
    },
  ],
};

export default M11;
