/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Instagram, Youtube, Mail, Music2, Disc, PlayCircle } from 'lucide-react';
import artistHero from './assets/images/regenerated_image_1778772302338.jpg';

const songs = [
  { id: 1, title: 'Angelina', color: 'radial-gradient(circle at 70% 30%, #1a1a2e 0%, #050505 80%), radial-gradient(circle at 20% 70%, #0d0d0d 0%, #050505 50%)', image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=600' },
  { id: 2, title: 'Kele', color: 'radial-gradient(circle at 30% 70%, #2e1a1a 0%, #050505 80%), radial-gradient(circle at 80% 20%, #0d0d0d 0%, #050505 50%)', image: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=600' },
  { id: 3, title: 'Onyx', color: 'radial-gradient(circle at 50% 50%, #1a2e1a 0%, #050505 80%), radial-gradient(circle at 10% 10%, #0d0d0d 0%, #050505 50%)', image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=600' },
  { id: 4, title: 'Echoes', color: 'radial-gradient(circle at 20% 40%, #1a1a1a 0%, #050505 80%), radial-gradient(circle at 70% 80%, #121212 0%, #050505 50%)', image: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3c?auto=format&fit=crop&q=80&w=600' },
  { id: 5, title: 'Noir', color: 'radial-gradient(circle at 80% 80%, #0a0a0a 0%, #050505 80%), radial-gradient(circle at 30% 30%, #080808 0%, #050505 50%)', image: 'https://images.unsplash.com/photo-1514533212735-5df27d970db0?auto=format&fit=crop&q=80&w=600' },
];

const gallery = [
  'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1514525253361-bee8d488fbca?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=600',
];

export default function App() {
  const [activeMood, setActiveMood] = useState('radial-gradient(circle at 70% 30%, #1a1a2a 0%, #050505 70%), radial-gradient(circle at 20% 80%, #0d0d0d 0%, #050505 50%)');
  const [isNavVisible, setIsNavVisible] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsNavVisible(latest > 100);
    });
  }, [scrollY]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const handleMouseMove = (e: React.MouseEvent) => {
    x.set(e.clientX - window.innerWidth / 2);
    y.set(e.clientY - window.innerHeight / 2);
  };

  const heroX = useTransform(mouseXSpring, (val) => val / 50);
  const heroY = useTransform(mouseYSpring, (val) => val / 50);

  return (
    <div className="relative min-h-screen bg-matte-black text-white selection:bg-white/20 font-sans" onMouseMove={handleMouseMove}>
      <div className="grain" />
      
      <motion.div 
        className="fixed inset-0 z-[-1]"
        animate={{ background: activeMood }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      <AnimatePresence>
        {isNavVisible && (
          <motion.nav 
            initial={{ y: -100, opacity: 0, x: '-50%' }}
            animate={{ y: 0, opacity: 1, x: '-50%' }}
            exit={{ y: -100, opacity: 0, x: '-50%' }}
            className="fixed top-8 left-1/2 z-[100] flex items-center gap-8 px-8 py-3 bg-charcoal/60 backdrop-blur-xl border border-white/5 rounded-full text-[10px] uppercase tracking-[0.3em]"
          >
            <a href="#home" className="hover:text-white/60 transition-colors">Home</a>
            <a href="#discography" className="hover:text-white/60 transition-colors">Discography</a>
            <a href="#manifesto" className="hover:text-white/60 transition-colors">Manifesto</a>
            <a href="#visuals" className="hover:text-white/60 transition-colors">Visuals</a>
            <a href="#contact" className="hover:text-white/60 transition-colors">Contact</a>
          </motion.nav>
        )}
      </AnimatePresence>

      <section id="home" className="relative h-screen flex flex-col justify-center px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <motion.div 
            className="absolute inset-0 opacity-60 grayscale contrast-[150%] brightness-[0.7] blur-[1px]"
            style={{ 
              backgroundImage: `url(${artistHero}), url(https://images.unsplash.com/photo-1514525253361-bee8d488fbca?auto=format&fit=crop&q=80&w=1200)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              x: heroX,
              y: heroY,
              scale: 1.1
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent" />
        </div>

        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 0.9, y: 0, filter: 'blur(0.5px)' }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="distorted-serif text-[clamp(4rem,20vw,14rem)] font-black leading-[0.8] tracking-[-0.05em] uppercase mb-8"
          >
            90NYNE
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="max-w-md"
          >
             <p className="text-white/40 text-xs uppercase tracking-[0.5em] mb-4">Independent Artist / Visionary</p>
          </motion.div>
        </div>
      </section>

      <section id="manifesto" className="py-48 px-6 md:px-20 grid md:grid-cols-2 gap-24 items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-white/20 text-[10px] uppercase tracking-[0.5em]">Poetic Manifesto</h2>
            <div className="h-[1px] w-12 bg-white/10" />
          </div>

          <div className="font-serif italic text-white/90 leading-[1.1] relative">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="block text-5xl md:text-7xl mb-8 -ml-1"
            >
              My <span className="text-white font-bold not-italic font-sans text-6xl md:text-8xl tracking-tighter">Vocal</span>
              <br />
              <span className="inline-block translate-x-12 opacity-50 text-2xl md:text-3xl mt-2">Technique</span>
            </motion.span>

            <p className="text-3xl md:text-4xl mb-12 italic opacity-90 leading-tight">
              is a visceral extension of the street. Not just noise, but 
              <span className="block mt-6 text-white font-sans font-black uppercase text-5xl md:text-7xl tracking-[-0.05em] scale-y-110">
                Storytelling
              </span>
              <span className="text-xl md:text-2xl block mt-2 opacity-40 font-light tracking-widest uppercase">etched in charcoal.</span>
            </p>

            <p className="text-white/70 max-w-sm mt-12 bg-charcoal/30 p-8 backdrop-blur-sm border border-white/5">
              We build bridges through <br />
              <span className="text-white text-4xl md:text-5xl block my-4 uppercase tracking-[-0.08em] font-sans not-italic font-black bg-white text-matte-black px-2 inline-block">Afro-Fusion</span>
              <br />
              rhythms that bleed into the infinite space between soul and synth.
            </p>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-white/5 -rotate-2 group-hover:rotate-0 transition-transform duration-700 pointer-events-none" />
          <div className="aspect-[4/5] bg-charcoal border border-white/10 relative overflow-hidden">
            <img 
              src={artistHero}
              className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-110 group-hover:brightness-100 transition-all duration-1000"
              alt="90Nyne Silhouette"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1514533212735-5df27d970db0?auto=format&fit=crop&q=80&w=800";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matte-black/60 to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-4 text-[8px] uppercase tracking-widest text-white/20 bg-matte-black p-2 border border-white/5">
            Portrait_01.raw
          </div>
        </div>
      </section>

      <section id="discography" className="py-32 bg-charcoal/20">
        <div className="px-6 md:px-20 mb-16">
          <h2 className="text-white/30 text-[10px] uppercase tracking-[0.4em] mb-4">Discography</h2>
          <p className="text-4xl distorted-serif">Latest Sounds</p>
        </div>
        
        <div className="flex gap-8 px-6 md:px-20 overflow-x-auto hide-scrollbar pb-10">
          {songs.map((song) => (
            <motion.div 
              key={song.id}
              onHoverStart={() => setActiveMood(song.color)}
              onHoverEnd={() => setActiveMood('radial-gradient(circle at 70% 30%, #1a1a2a 0%, #050505 70%), radial-gradient(circle at 20% 80%, #0d0d0d 0%, #050505 50%)')}
              whileHover={{ y: -20 }}
              className="flex-none w-[280px] md:w-[350px] group cursor-pointer"
            >
              <div className="relative aspect-square bg-charcoal mb-6 overflow-hidden border border-white/5 group-hover:border-white/20 transition-colors">
                <img 
                  src={song.image} 
                  alt={song.title}
                  className="w-full h-full object-cover film-filter"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <PlayCircle className="w-12 h-12 text-white/80" strokeWidth={1} />
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Single</p>
                  <h3 className="text-xl distorted-serif">{song.title}</h3>
                </div>
                <div className="text-white/20 group-hover:text-white transition-colors">
                  <Music2 className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="visuals" className="py-32 px-6 md:px-20">
        <h2 className="text-white/30 text-[10px] uppercase tracking-[0.4em] mb-12">Visual Echoes</h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {gallery.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative overflow-hidden group border border-white/5"
            >
              <img 
                src={img} 
                alt={`Visual ${i}`}
                className="w-full film-filter group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-[8px] uppercase tracking-widest text-white/50">Capture 00{i + 1}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer id="contact" className="pt-40 pb-20 px-6 md:px-20 bg-charcoal/10">
        <div className="border-t border-white/5 pt-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="space-y-8">
              <p className="text-white/30 text-[10px] uppercase tracking-[0.4em]">Booking & Inquiries</p>
              <a 
                href="mailto:90nynemusics@gmail.com" 
                className="text-xl md:text-3xl distorted-serif underline underline-offset-[12px] decoration-1 hover:text-white/70 transition-colors"
              >
                90nynemusics@gmail.com
              </a>
            </div>
            
            <div className="flex flex-wrap gap-8 text-[11px] uppercase tracking-[0.3em] text-white/40">
              <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" /> 90Nyne_music
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                <Music2 className="w-4 h-4" /> 90Nyne_music
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                <Youtube className="w-4 h-4" /> 90Nyne_music
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                <Disc className="w-4 h-4" /> 90Nyne_music
              </a>
            </div>
          </div>
          
          <div className="mt-40 flex justify-between items-center text-[8px] uppercase tracking-widest text-white/20">
            <p>© 2026 90NYNE RECORDS</p>
            <p>Built for the infinite</p>
          </div>
        </div>
      </footer>

      <div className="fixed left-6 top-0 bottom-0 w-[1px] bg-white/5 z-40 hidden md:block" />
      <div className="fixed right-6 top-0 bottom-0 w-[1px] bg-white/5 z-40 hidden md:block" />
    </div>
  );
}
