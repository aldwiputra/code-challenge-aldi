import { Route, Routes } from 'react-router-dom';
import { Dashboard, Login, NotFound, Register } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Dashboard />} />
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
