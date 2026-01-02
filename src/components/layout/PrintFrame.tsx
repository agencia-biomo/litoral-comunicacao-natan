'use client';

import { RegistrationMark, CMYKColorBar } from '../graphics';

interface PrintFrameProps {
  children: React.ReactNode;
}

export function PrintFrame({ children }: PrintFrameProps) {
  return (
    <div className="relative min-h-screen">
      {/* Fixed background print elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Corner crop marks */}
        {/* Top-left */}
        <div className="absolute top-4 left-4 hidden lg:block">
          <div className="relative">
            <div className="absolute -top-2 left-4 w-px h-6 bg-gray-200" />
            <div className="absolute top-4 -left-2 h-px w-6 bg-gray-200" />
            <RegistrationMark size={16} color="#E5E5E5" />
          </div>
        </div>

        {/* Top-right */}
        <div className="absolute top-4 right-4 hidden lg:block">
          <div className="relative">
            <div className="absolute -top-2 right-4 w-px h-6 bg-gray-200" />
            <div className="absolute top-4 -right-2 h-px w-6 bg-gray-200" />
            <RegistrationMark size={16} color="#E5E5E5" />
          </div>
        </div>

        {/* Bottom-left */}
        <div className="absolute bottom-4 left-4 hidden lg:block">
          <div className="relative">
            <div className="absolute -bottom-2 left-4 w-px h-6 bg-gray-200" />
            <div className="absolute bottom-4 -left-2 h-px w-6 bg-gray-200" />
            <RegistrationMark size={16} color="#E5E5E5" />
          </div>
        </div>

        {/* Bottom-right */}
        <div className="absolute bottom-4 right-4 hidden lg:block">
          <div className="relative">
            <div className="absolute -bottom-2 right-4 w-px h-6 bg-gray-200" />
            <div className="absolute bottom-4 -right-2 h-px w-6 bg-gray-200" />
            <RegistrationMark size={16} color="#E5E5E5" />
          </div>
        </div>

        {/* Left side - CMYK color bars */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6">
          {/* Color bars */}
          <div className="flex flex-col gap-0.5">
            <div className="w-2 h-6 bg-[#00D4FF] rounded-sm" />
            <div className="w-2 h-6 bg-[#FF00FF] rounded-sm" />
            <div className="w-2 h-6 bg-[#FFEB00] rounded-sm" />
            <div className="w-2 h-6 bg-[#1A1A1A] rounded-sm" />
          </div>

          {/* Label */}
          <div className="-rotate-90 text-[8px] font-mono text-gray-300 whitespace-nowrap tracking-wider">
            CMYK
          </div>
        </div>

        {/* Right side - Grayscale and info */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6">
          {/* Grayscale bars */}
          <div className="flex flex-col gap-0.5">
            <div className="w-2 h-3 bg-gray-200 rounded-sm" />
            <div className="w-2 h-3 bg-gray-300 rounded-sm" />
            <div className="w-2 h-3 bg-gray-400 rounded-sm" />
            <div className="w-2 h-3 bg-gray-500 rounded-sm" />
            <div className="w-2 h-3 bg-gray-600 rounded-sm" />
            <div className="w-2 h-3 bg-gray-700 rounded-sm" />
          </div>

          {/* Label */}
          <div className="rotate-90 text-[8px] font-mono text-gray-300 whitespace-nowrap tracking-wider">
            300DPI
          </div>
        </div>

        {/* Top center info */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 hidden lg:block">
          <div className="text-[8px] font-mono text-gray-300 tracking-widest">
            LITORAL • PROVA DE IMPRESSÃO • 2026
          </div>
        </div>

        {/* Bottom center - Mini CMYK bar */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-4">
          <div className="flex gap-0.5">
            <div className="w-4 h-1.5 bg-[#00D4FF]" />
            <div className="w-4 h-1.5 bg-[#FF00FF]" />
            <div className="w-4 h-1.5 bg-[#FFEB00]" />
            <div className="w-4 h-1.5 bg-[#1A1A1A]" />
          </div>
          <div className="text-[8px] font-mono text-gray-300 tracking-wider">
            FOGRA39
          </div>
        </div>

        {/* Subtle corner decorations - additional crop marks */}
        <div className="absolute top-1/4 left-3 hidden xl:block">
          <div className="w-px h-4 bg-gray-200" />
        </div>
        <div className="absolute top-1/4 right-3 hidden xl:block">
          <div className="w-px h-4 bg-gray-200" />
        </div>
        <div className="absolute bottom-1/4 left-3 hidden xl:block">
          <div className="w-px h-4 bg-gray-200" />
        </div>
        <div className="absolute bottom-1/4 right-3 hidden xl:block">
          <div className="w-px h-4 bg-gray-200" />
        </div>

        {/* Side marks */}
        <div className="absolute left-3 top-1/4 hidden xl:block">
          <div className="h-px w-4 bg-gray-200" />
        </div>
        <div className="absolute right-3 top-1/4 hidden xl:block">
          <div className="h-px w-4 bg-gray-200" />
        </div>
        <div className="absolute left-3 bottom-1/4 hidden xl:block">
          <div className="h-px w-4 bg-gray-200" />
        </div>
        <div className="absolute right-3 bottom-1/4 hidden xl:block">
          <div className="h-px w-4 bg-gray-200" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
