import React from 'react';
import type { NextPage } from 'next';
import { Header } from '../component/header';
import { App } from '../component/app';
import { lineMap } from '../data';
import { Toolbar } from '../component/toolbar';
import { getDay } from '../shared';

const Home: NextPage = () => {
  const [line, setLine] = React.useState(lineMap.M1);
  const [day, setDay] = React.useState(getDay());

  return (
    <>
      <Header line={line} />
      <Toolbar day={day} setDay={setDay} />
      <div>
        <App day={day} setDay={setDay} setLine={setLine} />
      </div>
    </>
  )
};

export default Home;
