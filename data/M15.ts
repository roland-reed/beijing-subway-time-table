import { HourDepartureTime, Line, WeekDepartureTime } from '../shared';

const M15: Line = {
  name: '15 号线',
  shortName: '15',
  code: 'M15',
  color: '#653279',
  stations: [
    {
      name: '清华东路西口',
    },
    {
      name: '六道口',
    },
    {
      name: '北沙滩',
    },
    {
      name: '奥林匹克公园',
      transfers: ['M8'],
    },
    {
      name: '安立路',
    },
    {
      name: '大屯路东',
      transfers: ['M5'],
    },
    {
      name: '关庄',
    },
    {
      name: '望京西',
      transfers: ['M13'],
      get departureTime() {
        const weekdayUpDeparture: HourDepartureTime = {
          // 5: [2, 6, 11, 15, 20, 24, 29, 34, 38, 43, 47, 52, 56],
          // 6: [1, 5, 10, 14, 19, 23, 28, 31, 35, 37, 39, 41, 44, 46, 48, 51, 53, 55, 57],
          // 7: [0, 2, 4, 6, 9, 11, 13, 15, 18, 20, 22, 25, 27, 29, 31, 34, 36, 38, 40, 43, 45, 47, 49, 52, 54, 56, 59],
          // 8: [1, 3, 5, 8, 10, 12, 15, 17, 19, 21, 23, 26, 28, 30, 33, 35, 37, 39, 42, 44, 45, 48, 51, 53, 55, 57],
          // 9: [0, 2, 4, 7, 9, 11, 13, 16, 18, 20, 22, 25, 29, 34, 38, 43, 47, 52, 56],
          // 10: [1, 5, 10, 15, 19, 24, 30, 37, 43, 50, 56],
          // 11: [3, 9, 16, 22, 29, 35, 42, 48, 55],
          // 12: [1, 8, 14, 21, 27, 34, 40, 47, 53],
          // 13: [0, 6, 13, 19, 26, 32, 39, 45, 52, 58],
          // 14: [5, 11, 18, 24, 31, 37, 44, 50, 57],
          // 15: [3, 10, 16, 23, 29, 36, 42, 49, 55],
          // 16: [2, 8, 12, 16, 20, 22, 26, 28, 32, 36, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
          // 17: [
          //   0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54,
          //   56, 58,
          // ],
          // 18: [
          //   0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54,
          //   56, 58,
          // ],
          // 19: [0, 2, 4, 6, 8, 10, 14, 18, 22, 26, 30, 34, 38, 40, 42, 46, 50, 54, 58],
          // 20: [2, 6, 10, 12, 14, 18, 22, 26, 30, 34, 38, 44, 47, 50, 56, 59],
          // 21: [2, 8, 11, 14, 20, 23, 26, 32, 38, 44, 50, 56],
          // 22: [2, 8, 14, 20, 26, 32, 40, 46, 52, 58],
          // 23: [4],
        };
        const weekdayDownDeparture: HourDepartureTime = {
          5: [19, 26, 33, 40, 54],
          6: [0, 5, 10, 17, 24, 30, 37, 43, 49, 54, 59],
          7: [3, 6, 9, 13, 16, 19, 23, 26, 29, 32, 36, 39, 42, 46, 49, 52, 56, 59],
          8: [2, 6, 9, 12, 16, 19, 22, 26, 29, 32, 35, 39, 42, 46, 49, 52, 55, 59],
          9: [2, 5, 9, 12, 15, 19, 22, 25, 29, 32, 35, 39, 42, 46, 48, 52, 55, 58],
          10: [2, 6, 11, 16, 22, 28, 34, 40, 47, 54],
          11: [1, 9, 17, 25, 33, 41, 49, 57],
          12: [5, 13, 21, 29, 37, 45, 53],
          13: [1, 9, 17, 25, 33, 41, 49, 57],
          14: [5, 13, 21, 29, 37, 45, 53],
          15: [1, 5, 9, 17, 25, 33, 41, 45, 49, 57],
          16: [5, 13, 21, 27, 35, 42, 47, 52, 56, 59],
          17: [2, 6, 9, 12, 16, 19, 22, 25, 29, 32, 35, 39, 42, 45, 49, 52, 55, 59],
          18: [2, 5, 9, 12, 15, 19, 22, 25, 28, 32, 36, 39, 42, 45, 49, 52, 56, 58],
          19: [2, 5, 9, 12, 15, 18, 22, 25, 29, 32, 35, 39, 42, 45, 49, 51, 56],
          20: [1, 6, 11, 17, 23, 29, 35, 41, 47, 53, 59],
          21: [5, 11, 17, 23, 30, 37, 44, 51],
          22: [0, 10, 20, 30, 41, 51],
        };
        const weekendUpDeparture: HourDepartureTime = {
          // 5: [1, 8, 15, 22, 29, 36, 43, 50, 57],
          // 6: [4, 10, 17, 24, 30, 38, 45, 52, 59],
          // 7: [6, 13, 20, 27, 34, 41, 48, 55],
          // 8: [2, 9, 15, 22, 29, 36, 43, 50, 57],
          // 9: [4, 11, 18, 25, 32, 39, 46, 53],
          // 10: [0, 7, 14, 21, 28, 34, 41, 48, 55],
          // 11: [2, 9, 16, 23, 30, 37, 44, 51, 58],
          // 12: [5, 12, 19, 26, 33, 40, 47, 53],
          // 13: [0, 7, 14, 21, 28, 35, 42, 49, 56],
          // 14: [3, 10, 17, 24, 31, 38, 45, 52, 59],
          // 15: [6, 12, 19, 26, 30, 35, 40, 47, 50, 56],
          // 16: [1, 4, 10, 15, 22, 27, 32, 37, 42, 47, 52, 57],
          // 17: [2, 7, 12, 17, 22, 27, 32, 36, 41, 46, 51, 56],
          // 18: [1, 6, 11, 16, 21, 26, 31, 36, 43, 50, 53, 57],
          // 19: [4, 7, 11, 18, 24, 31, 38, 45, 52, 59],
          // 20: [6, 13, 20, 27, 34, 41, 48, 55],
          // 21: [2, 9, 16, 23, 30, 37, 43, 50, 57],
          // 22: [4, 11, 18, 25, 32, 39, 40, 54],
          // 23: [3],
        };
        const weekendDownDeparture: HourDepartureTime = {
          5: [18],
          // 6: [12, 19, 25, 33, 40, 47, 54],
          // 7: [1, 8, 15, 22, 29, 36, 43, 49, 53, 57],
          // 8: [3, 7, 11, 17, 24, 29, 34, 39, 44, 49, 54, 59],
          // 9: [4, 9, 14, 19, 24, 29, 34, 39, 44, 49, 54, 59],
          // 10: [4, 9, 13, 18, 23, 28, 33, 38, 43, 49, 54],
          // 11: [0, 5, 11, 16, 22, 26, 29, 33, 38, 44, 49, 55],
          // 12: [0, 6, 11, 16, 21, 24, 27, 33, 38, 44, 49, 55],
          // 13: [0, 6, 11, 17, 22, 28, 33, 39, 44, 50, 55],
          // 14: [1, 6, 12, 17, 23, 28, 34, 39, 45, 50, 56],
          // 15: [1, 6, 12, 17, 23, 28, 34, 39, 45, 50, 56],
          // 16: [1, 7, 12, 18, 23, 29, 34, 40, 45, 51, 56],
          // 17: [2, 7, 13, 18, 24, 29, 35, 40, 45, 51, 56],
          // 18: [2, 7, 13, 18, 24, 29, 35, 40, 46, 51, 57],
          // 19: [2, 8, 13, 19, 24, 30, 35, 41, 46, 53],
          // 20: [0, 7, 14, 21, 27, 34, 41, 48, 55],
          // 21: [2, 9, 15, 23, 30, 37, 44, 51, 58],
          // 22: [5, 12, 19, 26, 32, 39, 46, 53],
          // 23: [0, 8, 15, 21, 28, 35, 42, 49, 56],
          // 24: [3, 11],
          22: [8],
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
      name: '望京',
      transfers: ['M14'],
    },
    {
      name: '望京东',
    },
    {
      name: '崔各庄',
    },
    {
      name: '马泉营',
    },
    {
      name: '孙河',
    },
    {
      name: '国展',
    },
    {
      name: '花梨坎',
    },
    {
      name: '后沙峪',
    },
    {
      name: '南法信',
    },
    {
      name: '石门',
    },
    {
      name: '顺义',
    },
    {
      name: '俸伯',
    },
  ],
};

export default M15;
