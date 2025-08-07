import React from 'react';
import Logo from './Logo';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-secondary/10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-secondary/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Logo at top-left */}
        <div className="absolute top-8 left-8">
          <Logo />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-24 lg:mt-0">
          {/* Left Side - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="heading-xl text-white leading-tight">
                Твой личный помощник по математике для{' '}
                <span className="gradient-text">ОГЭ и ЕГЭ</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl">
                EGEChat — это не просто бот. Это твой персональный учитель с ИИ, который поможет достичь максимального балла на экзамене.
              </p>
            </div>
            
            <div className="space-y-4">
              <button className="btn-accent text-lg md:text-xl w-full sm:w-auto">
                Присоединиться к списку ожидания
              </button>
              
              <p className="text-base md:text-lg text-foreground/60 max-w-lg">
                Будь первым, кто попробует платформу бесплатно — мы пришлём тебе ранний доступ!
              </p>
            </div>
          </div>
          
          {/* Right Side - Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30 animate-glow"></div>
              <img 
                src="/lovable-uploads/287e009e-9cf1-4b17-a583-094a140c8dd4.png" 
                alt="Счастливые российские студенты изучают математику с ноутбуком" 
                className="relative w-full max-w-lg h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;