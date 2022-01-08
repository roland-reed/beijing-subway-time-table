import { Line } from '../shared';

const M9: Line = {
  name: '9 号线',
  shortName: '9',
  code: 'M9',
  color: '#97D700',
  fontColorReverse: true,
  stations: [
    {
      name: '国家图书馆',
      transfers: ['M4', 'M16'],
    },
    {
      name: '白石桥南',
      transfers: ['M6'],
    },
    {
      name: '白堆子',
    },
    {
      name: '军事博物馆',
      transfers: ['M1'],
    },
    {
      name: '北京西站',
      transfers: ['M7'],
    },
    {
      name: '六里桥东',
    },
    {
      name: '六里桥',
      transfers: ['M10'],
    },
    {
      name: '七里庄',
      transfers: ['M14'],
    },
    {
      name: '丰台东大街',
    },
    {
      name: '丰台南路',
      transfers: ['M16'],
    },
    {
      name: '科怡路',
    },
    {
      name: '丰台科技园',
    },
    {
      name: '郭公庄',
      transfers: ['M25N'],
    },
  ].reverse(),
};

export default M9;
