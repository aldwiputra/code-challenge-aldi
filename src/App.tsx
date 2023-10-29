import { Route, Routes } from 'react-router-dom';
import { Dashboard, Detail, Login, NotFound, Register } from './pages';
import { AuthLayout, ProtectedLayout } from './pages/layouts';

function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        <Route element={<ProtectedLayout />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/entries/:id' element={<Detail />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
