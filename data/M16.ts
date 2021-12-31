import { Line } from '../shared';

const M16: Line = {
  name: '16 号线',
  shortName: '16',
  code: 'M16',
  color: '#6BA539',
  stations: [
    {
      name: '北安河',
    },
    {
      name: '温阳路',
    },
    {
      name: '稻香湖路',
    },
    {
      name: '屯佃',
    },
    {
      name: '永丰',
    },
    {
      name: '永丰南',
    },
    {
      name: '西北旺',
    },
    {
      name: '马连洼',
    },
    {
      name: '农大南路',
    },
    {
      name: '西苑',
      transfers: ['M4'],
    },
    {
      name: '万泉河桥',
    },
    {
      name: '苏州街',
      transfers: ['M10'],
    },
    {
      name: '苏州桥',
    },
    {
      name: '万寿寺',
    },
    {
      name: '国家图书馆',
      transfers: ['M4', 'M9'],
    },
    {
      name: '甘家口',
    },
    {
      name: '玉渊潭东门',
    },
  ],
};

export default M16;
