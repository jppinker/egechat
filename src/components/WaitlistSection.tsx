import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const WaitlistSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would submit to a backend
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section id="waitlist" className="py-20 px-4 md:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/5 to-transparent"></div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="bg-card border border-card-border rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 className="heading-lg text-white mb-6">
            Стань одним из первых пользователей!
          </h2>
          
          <p className="text-xl text-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Мы готовим платформу к запуску. Введи свою почту — и получи ранний доступ к бесплатной версии, 
            чтобы помочь нам улучшить её и подготовиться к экзамену!
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/50 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Твоя почта"
                  className="input-primary w-full pl-12"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="btn-accent w-full text-xl py-4"
              >
                Хочу попробовать первым!
              </button>
            </form>
          ) : (
            <div className="max-w-md mx-auto bg-brand-primary/10 border border-brand-primary/30 rounded-2xl p-6">
              <CheckCircle className="w-12 h-12 text-brand-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Спасибо за регистрацию!
              </h3>
              <p className="text-foreground/80">
                Мы отправим тебе уведомление, как только платформа будет готова к тестированию.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;