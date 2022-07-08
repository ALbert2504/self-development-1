import { Routes, Route } from 'react-router-dom';

// Components
import { Header } from './components';

// Pages
import {
  Home,
  ShoesCollection,
  ShoePage,
  YTToMp3,
  ChatBot,
} from './pages';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          {/*Home*/}
          <Route path="/" element={<Home />} />

          {/*Shoes collection API*/}
          <Route path="/shoes-collection" element={<ShoesCollection />} />
          <Route path="/shoes-collection/:shoeId" element={<ShoePage />} />

          {/*YT to MP3 API*/}
          <Route path="/yt-to-mp3" element={<YTToMp3 />} />

          {/*ChatBot API*/}
          <Route path="/chat-bot" element={<ChatBot />} />
          {/*https://rapidapi.com/sameer.kumar/api/aztro/*/}
          {/*https://rapidapi.com/meme-generator-api-meme-generator-api-default/api/meme-generator/*/}
          {/*https://rapidapi.com/miguel.aka.kelter/api/url-to-pdf1/*/}
        </Routes>
      </main>
    </div>
  );
}

export default App;
