import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Memory from './pages/Memory';
import HomeMain from './pages/HomeMain';
import History from './pages/History';
import PastEvents from './pages/PastEvents';
import UpcomingEvents from './pages/UpcomingEvents';
import OfficeBearers from './pages/OfficeBearers';
import Members from './pages/Members';
import TopDonors from './pages/TopDonors';
import Registration from './pages/Registration';
import Donations from './pages/Donations';
import TransitionWrapper from './components/TransitionWrapper';
import MemoryMembers from './pages/MemoryMembers';

function App() {
  return (
    <BrowserRouter>
      <TransitionWrapper>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/memory" element={<Memory />} />
          
<Route path="/past-members" element={<MemoryMembers />} />
          <Route path="/main" element={<HomeMain />}>
            <Route path="history" element={<History />} />
            <Route path="past-events" element={<PastEvents />} />
            <Route path="upcoming-events" element={<UpcomingEvents />} />
            <Route path="office-bearers" element={<OfficeBearers />} />
            <Route path="members" element={<Members />} />
            <Route path="top-donors" element={<TopDonors />} />
            <Route path="new-registration" element={<Registration />} />
            <Route path="donations" element={<Donations />} />
          </Route>
        </Routes>
      </TransitionWrapper>
    </BrowserRouter>
  );
}

export default App;
