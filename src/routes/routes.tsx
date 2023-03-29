import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routesConst from './routes.const';
import { Skeleton } from '../../src/components';

const Home = lazy(() => import('../pages/home'));
const Project = lazy(() => import('../pages/project'));
const About = lazy(() => import('../pages/about'));
const Contact = lazy(() => import('../pages/contact'));
const NotFound = lazy(() => import('../pages/notFound'));

function App() {
  return (
    <Suspense fallback={<Skeleton />}>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path={routesConst.project} element={<Project />} />
          <Route path={routesConst.about} element={<About />} />
          <Route path={routesConst.contact} element={<Contact />} />
          <Route path={routesConst.notFound} element={<NotFound />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
