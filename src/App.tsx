import React, { useState } from 'react';
import {
  Sparkles,
  Play,
  Brain,
  Wand2,
  Palette,
  Zap,
  ChevronDown,
  ChevronUp,
  Star,
  Bot,
  Building2,
  Globe2,
  Rocket,
  Shield
} from 'lucide-react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const companies = [
    { icon: <Building2 className="w-6 h-6" />, name: "QuantumCorp" },
    { icon: <Globe2 className="w-6 h-6" />, name: "NeuralSphere" },
    { icon: <Rocket className="w-6 h-6" />, name: "FutureAI" },
    { icon: <Shield className="w-6 h-6" />, name: "MetaVision" },
  ];

  const features = [
    {
      title: "Neural Art Generation",
      description: "Transform text into stunning visuals with our quantum-powered AI engine",
      image: "https://images.unsplash.com/photo-1633536726481-465c3676851d?auto=format&fit=crop&q=80&w=1920&h=1080",
    },
    {
      title: "Style Transfer Matrix",
      description: "Apply millions of artistic styles with our advanced neural networks",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1920&h=1080",
    },
    {
      title: "Quantum Processing",
      description: "Experience lightning-fast generation with our quantum computing core",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1920&h=1080",
    },
    {
      title: "Creative Intelligence",
      description: "Let AI enhance your creative process with intelligent suggestions",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1920&h=1080",
    },
  ];

  const benefits = [
    {
      icon: <Brain className="w-8 h-8 text-neon-blue" />,
      title: "Quantum AI Understanding",
      description: "Neural networks that comprehend context at the deepest level, creating exactly what you envision."
    },
    {
      icon: <Wand2 className="w-8 h-8 text-neon-purple" />,
      title: "Real-time Generation",
      description: "Microsecond image generation powered by quantum computing architecture."
    },
    {
      icon: <Palette className="w-8 h-8 text-neon-pink" />,
      title: "Infinite Style Matrix",
      description: "Access millions of art styles through our advanced style transfer algorithms."
    },
    {
      icon: <Bot className="w-8 h-8 text-neon-cyan" />,
      title: "Neural Creativity",
      description: "AI that thinks outside the box, creating truly unique and innovative visuals."
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Neural Input",
      description: "Describe your vision in any language. Our AI understands context, emotion, and style."
    },
    {
      step: 2,
      title: "Quantum Processing",
      description: "Advanced AI matrices process your input through billions of parameters."
    },
    {
      step: 3,
      title: "Reality Synthesis",
      description: "Watch as your ideas materialize into stunning, photo-realistic imagery."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "AI Artist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "The neural processing is mind-blowing. My art has evolved beyond imagination! 🎨"
    },
    {
      name: "Marcus Rodriguez",
      role: "Digital Architect",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "Quantum-fast generation with unmatched creativity. A game-changer! 🚀"
    },
    {
      name: "Emma Thompson",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "The future of creative AI is here. Simply revolutionary! ✨"
    }
  ];

  const faqs = [
    {
      question: "How accurate is the AI in interpreting prompts?",
      answer: "Our AI has been trained on millions of images and text descriptions, achieving a 98% accuracy rate in interpreting user prompts. It understands context, style preferences, and even subtle artistic nuances."
    },
    {
      question: "What image formats and resolutions are supported?",
      answer: "We support all major formats (PNG, JPEG, WebP) and can generate images up to 4K resolution. You can also specify custom dimensions for your specific needs."
    },
    {
      question: "Can I edit or modify the generated images?",
      answer: "Yes! All generated images can be refined through our built-in editor or downloaded for editing in your preferred software. You can also regenerate variations of any image."
    },
    {
      question: "How do you handle image rights and ownership?",
      answer: "You own 100% of the rights to any image you generate using Imaginify. Our terms of service ensure that you have complete commercial and creative freedom with your creations."
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-dark">
      {/* Hero Section */}
      <div className="fixed inset-0 cyber-grid -z-10 opacity-20"></div>
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-neural opacity-10 mix-blend-screen"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8 floating">
              <Sparkles className="w-5 h-5 text-neon-blue" />
              <span className="text-neon-blue font-medium glow-text">Quantum AI Technology</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Neural Text to
              <br />Reality Engine
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl">
              Transform thoughts into hyper-realistic imagery using quantum-powered AI. Where imagination meets technological singularity.
            </p>

            <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden neon-border">
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center cursor-pointer"
                   onClick={() => setIsPlaying(!isPlaying)}>
                {!isPlaying && (
                  <div className="w-20 h-20 glass rounded-full flex items-center justify-center transform transition-all hover:scale-110 group">
                    <Play className="w-8 h-8 text-neon-blue ml-1 group-hover:text-neon-purple transition-colors" />
                  </div>
                )}
              </div>
              <video 
                className="w-full"
                src="https://player.vimeo.com/external/449759940.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
                poster="https://images.unsplash.com/photo-1704921430429-e91c8e788726?auto=format&fit=crop&q=80&w=1920"
                controls={isPlaying}
                playsInline
              />
            </div>

            <button className="mt-12 glass text-neon-blue text-lg font-semibold px-12 py-6 rounded-full hover:bg-neon-blue hover:text-cyber-dark transform transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]">
              Initialize Creation Engine
            </button>

            {/* Company Logos */}
            <div className="mt-24 w-full">
              <p className="text-gray-400 mb-8 text-sm uppercase tracking-wider">Trusted by Industry Leaders</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {companies.map((company, index) => (
                  <div key={index} className="glass-strong px-6 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-cyber-light/20 transition-all duration-300 group">
                    <div className="text-gray-400 group-hover:text-neon-blue transition-colors">
                      {company.icon}
                    </div>
                    <span className="text-gray-400 font-medium group-hover:text-white transition-colors">
                      {company.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Features Section with Images */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-light to-cyber-dark opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-5xl font-bold text-center mb-16">
            Quantum <span className="text-neon-cyan glow-text">Features</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl hover-card">
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-transparent to-transparent z-10"></div>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-neon-cyan transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative section-gradient-1">
        <div className="absolute inset-0 hexagon-bg opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-5xl font-bold text-center mb-16">
            Quantum <span className="text-neon-blue glow-text">Advantages</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-strong p-8 rounded-2xl hover-card">
                <div className="mb-6 floating">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative section-gradient-2">
        <div className="absolute inset-0 cyber-grid-dense opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-5xl font-bold text-center mb-16">
            Neural <span className="text-neon-purple glow-text">Process</span>
          </h2>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink transform -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {howItWorks.map((step, index) => (
                <div key={index} className="relative">
                  <div className="glass-strong rounded-2xl p-8 hover-card relative z-10">
                    <div className="w-16 h-16 glass text-neon-purple rounded-full flex items-center justify-center text-xl font-bold mb-6 floating">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative section-gradient-3">
        <div className="absolute inset-0 hexagon-bg opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-5xl font-bold text-center mb-16">
            Neural <span className="text-neon-pink glow-text">Network</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-strong p-8 rounded-2xl hover-card">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"></div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover relative"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg text-white">{testimonial.name}</h3>
                    <p className="text-neon-blue">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-neon-cyan fill-current" />
                  ))}
                </div>
                <p className="text-gray-300">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative section-gradient-4">
        <div className="absolute inset-0 cyber-grid-dense opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-5xl font-bold text-center mb-16">
            Neural <span className="text-neon-cyan glow-text">Knowledge</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="w-full glass-strong p-6 rounded-xl hover:scale-105 transition-all duration-300 flex items-center justify-between group"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="font-semibold text-left group-hover:text-neon-cyan transition-colors">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-neon-cyan" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neon-cyan" />
                  )}
                </button>
                
                {expandedFaq === index && (
                  <div className="glass-strong px-6 py-4 rounded-b-xl mt-1">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-10"></div>
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-5xl font-bold mb-8">Ready to Enter the Matrix?</h2>
          <p className="text-xl mb-12 text-gray-300">Join the neural network of creators shaping the future of digital art.</p>
          <button className="glass-strong text-neon-blue text-lg font-semibold px-12 py-6 rounded-full hover:bg-neon-blue hover:text-cyber-dark transform transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]">
            Initialize Neural Connection
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;