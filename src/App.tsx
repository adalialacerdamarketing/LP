import { Header, Footer } from './components/Layout';
import { Hero, SobreMim } from './components/Sections';
import { QuandoBuscar, AreasAtuacao, ComoFunciona, Diferenciais } from './components/Services';
import Content from './components/Content';

export default function App() {
  return (
    <div className="min-h-screen font-sans text-text-main bg-white">
      <Header />
      <main>
        <Hero />
        <QuandoBuscar />
        <SobreMim />
        <AreasAtuacao />
        <ComoFunciona />
        <Diferenciais />
        <Content />
      </main>
      <Footer />
    </div>
  );
}
