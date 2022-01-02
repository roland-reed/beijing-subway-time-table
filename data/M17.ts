import { Line } from '../shared';

const M17: Line = {
  name: '17 号线',
  shortName: '17',
  code: 'M17',
  color: '#00A9A9',
  stations: [
    {
      name: '十里河',
      transfers: ['M10', 'M14'],
    },
    {
      name: '周家庄',
    },
    {
      name: '十八里店',
    },
    {
      name: '北神树',
    },
    {
      name: '次渠北',
    },
    {
      name: '次渠',
      transfers: ['M24'],
    },
    {
      name: '嘉会湖',
    },
  ].reverse(),
};

export default M17;
