import { useState } from 'react';
import { Menu, X, MessageCircle, Instagram, Mail, Phone, Clock, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

const wpLink = "https://wa.me/5583999282550";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="/">
              <img className="h-12 w-auto" src="https://adalialacerdapsicologa.com.br/wp-content/uploads/2025/07/logoadalia-e1753616505569.png" alt="Adália Lacerda" />
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#sobre-mim" className="text-text-muted hover:text-primary transition-colors">Sobre mim</a>
            <a href="#como-funciona" className="text-text-muted hover:text-primary transition-colors">Como funciona</a>
            <a href="#duvida" className="text-text-muted hover:text-primary transition-colors">Dúvidas frequentes</a>
          </nav>
          <div className="hidden md:flex">
            <a href={wpLink} target="_blank" rel="noreferrer" className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover transition-colors">
              <MessageCircle className="w-4 h-4 mr-2" />
              Preciso de ajuda
            </a>
          </div>
          <div className="flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-text-muted hover:text-primary">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-white border-t absolute w-full z-40 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#sobre-mim" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-text-muted hover:text-primary hover:bg-gray-50 rounded-md">Sobre mim</a>
            <a href="#como-funciona" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-text-muted hover:text-primary hover:bg-gray-50 rounded-md">Como funciona</a>
            <a href="#duvida" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-text-muted hover:text-primary hover:bg-gray-50 rounded-md">Dúvidas frequentes</a>
            <a href={wpLink} target="_blank" rel="noreferrer" className="block px-3 py-2 text-base font-medium text-primary font-semibold hover:bg-gray-50 rounded-md">Preciso de ajuda</a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <img 
              src="https://adalialacerdapsicologa.com.br/wp-content/uploads/2025/07/logoadalia-e1753616505569.png" 
              alt="Adália Lacerda" 
              className="h-16 w-auto mb-4"
            />
          </div>
          <div>
            <h4 className="font-bold text-text-main mb-4">Atendimento</h4>
            <ul className="space-y-3 text-text-muted text-sm">
              <li className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                De segunda a sexta
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                09h às 20h
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-text-main mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href={wpLink} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-bg-light flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/adalialacerda.psi" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-bg-light flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-text-main mb-4">Entre em contato</h4>
            <ul className="space-y-3 text-text-muted text-sm">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="truncate">contato@adalialacerdapsicologa.com.br</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>(83) 99928-2550</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-text-muted text-center md:text-left mb-4 md:mb-0">
            Adália Lacerda Psicóloga - CRP 13/9176 <br/>
            2026 – Todos os Direitos Reservados
          </p>
          <div className="flex flex-col items-center md:items-end">
            <span className="text-xs text-gray-400 mb-2">Desenvolvido por</span>
            <img 
              src="https://adalialacerdapsicologa.com.br/wp-content/uploads/2026/03/logo-WC-png-02.png" 
              alt="Web Converte" 
              className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <a 
        href={wpLink} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform z-50"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </footer>
  );
}
