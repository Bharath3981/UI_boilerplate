
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from '../modules/dashboard/pages/Dashboard';
import Playlist from '../modules/playlist/pages/Playlist';
import Media from '../modules/media/pages/Media';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/media" element={<Media />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;