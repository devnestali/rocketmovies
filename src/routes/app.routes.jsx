import { Routes, Route }  from 'react-router-dom';

import { CreateMovie } from '../pages/CreateMovie';
import { MoviePreview } from '../pages/MoviePreview';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/createmovie' element={<CreateMovie />} />
      <Route path='/moviepreview/:id' element={<MoviePreview />} />
    </Routes>
  )
}