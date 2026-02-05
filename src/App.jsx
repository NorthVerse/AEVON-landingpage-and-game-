import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';
import GamePage from './pages/GamePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-aevon-charcoal text-aevon-white overflow-x-hidden selection:bg-purple-500/30">
          <Header />
          <main>
            <Hero />
            <Mission />
            <ProductShowcase />
          </main>
          <Footer />
        </div>
      } />
      <Route path="/game" element={<GamePage />} />
    </Routes>
  );
}

export default App;
