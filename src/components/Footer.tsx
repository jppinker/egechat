import React from 'react';
import { Youtube, Music, Heart } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-4 md:px-8 border-t border-card-border/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <Logo className="opacity-80" />
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-8">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-foreground/70 hover:text-brand-accent transition-colors duration-300 group"
            >
              <Youtube className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg font-medium">YouTube Канал</span>
            </a>
            
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-foreground/70 hover:text-brand-accent transition-colors duration-300 group"
            >
              <Music className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg font-medium">TikTok</span>
            </a>
          </div>
          
          {/* Love Message */}
          <div className="flex justify-center items-center space-x-2 text-foreground/60">
            <span className="text-lg">Разрабатывается с любовью для школьников и их родителей</span>
            <Heart className="w-5 h-5 text-red-400 animate-pulse" />
          </div>
          
          {/* Copyright */}
          <div className="text-foreground/50 text-sm">
            © 2024 EGEChat. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;