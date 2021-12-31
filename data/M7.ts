import { Line } from '../shared';

const M7: Line = {
  name: '7 号线',
  shortName: '7',
  code: 'M7',
  color: '#FFC56E',
  stations: [
    {
      name: '北京西站',
      transfers: ['M9'],
    },
    {
      name: '湾子',
    },
    {
      name: '达官营',
      transfers: ['M16'],
    },
    {
      name: '广安门内',
    },
    {
      name: '菜市口',
      transfers: ['M4'],
    },
    {
      name: '虎坊桥',
    },
    {
      name: '珠市口',
      transfers: ['M8'],
    },
    {
      name: '桥湾',
    },
    {
      name: '磁器口',
      transfers: ['M5'],
    },
    {
      name: '广渠门内',
    },
    {
      name: '广渠门外',
      transfers: ['M17'],
    },
    {
      name: '双井',
      transfers: ['M10'],
    },
    {
      name: '九龙山',
      transfers: ['M14'],
    },
    {
      name: '大郊亭',
    },
    {
      name: '百子湾',
    },
    {
      name: '化工',
    },
    {
      name: '南楼梓庄',
    },
    {
      name: '欢乐谷景区',
    },
    {
      name: '垡头',
    },
    {
      name: '双合',
    },
    {
      name: '焦化厂',
    },
    {
      name: '黄厂',
    },
    {
      name: '郎辛庄',
    },
    {
      name: '黑庄户',
    },
    {
      name: '万盛西',
    },
    {
      name: '万盛东',
    },
    {
      name: '群芳',
    },
    {
      name: '高楼金',
    },
    {
      name: '花庄',
      transfers: ['M1'],
    },
    {
      name: '环球度假区',
      transfers: ['M1'],
    },
  ],
};

export default M7;
