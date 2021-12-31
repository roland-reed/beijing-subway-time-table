import type { NextPage } from 'next';
import { Header } from '../component/header';
import { App } from '../component/app';

const Home: NextPage = () => (
  <>
    <Header />
    <div>
      <App />
    </div>
  </>
);

export default Home;
