import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Sports from './pages/sports/Sports';
import Movies from './pages/movies/Movies';
import TvShows from './pages/tvShows/TvShows';
import More from './pages/more/More';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Sports' element={<Sports />} />
          <Route path='/Movies' element={<Movies />} />
          <Route path='/Tv' element={<TvShows />} />
          <Route path='/More' element={<More />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
