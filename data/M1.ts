import { Line, DepartureMinute, HourDepartureTime, WeekDepartureTime } from '../shared';

const M1: Line = {
  name: '1 号线 | 八通线',
  shortName: '1',
  code: 'M1',
  color: '#A4343A',
  stations: [
    {
      name: '苹果园',
      transfers: ['M6', 'M26'],
      get departureTime() {
        const normalDayDeparture: HourDepartureTime = {
          4: [57],
          5: [1, 4, 8, 13, 16, 20, 24, 28, 30, 33, 36, 39, 42, 46, 49, 53, 56, 59],
          6: [
            2,
            5,
            8,
            11,
            '13->果园',
            15,
            18,
            21,
            '23->果园',
            25,
            27,
            31,
            '33->果园',
            35,
            37,
            40,
            42,
            45,
            48,
            51,
            54,
            '56->果园',
            58,
          ],
          7: [
            0,
            2,
            '4->果园',
            6,
            '8->土桥',
            10,
            '12->果园',
            14,
            16,
            '18->土桥',
            '20->果园',
            22,
            24,
            26,
            '28->果园',
            30,
            '32->土桥',
            34,
            '36->果园',
            38,
            '40->土桥',
            42,
            '44->土桥',
            '46->果园',
            48,
            '50->土桥',
            52,
            '54->土桥',
            56,
            '58->土桥',
          ],
          21: [0, '4->四惠', 7, '11->四惠', 14, 21, 28, 35, 42, 49, 56],
          22: [3, 10, 17, 25, 33, 41, 51, '57->四惠东'],
          23: ['4->四惠东', '11->四惠东', '18->四惠东', '25->四惠东', '33->四惠东'],
        };
        const weekendDeparture: HourDepartureTime = {};
        const upDepartureTime: WeekDepartureTime = {
          monday: normalDayDeparture,
          tuesday: normalDayDeparture,
          wednesday: normalDayDeparture,
          thursday: normalDayDeparture,
          friday: normalDayDeparture,
          saturday: weekendDeparture,
          sunday: weekendDeparture,
        };

        return {
          up: upDepartureTime,
          down: upDepartureTime,
        };
      },
    },
    {
      name: '古城',
    },
    {
      name: '八角游乐园',
    },
    {
      name: '八宝山',
    },
    {
      name: '玉泉路',
    },
    {
      name: '五棵松',
    },
    {
      name: '万寿路',
    },
    {
      name: '公主坟',
      transfers: ['M10'],
    },
    {
      name: '军事博物馆',
      transfers: ['M9'],
    },
    {
      name: '木樨地',
      transfers: ['M16'],
    },
    {
      name: '南礼士路',
    },
    {
      name: '复兴门',
      transfers: ['M2'],
    },
    {
      name: '西单',
      transfers: ['M4'],
    },
    {
      name: '天安门西',
    },
    {
      name: '天安门东',
    },
    {
      name: '王府井',
      transfers: ['M8'],
    },
    {
      name: '东单',
      transfers: ['M5'],
    },
    {
      name: '建国门',
      transfers: ['M2'],
    },
    {
      name: '永安里',
      transfers: ['M17'],
    },
    {
      name: '国贸',
      transfers: ['M10'],
    },
    {
      name: '大望路',
      transfers: ['M14'],
    },
    {
      name: '四惠',
    },
    {
      name: '四惠东',
    },
    {
      name: '高碑店',
    },
    {
      name: '传媒大学',
    },
    {
      name: '双桥',
    },
    {
      name: '管庄',
    },
    {
      name: '八里桥',
    },
    {
      name: '通州北苑',
    },
    {
      name: '果园',
    },
    {
      name: '九棵树',
    },
    {
      name: '梨园',
    },
    {
      name: '临河里',
    },
    {
      name: '土桥',
    },
    {
      name: '花庄',
      transfers: ['M7'],
    },
    {
      name: '环球度假区',
      transfers: ['M7'],
    },
  ],
};

export default M1;
