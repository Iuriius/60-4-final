import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home/home';
import { Rates } from '../pages/rates/rates';
import { Layout } from './layout/layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/rates" element={<Rates />} />
        </Route>
      </Routes>
    </>
  );
};
