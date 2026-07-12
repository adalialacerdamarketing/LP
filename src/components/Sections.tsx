import { motion } from 'motion/react';
import { Calendar, MessageCircle } from 'lucide-react';

const wpLink = "https://wa.me/5583999282550";

export function Hero() {
  return (
    <section className="bg-bg-light relative overflow-hidden pt-16 lg:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-end">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 lg:mb-24 text-center lg:text-left"
          >
            <span className="text-sm font-semibold tracking-wider text-accent uppercase block mb-4">UM ESPAÇO SEGURO PARA VOCÊ</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-main leading-tight mb-6">
              Acolhimento Psicológico para o <span className="text-accent">Dia a Dia</span>
            </h1>
            <p className="text-lg text-text-muted mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Psicoterapia online para adultos fundamentada na Psicanálise. Suporte especializado para enfrentar a ansiedade, depressão e o luto no seu tempo e onde você estiver.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a href={wpLink} target="_blank" rel="noreferrer" className="inline-flex justify-center items-center w-full sm:w-auto px-8 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover transition-colors">
                <Calendar className="w-5 h-5 mr-2" />
                Agendar consulta
              </a>
              <a href="#como-funciona" className="inline-flex justify-center items-center w-full sm:w-auto px-8 py-4 border border-gray-300 text-base font-medium rounded-md text-text-main bg-white hover:bg-gray-50 transition-colors">
                Como funciona meu atendimento
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl transform translate-x-10 translate-y-10"></div>
            <img 
              src="https://adalialacerdapsicologa.com.br/wp-content/uploads/2026/03/foto-adalia.png" 
              alt="Adália Lacerda" 
              className="relative z-10 w-full max-w-lg mx-auto object-cover block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SobreMim() {
  return (
    <section id="sobre-mim" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 lg:mb-0 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              <img 
                src="https://adalialacerdapsicologa.com.br/wp-content/uploads/2026/03/foto-adalia-2.jpeg" 
                alt="Psicóloga Adália Lacerda" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="text-sm font-semibold tracking-wider text-accent uppercase block mb-4">UM ESPAÇO SEGURO PARA VOCÊ</span>
            <h2 className="text-3xl font-bold text-text-main sm:text-4xl mb-2">Adália Lacerda</h2>
            <p className="text-lg font-medium text-text-muted mb-8">CRP 13/9176</p>
            
            <div className="space-y-4 text-text-muted leading-relaxed mb-8 text-left max-w-2xl mx-auto lg:mx-0">
              <p>Sou a psicóloga <strong className="font-semibold text-text-main">Adália Lacerda</strong> (CRP/PB 13/9176) e trabalho com adultos que estão passando por momentos difíceis.</p>
              <p>Muitas pessoas chegam até mim carregando <strong className="font-semibold text-text-main">ansiedade constante, crises inesperadas, depressão ou o peso do luto</strong> — aquele sentimento de estar perdido, sem saber por onde começar.</p>
              <p>Através da <strong className="font-semibold text-text-main">Psicanálise</strong>, ofereço um espaço de escuta qualificada e acolhimento genuíno, onde você pode compreender o que está sentindo e encontrar novos recursos internos para lidar com a dor.</p>
              <p>Com formação pela <strong className="font-semibold text-text-main">Universidade Federal da Paraíba</strong> e especialização em <strong className="font-semibold text-text-main">Saúde Coletiva e Psicologia Hospitalar</strong>, meu objetivo é ajudar você a ressignificar seus sentimentos e construir caminhos possíveis no seu próprio ritmo.</p>
              <p>O atendimento é <strong className="font-semibold text-text-main">100% online</strong>, respeitando sua privacidade e sua disponibilidade.</p>
            </div>

            <a href={wpLink} target="_blank" rel="noreferrer" className="inline-flex justify-center items-center w-full sm:w-auto px-8 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover transition-colors">
              <MessageCircle className="w-5 h-5 mr-2" />
              Quero falar com Adália
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
