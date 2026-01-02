'use client';

import { RegistrationMark, CMYKColorBar } from '../graphics';

interface PrintFrameProps {
  children: React.ReactNode;
}

export function PrintFrame({ children }: PrintFrameProps) {
  return (
    <div className="relative">
      {/* Left margin - Color scale */}
      <div className="fixed left-0 top-0 bottom-0 w-6 hidden xl:flex flex-col items-center justify-center z-40 pointer-events-none">
        <div className="flex flex-col gap-1">
          {/* CMYK vertical color bars */}
          <div className="w-3 h-8 bg-[#00D4FF]" />
          <div className="w-3 h-8 bg-[#FF00FF]" />
          <div className="w-3 h-8 bg-[#FFEB00]" />
          <div className="w-3 h-8 bg-[#1A1A1A]" />
        </div>
        <div className="mt-4">
          <RegistrationMark size={12} color="#D4D4D4" />
        </div>
        <div className="mt-auto mb-8 -rotate-90 text-[8px] font-mono text-gray-300 whitespace-nowrap">
          LITORAL-2026
        </div>
      </div>

      {/* Right margin - Registration marks and info */}
      <div className="fixed right-0 top-0 bottom-0 w-6 hidden xl:flex flex-col items-center justify-center z-40 pointer-events-none">
        <div className="mb-auto mt-8 rotate-90 text-[8px] font-mono text-gray-300 whitespace-nowrap">
          300 DPI • FOGRA39
        </div>
        <div className="mb-4">
          <RegistrationMark size={12} color="#D4D4D4" />
        </div>
        <div className="flex flex-col gap-1">
          {/* Grayscale bars */}
          <div className="w-3 h-4 bg-gray-100" />
          <div className="w-3 h-4 bg-gray-200" />
          <div className="w-3 h-4 bg-gray-300" />
          <div className="w-3 h-4 bg-gray-400" />
          <div className="w-3 h-4 bg-gray-500" />
          <div className="w-3 h-4 bg-gray-600" />
          <div className="w-3 h-4 bg-gray-700" />
          <div className="w-3 h-4 bg-gray-800" />
        </div>
      </div>

      {/* Top margin - Crop marks */}
      <div className="fixed top-0 left-0 right-0 h-4 hidden xl:flex items-end justify-between px-8 z-40 pointer-events-none">
        {/* Left crop mark */}
        <div className="flex items-end gap-2">
          <div className="w-px h-3 bg-gray-300" />
          <div className="h-px w-3 bg-gray-300" />
        </div>

        {/* Center info */}
        <div className="text-[8px] font-mono text-gray-300">
          PROVA DE IMPRESSÃO • NÃO USAR PARA PRODUÇÃO
        </div>

        {/* Right crop mark */}
        <div className="flex items-end gap-2">
          <div className="h-px w-3 bg-gray-300" />
          <div className="w-px h-3 bg-gray-300" />
        </div>
      </div>

      {/* Bottom margin - Color bar and crop marks */}
      <div className="fixed bottom-0 left-0 right-0 h-6 hidden xl:flex flex-col z-40 pointer-events-none">
        {/* Mini CMYK color bar */}
        <div className="flex h-1">
          <div className="flex-1 bg-[#00D4FF]" />
          <div className="flex-1 bg-[#FF00FF]" />
          <div className="flex-1 bg-[#FFEB00]" />
          <div className="flex-1 bg-[#1A1A1A]" />
        </div>

        {/* Bottom info */}
        <div className="flex-1 flex items-center justify-between px-8">
          {/* Left crop mark */}
          <div className="flex items-start gap-2">
            <div className="w-px h-3 bg-gray-300" />
            <div className="h-px w-3 bg-gray-300" />
          </div>

          {/* Center info */}
          <div className="flex items-center gap-4 text-[8px] font-mono text-gray-300">
            <span>C100 M0 Y0 K0</span>
            <span>C0 M100 Y0 K0</span>
            <span>C0 M0 Y100 K0</span>
            <span>C0 M0 Y0 K100</span>
          </div>

          {/* Right crop mark */}
          <div className="flex items-start gap-2">
            <div className="h-px w-3 bg-gray-300" />
            <div className="w-px h-3 bg-gray-300" />
          </div>
        </div>
      </div>

      {/* Corner registration marks */}
      <div className="fixed top-8 left-8 hidden xl:block z-40 pointer-events-none">
        <RegistrationMark size={16} color="#E5E5E5" />
      </div>
      <div className="fixed top-8 right-8 hidden xl:block z-40 pointer-events-none">
        <RegistrationMark size={16} color="#E5E5E5" />
      </div>
      <div className="fixed bottom-8 left-8 hidden xl:block z-40 pointer-events-none">
        <RegistrationMark size={16} color="#E5E5E5" />
      </div>
      <div className="fixed bottom-8 right-8 hidden xl:block z-40 pointer-events-none">
        <RegistrationMark size={16} color="#E5E5E5" />
      </div>

      {/* Main content */}
      {children}
    </div>
  );
}
