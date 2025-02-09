import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Sports from './pages/sports/Sports';
import Movies from './pages/movies/Movies';
import TvShows from './pages/tvShows/TvShows';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Sports' element={<Sports />} />
          <Route path='/Movies' element={<Movies />} />
          <Route path='/Tv Shows' element={<TvShows />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
