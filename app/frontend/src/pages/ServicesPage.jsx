import React from 'react';
import { Briefcase, Building, LineChart } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { services } from '../mock';

const iconMap = {
  Briefcase: Briefcase,
  Building: Building,
  LineChart: LineChart
};

export const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              Professionalizing the Retail Lifecycle
            </h1>
            <p className="text-xl text-blue-200 leading-relaxed">
              Success in the retail world is the result of specialized infrastructure and focused operational expertise. Athyuk Retail Ventures provides the momentum required for flawless market execution.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Image */}
                  <div className={`${isEven ? '' : 'lg:col-start-2'} relative group`}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    {/* Decorative Element */}
                    <div className={`absolute ${isEven ? '-bottom-6 -right-6' : '-bottom-6 -left-6'} w-48 h-48 bg-blue-600/10 rounded-2xl -z-10`} />
                  </div>

                  {/* Content */}
                  <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                    <Card className="border-0 shadow-none bg-transparent">
                      <CardContent className="p-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6 transform hover:scale-110 hover:rotate-3 transition-all duration-500">
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                        <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                          Service {index + 1}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                          {service.title}
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Our Services Matter */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Our Services Matter
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              In the complex Indian retail landscape, success requires more than just operational capability—it demands strategic vision, financial discipline, and deep market understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: '01', title: 'Reduced Risk', description: 'Fiscal intelligence minimizes market entry risks' },
              { number: '02', title: 'Local Expertise', description: 'Deep regional knowledge ensures smooth operations' },
              { number: '03', title: 'Rapid Scaling', description: 'Infrastructure ready for immediate expansion' },
              { number: '04', title: 'Brand Integrity', description: 'Consistent standards across all locations' }
            ].map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold text-blue-100 mb-4 group-hover:text-blue-200 transition-colors duration-300">
                    {item.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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
              Ready to Transform Your Retail Vision?
            </h2>
            <p className="text-xl text-blue-200 mb-12 leading-relaxed">
              Let's discuss how our services can accelerate your brand's growth in the Indian market.
            </p>
            <a href="/contact">
              <button className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4 rounded-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Schedule a Consultation
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
