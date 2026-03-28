import React from 'react';
import { Award, Users } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { leadership } from '../mock';

export const LeadershipPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              {leadership.title}
            </h1>
            <p className="text-xl text-blue-200 leading-relaxed">
              The human capital driving retail excellence
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Introduction */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Unrivaled Stability
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {leadership.description}
              </p>
              <div className="space-y-6 mt-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">100% Team Retention</h3>
                    <p className="text-gray-600">
                      Unprecedented 3-4 year tenure across our core team ensures continuity and excellence
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{leadership.teamSize}</h3>
                    <p className="text-gray-600">
                      A lean, highly skilled team focused on operational excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src={leadership.image}
                  alt="Leadership Team"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-600/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Executive Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by a leadership team with deep retail expertise and strategic vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadership.executives.map((executive, index) => (
              <Card
                key={executive.id}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Profile Image Placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="text-7xl font-bold text-white/30 group-hover:scale-110 transition-transform duration-500">
                      {executive.name.charAt(0)}
                    </div>
                  </div>

                  {/* Executive Info */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {executive.name}
                    </h3>
                    <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      {executive.role}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {executive.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Strength Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
              Why Team Stability Matters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Institutional Knowledge',
                description: 'Long-term team members possess deep understanding of operational nuances, ensuring consistent excellence and reduced training overhead.'
              },
              {
                title: 'Relationship Continuity',
                description: 'Stable leadership means stronger, more reliable partnerships with brands, suppliers, and stakeholders.'
              },
              {
                title: 'Operational Excellence',
                description: 'Experienced teams execute with precision, maintaining high standards across all touchpoints without compromise.'
              },
              {
                title: 'Strategic Consistency',
                description: 'Long-term vision remains intact with minimal disruption, enabling sustained growth and brand development.'
              }
            ].map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    <span className="text-xl font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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
              Work With a Stable, Experienced Team
            </h2>
            <p className="text-xl text-blue-200 mb-12 leading-relaxed">
              Our leadership and dedicated professionals are ready to bring their expertise to your brand's growth journey.
            </p>
            <a href="/contact">
              <button className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4 rounded-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Meet Our Team
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
