import { Layout } from '../../components';
import {
  Blog,
  Experts,
  GetInTouch,
  Hero,
  Logistics,
  Opportunity,
  Testimonials,
  Transporting,
  WhatWeDo,
} from './components';

function Home() {
  return (
    <Layout>
      <>
        <Hero />
        <WhatWeDo />
        <Logistics />
        <Transporting />
        <Testimonials />
        <Opportunity />
        <Experts />
        <GetInTouch />
        <Blog />
      </>
    </Layout>
  );
}

export default Home;
