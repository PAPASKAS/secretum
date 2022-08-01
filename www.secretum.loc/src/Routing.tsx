import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import AuthLayout from 'src/components/layouts/AuthLayout';
import Home from 'src/pages/Home';
import NoMatch from 'src/pages/NoMatch';
import Register from 'src/pages/Register';

export default function Routing(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}
