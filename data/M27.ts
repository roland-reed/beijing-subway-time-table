import { Line } from '../shared';

const M27: Line = {
  name: '昌平线',
  shortName: '昌平',
  code: 'M27',
  color: '#D986BA',
  stations: [
    {
      name: '昌平西山口',
    },
    {
      name: '十三陵景区',
    },
    {
      name: '昌平',
    },
    {
      name: '昌平东关',
    },
    {
      name: '北邵洼',
    },
    {
      name: '南邵',
    },
    {
      name: '沙河高教园',
    },
    {
      name: '沙河',
    },
    {
      name: '巩华城',
    },
    {
      name: '朱辛庄',
      transfers: ['M8'],
    },
    {
      name: '生命科学园',
    },
    {
      name: '西二旗',
      transfers: ['M13'],
    },
    {
      name: '清河站',
      transfers: ['M13'],
    },
  ],
};

export default M27;
