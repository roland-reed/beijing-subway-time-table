import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../component/header';
import { App } from '../component/app';
import { Toolbar } from '../component/toolbar';
import { DAY, Day } from '../shared';
import { reducer } from '../shared/reducer';
import styles from './index.module.css';

const LINE_RESTORE_KEY = 'LINE_RESTORE_KEY';

function restore() {
  try {
    return {
      ...JSON.parse(localStorage.getItem(LINE_RESTORE_KEY) ?? '{"line":"M1","station":0}'),
      day: DAY[new Date().getDay()],
    };
  } catch (e) {
    return {
      line: 'M1',
      station: 0,
      day: DAY[new Date().getDay()],
    };
  }
}

const Home: NextPage = () => {
  const [show, setShow] = React.useState(false);
  const [state, dispatch] = React.useReducer(reducer, restore());

  const setLine = React.useCallback(function setLine(line: string): void {
    dispatch({
      type: 'update',
      payload: {
        line,
      },
    });
  }, []);

  const setDay = React.useCallback(function setDay(day: Day): void {
    dispatch({
      type: 'update',
      payload: {
        day,
      },
    });
  }, []);

  const setSelected = React.useCallback(function setSelected(station: number): void {
    dispatch({
      type: 'update',
      payload: {
        station,
      },
    });
  }, []);

  React.useEffect(() => {
    localStorage.setItem(LINE_RESTORE_KEY, JSON.stringify({ ...state, day: undefined }));
  }, [state]);

  React.useEffect(() => {
    setShow(true);

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').then((registration) => {
        registration
          .update()
          .then(() => console.log('Service Worker updated'))
          .catch(() => console.log('Service Worker update failed'));
      });
    }
  }, []);

  return (
    <div className={styles.app}>
      <Head>
        <title>北京地铁时刻表</title>
      </Head>
      {show && <Header lineCode={state.line} />}
      {show && <Toolbar day={state.day} setDay={setDay} />}
      <div>
        {show && (
          <App
            day={state.day}
            setDay={setDay}
            selected={state.station}
            setSelected={setSelected}
            lineCode={state.line}
            setLine={setLine}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
