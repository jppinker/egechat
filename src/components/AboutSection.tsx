import React from 'react';
import { Bot, Calendar, BarChart3, Play, FileText, Upload, Database, Trophy, Users, DollarSign, Flame } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: "Чат-система, которая будет твоим учителем",
    description: "Выбери аватар, и он станет твоим наставником"
  },
  {
    icon: Calendar,
    title: "Каждый день — персональный план от твоего наставника-аватара",
    description: "Адаптивный план обучения под твой уровень"
  },
  {
    icon: BarChart3,
    title: "Обучение, основанное на данных и твоём уровне",
    description: "Анализ слабых мест и персонализация"
  },
  {
    icon: Play,
    title: "Видео и статьи по каждой мелочи — для любого уровня",
    description: "Полная библиотека обучающих материалов"
  },
  {
    icon: FileText,
    title: "Реальные экзаменационные задачи с мгновенной обратной связью",
    description: "Практика на настоящих заданиях ОГЭ и ЕГЭ"
  },
  {
    icon: Upload,
    title: "Загрузи решение — получи комментарии от своего наставника",
    description: "Детальный разбор твоих решений"
  },
  {
    icon: Database,
    title: "Банк из 5000+ задач ФИПИ",
    description: "Огромная база реальных экзаменационных заданий"
  },
  {
    icon: Trophy,
    title: "Лидерборды, streak-и, математические игры",
    description: "Учись играя и соревнуйся с друзьями"
  },
  {
    icon: Users,
    title: "Учись с мемами и общайся с другими учениками",
    description: "Весёлое и увлекательное обучение"
  },
  {
    icon: DollarSign,
    title: "Гораздо дешевле репетитора",
    description: "Доступная цена для каждой семьи"
  },
  {
    icon: Flame,
    title: "Поддержка ОГЭ, ЕГЭ (база и профиль)",
    description: "Полная подготовка к любому экзамену"
  }
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-white mb-8">
            EGEChat — это не просто бот. Это твой личный учитель, который всегда рядом.
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            Он знает, на чём ты застрял, подскажет, что учить дальше, и поможет дойти до максимального балла.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
