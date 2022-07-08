import {FC} from 'react';
import {Routes, Route} from "react-router-dom";

// Pages
import Auth from './pages/Auth';
import Home from './pages/Home';
import Mastery from './pages/Mastery';
import Profile from "./pages/Profile";

// Components
import Header from './components/common/Header';

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Home />} />
          <Route path="/mastery" element={<Mastery />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
