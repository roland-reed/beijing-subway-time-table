import { HourDepartureTime, Line, WeekDepartureTime } from '../shared';

const M13: Line = {
  name: '13 号线',
  shortName: '13',
  code: 'M13',
  color: '#F4DA40',
  stations: [
    {
      name: '西直门',
      transfers: ['M2', 'M4'],
    },
    {
      name: '大钟寺',
    },
    {
      name: '知春路',
      transfers: ['M10'],
    },
    {
      name: '五道口',
    },
    {
      name: '上地',
    },
    {
      name: '清河站',
    },
    {
      name: '西二旗',
      transfers: ['M27'],
    },
    {
      name: '龙泽',
    },
    {
      name: '回龙观',
    },
    {
      name: '霍营',
      transfers: ['M8'],
    },
    {
      name: '立水桥',
      transfers: ['M5'],
    },
    {
      name: '北苑',
    },
    {
      name: '望京西',
      transfers: ['M15'],
    },
    {
      name: '芍药居',
      transfers: ['M10'],
    },
    {
      name: '光熙门',
      get departureTime() {
        const weekdayUpDeparture: HourDepartureTime = {
          5: [21, 31, 40, 46, 52, 58],
          6: [4, 10, 15, 20, 27, 30, 34, 37, 42, 48, 51, 55],
          7: [1, 4, 7, 13, 16, 20, 27, 30, 33, 37, 41, 45, 49, 52, 55, 57],
          8: [0, 3, 6, 8, 11, 14, 17, 19, 22, 25, 28, 30, 33, 36, 39, 41, 44, 47, 50, 52, 55, 58],
          9: [1, 3, 6, 9, 11, 14, 16, 19, 21, 24, 26, 29, 32, 35, 37, 41, 44, 46, 49, 59],
          10: [5, 10, 16, 21, 27, 32, 38, 43, 49, 54],
          11: [0, 5, 8, 13, 18, 23, 29, 35, 40, 46, 51, 57],
          12: [4, 10, 17, 23, 30, 36, 43, 49, 56],
          13: [2, 9, 15, 22, 28, 35, 41, 48, 54],
          14: [1, 7, 14, 20, 27, 33, 40, 46, 53, 59],
          15: [6, 12, 19, 25, 32, 35, 38, 45, 48, 51, 58],
          16: [4, 11, 17, 21, 24, 30, 37, 43, 50, 53, 56],
          17: [3, 5, 9, 16, 20, 23, 27, 32, 36, 40, 44, 48, 52, 55, 57],
          18: [0, 3, 6, 8, 11, 14, 17, 19, 22, 25, 28, 30, 33, 36, 39, 41, 44, 47, 50, 52, 55, 58],
          19: [0, 3, 6, 8, 11, 14, 16, 19, 22, 24, 27, 30, 32, 35, 38, 40, 43, 46, 48, 51, 57],
          20: [2, 8, 13, 19, 24, 27, 32, 38, 42, 47, 51, 55, 59],
          21: [3, 7, 11, 15, 19, 23, 28, 35, 43, 47, 53],
          22: [1, 11, 19, 29, 35, 43, 53],
          23: [1, 11, 18, 26, 34],
        };
        const weekdayDownDeparture: HourDepartureTime = {
          5: [39, 47, 55],
          6: [3, 9, 14, 20, 25, 30, 36, 42, 46, 50, 55, 58],
          7: [3, 7, 11, 15, 20, 24, 28, 33, 38, 42, 45, 49, 53, 57],
          8: [0, 3, 5, 8, 11, 13, 16, 19, 22, 24, 27, 30, 33, 35, 38, 41, 44, 46, 49, 52, 55, 57],
          9: [
            0,
            3,
            6,
            8,
            11,
            14,
            17,
            19,
            '22->立水桥',
            25,
            '27->立水桥',
            30,
            '33->立水桥',
            35,
            '38->立水桥',
            41,
            '44->立水桥',
            47,
            '49->立水桥',
            52,
            '55->立水桥',
            58,
          ],
          10: ['1->立水桥', 3, 10, 16, 22, 29, 35, 39, 42, 48, 55],
          11: [1, 8, '11->立水桥', 14, 21, '24->立水桥', 27, 34, 40, 47, 53, '57->立水桥'],
          12: [0, 6, 13, 19, 26, 32, 39, 45, 52, 58],
          13: [5, 11, 18, 24, 31, 37, 44, 50, 57],
          14: [3, 10, 16, 23, 29, 36, 42, 49, 55],
          15: [2, 8, 15, 21, 28, 34, 40, 47, 50, 54, 58],
          16: [4, 9, 14, 20, 25, 31, 36, 41, 47, 53, 58],
          17: [4, 9, 14, 17, 22, 25, 30, 33, 38, 41, 46, 49, 54, 57],
          18: [2, 5, 8, 11, 13, 16, 19, 22, 24, 27, 30, 33, 35, 38, 41, 44, 46, 49, 52, 55, '57->立水桥'],
          19: [
            0,
            3,
            '6->立水桥',
            8,
            11,
            '14->立水桥',
            16,
            19,
            '22->立水桥',
            24,
            27,
            '30->立水桥',
            32,
            35,
            '38->立水桥',
            40,
            43,
            '46->立水桥',
            48,
            51,
            '54->立水桥',
            56,
            59,
          ],
          20: ['2->立水桥', 4, 10, 16, 22, 28, 34, '37->立水桥', 40, 46, 52, 58],
          21: ['1->立水桥', 4, 10, '13->立水桥', 16, 22, '25->立水桥', 29, '33->立水桥', 37, 45, 53],
          22: [0, '5->立水桥', 9, 17, 26, 36, 46, 54, '59->回龙观'],
          23: ['9->回龙观', '19->回龙观', '29->回龙观', '39->回龙观', '44->立水桥', '49->回龙观'],
        };
        const weekendUpDeparture: HourDepartureTime = {
          5: [21, 29, 38, 44, 50, 57],
          6: [3, 15, 20, 27, 30, 35, 39, 47, 55],
          7: [2, 9, 16, 23, 30, 37, 44, 51, 58],
          8: [5, 10, 16, 21, 27, 32, 38, 43, 49, 54],
          9: [0, 5, 11, 16, 22, 27, 33, 38, 44, 49, 54],
          10: [0, 6, 11, 17, 22, 28, 33, 39, 44, 50, 55],
          11: [1, 6, 12, 17, 23, 28, 34, 39, 45, 50, 56],
          12: [1, 7, 12, 18, 23, 29, 34, 40, 45, 51, 56],
          13: [2, 7, 13, 18, 24, 29, 35, 40, 46, 51, 57],
          14: [2, 8, 13, 19, 24, 30, 35, 41, 46, 52, 57],
          15: [3, 8, 14, 19, 25, 30, 36, 41, 47, 52, 58],
          16: [3, 9, 14, 20, 25, 31, 36, 42, 47, 53, 59],
          17: [4, 9, 15, 20, 26, 31, 37, 42, 48, 53, 59],
          18: [4, 10, 15, 21, 26, 32, 37, 43, 48, 54, 59],
          19: [5, 10, 16, 21, 27, 32, 38, 43, 49, 54],
          20: [0, 5, 11, 16, 22, 27, 33, 38, 44, 49, 55],
          21: [0, 6, 11, 17, 22, 28, 33, 39, 44, 50, 55],
          22: [1, 6, 12, 17, 23, 29, 36, 43, 50, 57],
          23: [4, 11, 18, 25, 34],
        };
        const weekendDownDeparture: HourDepartureTime = {
          5: [39, 47, 55],
          6: [3, 10, 17, 24, 29, 35, 40, 46, 51, 57],
          7: [2, 11, 18, 24, 30, 38, 45, 51, 57],
          8: [6, 13, 19, 25, 30, 36, 41, 47, 52, 58],
          9: [3, 9, 14, 20, 25, 31, 36, 42, 47, 53, 58],
          10: [4, 9, 15, 20, 26, 31, 42, 48, 53, 59],
          11: [4, 10, 15, 21, 26, 32, 37, 43, 48, 54, 59],
          12: [5, 10, 16, 21, 27, 32, 38, 43, 49, 54],
          13: [0, 5, 11, 16, 22, 27, 33, 38, 44, 49, 55],
          14: [0, 6, 11, 17, 22, 28, 33, 39, 44, 50, 55],
          15: [1, 6, 12, 17, 23, 28, 34, 39, 45, 50, 56],
          16: [1, 7, 12, 18, 23, 29, 34, 40, 45, 51, 56],
          17: [2, 7, 13, 18, 24, 29, 35, 40, 46, 51, 57],
          18: [2, 8, 13, 19, 24, 30, 35, 41, 46, 52, 57],
          19: [3, 8, 14, 19, 25, 30, 36, 41, 47, 52, 58],
          20: [3, 9, 14, 20, 25, 31, 36, 42, 48, 55],
          21: [2, '5->立水桥', 9, 16, 23, 30, '33->立水桥', 37, 43, 50, '55->立水桥'],
          22: [0, '5->立水桥', 10, 18, '22->立水桥', 26, 33, 41, 49, 54, '59->立水桥'],
          23: ['5->回龙观', '14->回龙观', '23->回龙观', '27->立水桥', '32->回龙观', '41->回龙观', '49->回龙观'],
        };
        const upDepartureTime: WeekDepartureTime = {
          monday: weekdayUpDeparture,
          tuesday: weekdayUpDeparture,
          wednesday: weekdayUpDeparture,
          thursday: weekdayUpDeparture,
          friday: weekdayUpDeparture,
          saturday: weekendUpDeparture,
          sunday: weekendUpDeparture,
        };
        const downDepartureTime: WeekDepartureTime = {
          monday: weekdayDownDeparture,
          tuesday: weekdayDownDeparture,
          wednesday: weekdayDownDeparture,
          thursday: weekdayDownDeparture,
          friday: weekdayDownDeparture,
          saturday: weekendDownDeparture,
          sunday: weekendDownDeparture,
        };

        return {
          up: upDepartureTime,
          down: downDepartureTime,
        };
      },
    },
    {
      name: '柳芳',
    },
    {
      name: '东直门',
      transfers: ['M2', 'M34'],
    },
  ],
};

export default M13;
