import { Line } from '../shared';

const M14: Line = {
  name: '14 号线',
  shortName: '14',
  code: 'M14',
  color: '#CA9A8E',
  stations: [
    {
      name: '张郭庄',
    },
    {
      name: '园博园',
    },
    {
      name: '大瓦窑',
    },
    {
      name: '郭庄子',
    },
    {
      name: '大井',
    },
    {
      name: '七里庄',
      transfers: ['M9'],
    },
    {
      name: '西局',
      transfers: ['M10'],
    },
    {
      name: '东管头',
    },
    {
      name: '丽泽商务区',
    },
    {
      name: '菜户营',
    },
    {
      name: '西铁营',
    },
    {
      name: '景风门',
      transfers: ['M19'],
    },
    {
      name: '北京南站',
      transfers: ['M4'],
    },
    {
      name: '陶然桥',
      state: 'paused',
    },
    {
      name: '永定门外',
      transfers: ['M8'],
    },
    {
      name: '景泰',
    },
    {
      name: '蒲黄榆',
      transfers: ['M5'],
    },
    {
      name: '方庄',
    },
    {
      name: '十里河',
      transfers: ['M10'],
    },
    {
      name: '北工大西门',
    },
    {
      name: '平乐园',
    },
    {
      name: '九龙山',
      transfers: ['M7'],
    },
    {
      name: '大望路',
      transfers: ['M1'],
    },
    {
      name: '金台路',
      transfers: ['M6'],
    },
    {
      name: '朝阳公园',
    },
    {
      name: '东风北桥',
    },
    {
      name: '将台',
    },
    {
      name: '高家园',
      state: 'paused',
    },
    {
      name: '望京南',
    },
    {
      name: '阜通',
    },
    {
      name: '望京西',
      transfers: ['M15'],
    },
    {
      name: '东湖渠',
    },
    {
      name: '来广营',
    },
    {
      name: '善各庄',
    },
  ],
};

export default M14;
