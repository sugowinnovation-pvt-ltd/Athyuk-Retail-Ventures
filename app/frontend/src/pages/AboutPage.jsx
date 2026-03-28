import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { aboutData } from '../mock';

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              {aboutData.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={aboutData.image}
                    alt="Athyuk Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Element */}
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-600/10 rounded-2xl -z-10" />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/10 rounded-2xl -z-10" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Journey Since 2017
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {aboutData.description}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We focus on building a resilient portfolio where each brand benefits from our localized market knowledge and institutionalized management systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Vital Signs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              Corporate Vital Signs
            </h2>
            <Card className="shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody>
                      {aboutData.vitals.map((vital, index) => (
                        <tr
                          key={index}
                          className={`border-b last:border-b-0 hover:bg-blue-50 transition-colors duration-300 ${
                            index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                          }`}
                        >
                          <td className="px-8 py-6 font-bold text-gray-900 text-lg w-1/3">
                            {vital.category}
                          </td>
                          <td className="px-8 py-6 text-gray-700 text-lg">
                            {vital.details}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our Utmost Vision
            </h2>
            <p className="text-xl text-blue-200 leading-relaxed mb-8">
              To partner with established domestic and international brands through a high-performance franchise model, creating long-term, viable partnerships that transform retail concepts into market leaders.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-300 mb-2">2017</div>
                <div className="text-blue-100">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-300 mb-2">100%</div>
                <div className="text-blue-100">Team Retention</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-300 mb-2">7+</div>
                <div className="text-blue-100">Years Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            What Drives Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Strategic Partnerships',
                description: 'We believe in building long-term, mutually beneficial relationships that drive sustainable growth for all stakeholders.'
              },
              {
                title: 'Operational Excellence',
                description: 'Our commitment to maintaining the highest standards ensures consistent brand integrity across all touchpoints.'
              },
              {
                title: 'Market Intelligence',
                description: 'Deep local knowledge combined with global best practices enables us to navigate complex retail landscapes effectively.'
              }
            ].map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
