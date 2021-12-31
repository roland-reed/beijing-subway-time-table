import { Line } from '../shared';

const M35: Line = {
  name: '大兴机场线',
  shortName: '大兴✈️',
  code: 'M35',
  color: '#004A9F',
  stations: [
    {
      name: '草桥',
      transfers: ['M10', 'M19'],
    },
    {
      name: '大兴新城',
    },
    {
      name: '大兴机场',
    },
  ],
};

export default M35;
