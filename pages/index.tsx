import React from 'react';
import type { NextPage } from 'next';
import { Header } from '../component/header';
import { App } from '../component/app';
import { lineMap } from '../data';
import { Toolbar } from '../component/toolbar';
import { getDay } from '../shared';

const LINE_RESTORE_KEY = 'LINE_RESTORE_KEY';

function restore() {
  try {
    return JSON.parse(localStorage.getItem(LINE_RESTORE_KEY) ?? '{}')
  } catch (e) {
    return {};
  }
}

const Home: NextPage = () => {
  const [line, setLine] = React.useState(lineMap.M1.code);
  const [day, setDay] = React.useState(getDay());

  React.useEffect(() => {
    const state = restore();

    if (state.line) {
      setLine(state.line);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem(LINE_RESTORE_KEY, JSON.stringify({ line }))
  }, [line, day])

  return (
    <>
      <Header lineCode={line} />
      <Toolbar day={day} setDay={setDay} />
      <div>
        <App day={day} setDay={setDay} lineCode={line} setLine={setLine} />
      </div>
    </>
  )
};

export default Home;
