import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="heading-lg text-white mb-4">
          Посмотри, как это работает!
        </h2>
        <p className="text-xl text-foreground/80 mb-12">
          Демонстрация платформы EGEChat в действии
        </p>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30 animate-glow"></div>
          <div className="relative bg-card border border-card-border rounded-3xl p-4 shadow-2xl">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/Z1dsSOTZ2oA"
                title="EGEChat Demo"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;