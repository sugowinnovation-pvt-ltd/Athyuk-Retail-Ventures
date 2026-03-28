import React, { useState } from 'react';
import { MapPin, Phone, Linkedin, Mail, Send, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { contactData } from '../mock';
import { toast } from 'sonner';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      toast.success('Consultation request submitted successfully!', {
        description: 'Our team will contact you within 24 hours.'
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    } else {
      toast.error('Please fill in all required fields');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              {contactData.title}
            </h1>
            <p className="text-xl text-blue-200 leading-relaxed">
              {contactData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card className="shadow-2xl border-0">
                <CardContent className="p-8 lg:p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {contactData.ctaText}
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and our team will reach out to discuss how we can help scale your brand.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full h-12 border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full h-12 border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full h-12 border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your brand and how we can help..."
                        rows={6}
                        className="w-full border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitted}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle2 className="mr-2 w-5 h-5" />
                          Submitted Successfully
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Corporate Logistics
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Athyuk Retail Ventures is actively seeking to develop its portfolio through viable partnerships with established and emerging brands. Reach out today to begin the conversation.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                        <p className="text-gray-600">{contactData.address}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Direct Phone</h3>
                        <a
                          href={`tel:${contactData.phone}`}
                          className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                          {contactData.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Linkedin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Social Proof</h3>
                        <p className="text-gray-600">
                          Join our LinkedIn community of {contactData.linkedinFollowers} followers
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Business Hours</h3>
                        <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM IST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - Can be replaced with actual map integration) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Visit Our Chennai Office
            </h2>
            <Card className="overflow-hidden shadow-2xl border-0">
              <div className="aspect-[21/9] bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-xl font-semibold text-gray-900 mb-2">Chennai, Tamil Nadu</p>
                  <p className="text-gray-600">Annanagar East Location</p>
                </div>
              </div>
            </Card>
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
              Ready to Begin Your Growth Journey?
            </h2>
            <p className="text-xl text-blue-200 mb-12 leading-relaxed">
              If you are seeking an operator with financial sagacity, operational know-how, and a vision for sustainable growth, we encourage you to reach out today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+917200757198">
                <Button className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Us Now
                </Button>
              </a>
              <a href="/services">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-6 rounded-lg shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Explore Our Services
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
