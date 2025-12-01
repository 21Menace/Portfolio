import React from 'react';
import { SOCIALS } from '../constants';
import { Send } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="min-h-screen flex items-center bg-slate-50 dark:bg-black pt-24 pb-32 relative border-t border-slate-200 dark:border-slate-900 transition-colors duration-300 snap-start">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 justify-between">
          
          {/* Left Side: Social Links & Info */}
          <div className="md:w-1/2">
            <RevealOnScroll>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Let's Work Together</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
                Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and interesting ideas.
              </p>
              
              <div className="flex gap-4 mb-10">
                {SOCIALS.map((social) => (
                  <a 
                    key={social.platform}
                    href={social.url}
                    className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-neon-green hover:border-neon-green hover:shadow-[0_0_15px_rgba(0,255,65,0.3)] transition-all duration-300 hover:-translate-y-1 shadow-sm"
                    aria-label={social.platform}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Side: Contact Form */}
          <div className="md:w-1/2 max-w-lg">
            <RevealOnScroll delay={200}>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-500 dark:text-slate-400">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all shadow-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all shadow-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-500 dark:text-slate-400">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all resize-none shadow-sm"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-neon-green text-black font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-neon-green/20"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </RevealOnScroll>
          </div>
        </div>

        {/* Footer Credits */}
        <div className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-900 text-center text-slate-500 dark:text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} SuleimanDev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;