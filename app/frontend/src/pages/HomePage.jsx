import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Settings, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { heroData, advantages, stats } from '../mock';

const iconMap = {
  TrendingUp: TrendingUp,
  Settings: Settings,
  Building2: Building2
};

export const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroData.heroImage}
            alt="Strategic Partnership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/75" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-5 backdrop-blur-sm">
              <span className="text-xs uppercase tracking-widest text-blue-200">Keyword</span>
              <span className="text-sm md:text-base font-semibold text-white">{heroData.keyword}</span>
            </div>
            <div className="mb-6">
              <img
                src={heroData.logo}
                alt="Athyuk logo"
                className="h-16 md:h-20 w-auto rounded-md bg-white/90 p-2 shadow-lg"
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700">
              {heroData.headline}
            </h1>
            <p className="inline-block text-base md:text-lg text-emerald-200 mb-5 font-semibold tracking-wide rounded-md bg-emerald-500/15 border border-emerald-300/30 px-4 py-2 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
              {heroData.subheadline}
            </p>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              {heroData.description}
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {heroData.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm md:text-base text-white/95 bg-slate-800/60 border border-white/20 rounded-full px-4 py-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
              <Link to="/about">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  Explore Our Vision
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 rounded-lg shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '28px 28px'
            }}
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-5 md:p-6 shadow-lg"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 leading-none">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-blue-100 font-medium text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Athyuk Advantage Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Athyuk Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why Partner With Us?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage) => {
              const IconComponent = iconMap[advantage.icon];
              return (
                <Card
                  key={advantage.id}
                  className="group border border-slate-200 bg-white/95 backdrop-blur-sm hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-6 shadow-lg transition-transform duration-300 group-hover:scale-105">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                To thrive in India's complex retail sector
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A brand requires a robust engine for growth. Athyuk provides the fiscal intelligence and operational backbone necessary to turn vision into market share.
              </p>
              <ul className="space-y-4">
                {[
                  'Disciplined financial oversight and sustainable expansion',
                  'Deep regional market expertise with precision execution',
                  'Physical and technological framework for rapid scaling',
                  'Proven track record since 2017'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/services">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    Explore Our Services
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwzfHxjb3Jwb3JhdGUlMjBwYXJ0bmVyc2hpcHxlbnwwfHx8fDE3NzQ2NzkxNjV8MA&ixlib=rb-4.1.0&q=85"
                  alt="Partnership"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Scale Your Brand?
            </h2>
            <p className="text-xl text-blue-200 mb-12 leading-relaxed">
              Whether you're an international brand seeking a strategic foothold in Tamil Nadu or a domestic brand looking to institutionalize and scale, we offer a proven pathway to success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-6 rounded-lg shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
