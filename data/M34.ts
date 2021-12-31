import { Line } from '../shared';

const M34: Line = {
  name: '首都机场线',
  shortName: '首都✈️',
  code: 'M34',
  color: '#A192B2',
  stations: [
    {
      name: '北新桥',
      transfers: ['M5'],
    },
    {
      name: '东直门',
      transfers: ['M2', 'M13'],
    },
    {
      name: '三元桥',
      transfers: ['M10'],
    },
    {
      name: '2 号航站楼',
    },
    {
      name: '3 号航站楼',
    },
  ],
};

export default M34;
