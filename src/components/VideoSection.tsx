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
                src="https://vk.com/video_ext.php?oid=-232034222&id=456239025&hd=2"
                title="EGEChat Demo — VK Video"
                className="w-full h-full"
                loading="lazy"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
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