import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Watch from './pages/Watch';
import Channel from './pages/Channel';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="app-shell">
      <TopBar />
      <div className="app-body">
        <Sidebar />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/watch/:videoId" element={<Watch />} />
            <Route path="/channel/:channelId" element={<Channel />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
