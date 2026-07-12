import { motion } from 'motion/react';
import { HeartCrack, Frown, Activity, CloudRain, Calendar, Ear, RefreshCw, Sparkles } from 'lucide-react';

const wpLink = "https://wa.me/5583999282550";

const reasons = [
  {
    icon: <HeartCrack className="w-8 h-8 text-white" />,
    title: "Relacionamentos",
    text: "Você sente que se doa demais nas relações e, mesmo assim, vive se sentindo sozinho ou incompreendido?"
  },
  {
    icon: <Frown className="w-8 h-8 text-white" />,
    title: "Luto",
    text: "Lidar com a perda de alguém especial pode paralisar, e retomar a rotina parece um desafio insuportável?"
  },
  {
    icon: <Activity className="w-8 h-8 text-white" />,
    title: "Ansiedade",
    text: "Preocupações constantes e sensação de alerta tiram seu foco e drenam sua energia diariamente?"
  },
  {
    icon: <CloudRain className="w-8 h-8 text-white" />,
    title: "Depressão",
    text: "Falta de ânimo, tristeza frequente e um vazio que persiste mesmo quando tudo parece “estar bem”?"
  }
];

const areas = [
  {
    title: "Ansiedade",
    image: "https://adalialacerdapsicologa.com.br/wp-content/uploads/2025/07/mulher-tendo-crise-de-ansiedade-durante-o-trabalho-_1_169891.webp"
  },
  {
    title: "Autoestima",
    image: "https://adalialacerdapsicologa.com.br/wp-content/uploads/2025/07/portrait-jeune-femme-vetue-blanc-posant-dans-miroir_23-2149444995.avif"
  },
  {
    title: "Luto e Depressão",
    image: "https://adalialacerdapsicologa.com.br/wp-content/uploads/2025/07/o-que-nao-fazer-depois-de-uma-dr-1564073057849_v2_900x506.jpg"
  }
];

const differentials = [
  {
    icon: <Ear className="w-10 h-10 text-primary" />,
    title: "Escuta Personalizada",
    text: "Atendimento centrado na sua história, rotina e necessidades emocionais."
  },
  {
    icon: <RefreshCw className="w-10 h-10 text-primary" />,
    title: "Acompanhamento Constante",
    text: "Evolução emocional com apoio contínuo a cada etapa do seu processo."
  },
  {
    icon: <Sparkles className="w-10 h-10 text-primary" />,
    title: "Transformações Reais",
    text: "Foco em mudanças consistentes, com impacto duradouro na sua qualidade de vida."
  }
];

export function QuandoBuscar() {
  return (
    <section className="py-24 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-main sm:text-4xl">Quando buscar psicoterapia?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#d5a587] rounded-xl p-8 text-center shadow-sm text-white"
            >
              <div className="flex justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-white/90 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AreasAtuacao() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-main sm:text-4xl">Minhas áreas de atuação</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-96 rounded-2xl overflow-hidden group shadow-lg"
            >
              <img src={area.image} alt={area.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <h3 className="text-2xl font-bold text-white tracking-wide">{area.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 lg:mb-0 text-center lg:text-left"
          >
            <h2 className="text-3xl font-bold text-text-main sm:text-4xl mb-2">Como funciona meu atendimento</h2>
            <h3 className="text-xl font-semibold text-primary mb-6">Consulta Online</h3>
            <div className="space-y-4 text-text-muted leading-relaxed mb-8 text-left max-w-2xl mx-auto lg:mx-0">
              <p>A terapia online oferece a mesma qualidade e dedicação do atendimento presencial, com a praticidade de ser realizada onde você estiver.</p>
              <p>É uma opção segura e eficiente, especialmente para quem busca flexibilidade de horários e prefere evitar deslocamentos sem abrir mão do acompanhamento profissional.</p>
              <p>As consultas acontecem por videochamada, em ambiente virtual protegido, garantindo sigilo e acolhimento.</p>
              <p>Essa modalidade é ideal para manter a constância no processo terapêutico, mesmo em dias corridos, permitindo que você cuide da sua saúde emocional de forma prática e acessível.</p>
            </div>
            <a href={wpLink} target="_blank" rel="noreferrer" className="inline-flex justify-center items-center w-full sm:w-auto px-8 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover transition-colors">
              <Calendar className="w-5 h-5 mr-2" />
              Quero agendar
            </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <img 
              src="https://adalialacerdapsicologa.com.br/wp-content/uploads/2026/03/2026-02-23-1-e1773586196503.webp" 
              alt="Adália Lacerda em atendimento" 
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Diferenciais() {
  return (
    <section className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(#e9e2d5_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-main sm:text-4xl max-w-2xl mx-auto">Uma escuta empática que respeita sua história</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {differentials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-bg-light rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-text-main mb-4">{item.title}</h3>
              <p className="text-text-muted leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
