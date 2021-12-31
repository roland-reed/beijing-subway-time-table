import { Line } from '../shared';

const M4: Line = {
  name: '4 号线 | 大兴线',
  shortName: '4',
  code: 'M4',
  color: '#008C95',
  stations: [
    {
      name: '安河桥北',
    },
    {
      name: '北宫门',
    },
    {
      name: '西苑',
      transfers: ['M16'],
    },
    {
      name: '圆明园',
    },
    {
      name: '北京大学东门',
    },
    {
      name: '中关村',
    },
    {
      name: '海淀黄庄',
      transfers: ['M10'],
    },
    {
      name: '人民大学',
    },
    {
      name: '魏公村',
    },
    {
      name: '国家图书馆',
      transfers: ['M9', 'M16'],
    },
    {
      name: '动物园',
    },
    {
      name: '西直门',
      transfers: ['M2', 'M13'],
    },
    {
      name: '新街口',
    },
    {
      name: '平安里',
      transfers: ['M6', 'M19'],
    },
    {
      name: '西四',
    },
    {
      name: '灵境胡同',
    },
    {
      name: '西单',
      transfers: ['M1'],
    },
    {
      name: '宣武门',
      transfers: ['M2'],
    },
    {
      name: '菜市口',
      transfers: ['M7'],
    },
    {
      name: '陶然亭',
    },
    {
      name: '北京南站',
      transfers: ['M14'],
    },
    {
      name: '马家堡',
    },
    {
      name: '角门西',
      transfers: ['M10'],
    },
    {
      name: '公益西桥',
    },
    {
      name: '新宫',
      transfers: ['M19'],
    },
    {
      name: '西红门',
    },
    {
      name: '高米店北',
    },
    {
      name: '高米店南',
    },
    {
      name: '枣园',
    },
    {
      name: '清源路',
    },
    {
      name: '黄村西大街',
    },
    {
      name: '黄村火车站',
    },
    {
      name: '义和庄',
    },
    {
      name: '生物医药基地',
    },
    {
      name: '天宫院',
    },
  ],
};

export default M4;
