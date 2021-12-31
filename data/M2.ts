import { Line } from '../shared';

const M2: Line = {
  name: '2 号线',
  shortName: '2',
  code: 'M2',
  color: '#004B87',
  stations: [
    {
      name: '西直门',
      transfers: ['M4', 'M13'],
    },
    {
      name: '车公庄',
      transfers: ['M6', 'M13'],
    },
    {
      name: '阜成门',
    },
    {
      name: '复兴门',
      transfers: ['M1'],
    },
    {
      name: '长椿街',
    },
    {
      name: '宣武门',
      transfers: ['M4'],
    },
    {
      name: '和平门',
    },
    {
      name: '前门',
      transfers: ['M8'],
    },
    {
      name: '崇文门',
      transfers: ['M5'],
    },
    {
      name: '北京站',
    },
    {
      name: '建国门',
      transfers: ['M1'],
    },
    {
      name: '朝阳门',
      transfers: ['M6'],
    },
    {
      name: '东四十条',
    },
    {
      name: '东直门',
      transfers: ['M13', 'M34'],
    },
    {
      name: '雍和宫',
      transfers: ['M5'],
    },
    {
      name: '安定门',
    },
    {
      name: '鼓楼大街',
      transfers: ['M8'],
    },
    {
      name: '积水潭',
      transfers: ['M19'],
    },
  ],
};

export default M2;
