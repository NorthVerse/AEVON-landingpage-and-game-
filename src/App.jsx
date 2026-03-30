import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';
import GamePage from './pages/GamePage';
import { DottedSurface } from '@/components/ui/dotted-surface';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="relative min-h-screen bg-aevon-charcoal text-aevon-white overflow-x-hidden selection:bg-purple-500/30">
          <DottedSurface className="opacity-40" />
          <div className="relative z-10">
            <Header />
            <main>
              <Hero />
              <Mission />
              <ProductShowcase />
            </main>
            <Footer />
          </div>
        </div>
      } />
      <Route path="/game" element={<GamePage />} />
    </Routes>
  );
}

export default App;
