import React from 'react';
import { Image } from 'lucide-react';

function PosterBanner() {
  return (
    <div className="relative bg-indigo-900 text-white overflow-hidden py-12">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="relative container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-800 rounded-full px-4 py-1 mb-6 border border-indigo-600">
          <Image className="w-4 h-4 text-pink-400" />
          <span className="text-xs font-semibold tracking-widest uppercase text-indigo-200">Poster Presentation</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Poster <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Showcase</span>
        </h1>
        <p className="text-lg md:text-xl text-indigo-200 max-w-2xl mx-auto font-light">
          Explore innovative research and ideas presented by participants from around the world.
        </p>
      </div>
    </div>
  );
}

export default PosterBanner;
