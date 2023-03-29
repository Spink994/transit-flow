import { Layout } from '../../components';
import { Hero, Logistics, WhatWeDo } from './components';

function Home() {
  return (
    <Layout>
      <>
        <Hero />
        <WhatWeDo />
        <Logistics />
      </>
    </Layout>
  );
}

export default Home;
