import React from 'react';

export default function Home() {
  return (
    // 1. Glossy Animated Background
    <div className="relative min-h-screen w-full flex items-center justify-center p-6 overflow-hidden bg-gray-900">
      
      {/* Glossy background orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>

      {/* 2. Glassmorphism Card (The Glossy Box) */}
      <div className="relative z-10 max-w-2xl w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl overflow-hidden text-white">
        
        {/* Header Section */}
        <div className="relative h-40 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Content Section */}
        <div className="px-8 pb-8 text-center relative">
          
          {/* Profile Image */}
          <div className="flex justify-center -mt-16 mb-4">
            <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-700 shadow-lg overflow-hidden">
              <img 
                src="https://undetectable.ai/blog/wp-content/uploads/2025/04/create_AI_image-1.jpg" // REPLACE THIS WITH YOUR IMAGE URL
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <h1 className="text-4xl font-bold tracking-tight">Muska</h1>
          <p className="text-purple-300 font-medium mb-2">Software Developer</p>
          <p className="text-gray-300 text-sm mb-8 max-w-md mx-auto">
           EXPLORING THE WORLD OF ARTIFICIAL INTELLEGENCE AND MACHINE LEARNING.
          </p>

          {/* Glossy Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a 
              href="https://www.linkedin.com/in/syed-muska-165793366//" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Connect on LinkedIn
            </a>
            <a 
              href="https://github.com/muska123-web" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg"
            >
              Explore GitHub
            </a>
          </div>

          {/* Projects */}
          <div className="border-t border-white/10 pt-8 mt-4 text-left">
            <h2 className="font-bold text-xl mb-4 text-center text-white">Featured Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 backdrop-blur-sm">
<h3 className="font-bold text-lg">
  🤖 AI Smart Study Assistant
</h3>

<p className="text-sm text-gray-400 mb-3">
  AI-powered study assistant that generates quizzes, summaries, and flashcards
  from uploaded PDF and Word documents.
</p>

<a
  href="https://github.com/muska123-web/ai-smart-study-assistant"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-400 text-sm hover:underline"
>
  View on GitHub →
</a>

<div className="flex flex-wrap gap-2 mb-4">
  <span className="px-2 py-1 text-xs bg-blue-500/20 rounded">
    React Native
  </span>

  <span className="px-2 py-1 text-xs bg-green-500/20 rounded">
    Node.js
  </span>

  <span className="px-2 py-1 text-xs bg-purple-500/20 rounded">
    OpenAI
  </span>
</div>
              </div>
              <div className="p-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 backdrop-blur-sm">
            
                <h3 className="font-bold text-lg">
   DEEPFAKE DETECTION APP
</h3>

<p className="text-sm text-gray-400 mb-3">
Deep learning model built with TensorFlow and CNN to classify images as real or AI-generated through image preprocessing and feature extraction.
</p>

<a
  href="https://github.com/muska123-web/deepfake-detection-app"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-400 text-sm hover:underline"
>
  View on GitHub →
</a>

<div className="flex flex-wrap gap-2 mb-4">
  <span className="px-2 py-1 text-xs bg-yellow-500/20 rounded">
    Python
  </span>

  <span className="px-2 py-1 text-xs bg-orange-500/20 rounded">
    TensorFlow
  </span>

  <span className="px-2 py-1 text-xs bg-blue-500/20 rounded">
    CNN
  </span>

 
</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}