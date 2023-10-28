import { Route, Routes } from 'react-router-dom';
import { Dashboard, Login, NotFound, Register } from './pages';
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
        </Route>
        {/* <Route element={<PrivateLayout />}>
          <Route path='/add' element={<NewCategory />} />
          <Route path='/edit/:id' element={<EditCategory />} />
        </Route> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
