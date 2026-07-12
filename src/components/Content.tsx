import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Calendar } from 'lucide-react';

const faqs = [
  {
    q: "Como funciona a primeira sessão?",
    a: "A primeira sessão de terapia é um encontro de acolhimento e avaliação, durando cerca de 40 a 50 minutos, focado em conhecer o paciente e estabelecer vínculo. O psicólogo explica seu método, sigilo e regras, enquanto investiga os motivos da busca, histórico de vida e expectativas do paciente."
  },
  {
    q: "Qual a frequência dos atendimentos?",
    a: "A frequência ideal da terapia é geralmente semanal, pois permite constância para processar emoções e garantir a evolução do tratamento. Sessões quinzenais podem ser adotadas em fases de manutenção ou alta."
  },
  {
    q: "A terapia é sigilosa?",
    a: "Sim, a terapia é estritamente sigilosa. O sigilo é um princípio ético fundamental garantido pelo Código de Ética Profissional do Psicólogo, assegurando que as informações compartilhadas nas sessões (presenciais ou online) não sejam reveladas a terceiros."
  },
  {
    q: "Qual a diferença entre psicólogo e psiquiatra?",
    a: "A principal diferença é a formação e o tratamento: o psiquiatra é médico, podendo prescrever medicamentos e solicitar exames para tratar desequilíbrios químicos, enquanto o psicólogo é formado em psicologia, focando na terapia, comportamento e emoções. Ambos cuidam da saúde mental, muitas vezes de forma complementar."
  },
  {
    q: "Atende convênios?",
    a: "Não."
  }
];

function FAQItem({ q, a }: { q: string, a: string, key?: number | string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-text-main pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 text-text-muted transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-text-muted leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Content() {
  const wpLink = "https://wa.me/5583999282550";

  return (
    <>
      {/* FAQ Section */}
      <section id="duvida" className="py-24 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-main sm:text-4xl">Dúvidas frequentes que costumo responder</h2>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem key={index} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-bg-alt text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-main sm:text-4xl mb-6">Agende a sua consulta</h2>
          <p className="text-lg text-text-muted mb-10 leading-relaxed">
            Clique no botão abaixo para dar o primeiro passo no pré-agendamento da sua consulta. A nossa equipe de atendimento estará disponível para explicar todos os detalhes e orientá-lo da melhor forma.
          </p>
          <a href={wpLink} target="_blank" rel="noreferrer" className="inline-flex justify-center items-center w-full sm:w-auto px-8 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover transition-colors">
            <Calendar className="w-5 h-5 mr-2" />
            Agendar minha consulta
          </a>
        </div>
      </section>
    </>
  );
}
