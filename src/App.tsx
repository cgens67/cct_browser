import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, PlayCircle, Smartphone, Terminal, Hammer, Box, ChevronRight, Download, X } from 'lucide-react';

export default function App() {
  const [selectedFeature, setSelectedFeature] = useState<{title: string, details: string} | null>(null);
  const workflowRef = useRef<HTMLElement>(null);

  const scrollToWorkflow = () => {
    workflowRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      title: "Stable Core",
      desc: "Built on Chromium 126.0 Stable for industry-leading security and web standard support.",
      details: "Our engine is based on Chromium 126.0.6478.122. It includes the latest security patches, optimized V8 JavaScript engine, and full support for modern web standards including WebGPU, WebAssembly SIMD, and advanced PWA features. We maintain a focus on stability while ensuring compatibility with the vast Android ecosystem.",
      color: "bg-md-primary-container",
      icon: <Hammer className="text-md-on-primary-container" />
    },
    {
      title: "Cloud Forge",
      desc: "Fully automated Ninja/GN build process running in high-performance GitHub runners.",
      details: "The build pipeline runs on GitHub Actions using a custom space-maximization algorithm. Because a standard Chromium build requires over 150GB of disk space and significant CPU, our CI/CD specifically prunes standard runner bloat to ensure successful compilation on shared infrastructure, using Ninja and GN configurations optimized for ARM64.",
      color: "bg-md-secondary-container",
      icon: <Terminal className="text-md-on-secondary-container" />
    },
    {
      title: "Custom ID",
      desc: "Smart patching scripts automatically rename the package ID to com.cct.browser.",
      details: "Package namespace conversion is handled via deep-tree recursive patching. This is more than just a manifest change; our scripts traverse the Chromium source to update JNI bridges, Java package declarations, and GN configuration files. This ensures that the generated APK is correctly identified as 'com.cct.browser' by the Android system.",
      color: "bg-md-tertiary-container",
      icon: <Box className="text-md-on-tertiary-container" />
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-blue-200">
      {/* MD3 Nav Bar / Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-[var(--color-md-surface)]/80 backdrop-blur-md flex items-center justify-between px-6 z-50 border-b border-[var(--color-md-surface-variant)]">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-md-primary rounded-xl flex items-center justify-center text-white shadow-sm">
            <Smartphone size={20} />
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-md-on-primary-container">CCT Browser</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-3">
          <span className="px-3 py-1 bg-md-secondary-container text-md-on-secondary-container rounded-full text-xs font-semibold">
            v126 Stable
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-800 border border-green-200 rounded-full text-xs font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            CI Ready
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-20 px-6 max-w-6xl mx-auto">
        
        {/* Hero Section - Expressive Display */}
        <section className="py-12 md:py-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="mb-8 p-6 bg-md-tertiary-container rounded-[2.5rem] shadow-xl shadow-md-tertiary/10"
          >
            <Smartphone size={48} className="text-md-on-tertiary-container" />
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-md-on-primary-container"
          >
            Forge Your Own <br />
            <span className="text-md-primary italic">Chromium</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-md-secondary max-w-2xl mb-10 leading-relaxed font-medium"
          >
            A high-performance Android browser engine, fully automated. built as <code className="text-md-primary font-bold">com.cct.browser</code> on every commit.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="bg-md-primary text-md-on-primary px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] cursor-pointer">
              <Download size={20} />
              Download APK
            </button>
            <button 
              onClick={scrollToWorkflow}
              className="bg-md-surface-variant text-md-on-secondary-container px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-opacity-80 transition-all cursor-pointer"
            >
              <PlayCircle size={20} />
              Setup Guide
            </button>
          </motion.div>
        </section>

        {/* Feature Grid - MD3 Filled Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {features.map((f, i) => (
            <MD3Card 
              key={i}
              icon={f.icon}
              title={f.title}
              desc={f.desc}
              color={f.color}
              onClick={() => setSelectedFeature({ title: f.title, details: f.details })}
            />
          ))}
        </div>

        {/* Technical Path - MD3 List Group */}
        <section 
          ref={workflowRef}
          className="bg-md-surface-variant/30 rounded-[2.5rem] p-8 md:p-12 border border-[var(--color-md-surface-variant)]"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md">
              <Terminal size={24} className="text-md-primary" />
            </div>
            <h2 className="text-2xl font-bold text-md-on-primary-container">Deployment Workflow</h2>
          </div>
          
          <div className="space-y-4">
            <WorkflowItem 
              num="01" 
              title="Maximize Disk Environment" 
              content="Standard GitHub runners are limited to 14GB. We prune pre-installed SDKs to free 100GB+ for the Chromium source."
            />
            <WorkflowItem 
              num="02" 
              title="Fetch Source & Sync" 
              content="Retrieving the Android target via depot_tools, syncing all third-party dependencies required for ARM64 builds."
            />
            <WorkflowItem 
              num="03" 
              title="Source Renaming Patch" 
              content="Automated bash scripts find-and-replace all instances of org.chromium for com.cct.browser across the tree."
            />
            <WorkflowItem 
              num="04" 
              title="Ninja compilation" 
              content="Optimized release build using LTO and minimal symbols to fit within CI time limits."
            />
          </div>
        </section>
      </main>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedFeature && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[2rem] w-full max-w-xl p-8 shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedFeature(null)}
                className="absolute top-6 right-6 p-2 bg-md-surface-variant rounded-full hover:bg-opacity-80 transition-all text-md-on-secondary-container"
              >
                <X size={20} />
              </button>
              
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-md-on-primary-container mb-2">{selectedFeature.title}</h3>
                <div className="h-1 w-12 bg-md-primary rounded-full"></div>
              </div>
              
              <div className="text-lg text-md-secondary leading-relaxed font-medium">
                {selectedFeature.details}
              </div>
              
              <div className="mt-8 flex justify-end">
                <button 
                  onClick={() => setSelectedFeature(null)}
                  className="bg-md-primary text-md-on-primary px-6 py-3 rounded-full font-bold"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FAB - Material Floating Action Button */}
      <a 
        href="https://github.com" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-md-primary-container text-md-on-primary-container rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all z-50 group"
      >
        <Github size={28} className="group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
}

interface MD3CardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
  onClick: () => void;
  key?: React.Key;
}

function MD3Card({ icon, title, desc, color, onClick }: MD3CardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className={`${color} p-8 rounded-[2rem] flex flex-col gap-6 shadow-sm border border-black/5 h-full cursor-pointer group`}
    >
      <div className="w-12 h-12 bg-white/50 backdrop-blur rounded-2xl flex items-center justify-center group-hover:bg-white transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm font-medium opacity-70 leading-relaxed">{desc}</p>
      </div>
      <div className="mt-auto pt-4 border-t border-black/5 flex items-center gap-2 font-bold text-sm">
        Details <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
}

function WorkflowItem({ num, title, content }: { num: string, title: string, content: string }) {
  return (
    <div className="p-6 bg-white rounded-3xl border border-[var(--color-md-surface-variant)] flex items-start gap-6 hover:shadow-md transition-shadow">
      <div className="text-3xl font-black text-md-primary/20 font-mono tracking-tighter">
        {num}
      </div>
      <div>
        <h4 className="text-lg font-bold text-md-on-primary-container mb-1">{title}</h4>
        <p className="text-md-secondary text-sm font-medium leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
