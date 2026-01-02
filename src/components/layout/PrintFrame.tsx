'use client';

import { RegistrationMark } from '../graphics';

interface PrintFrameProps {
  children: React.ReactNode;
}

export function PrintFrame({ children }: PrintFrameProps) {
  return (
    <div className="relative min-h-screen">
      {/* Fixed background print elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

        {/* === BLEED LINES (Linhas de Sangria) === */}
        {/* Top bleed line */}
        <div className="absolute top-8 left-12 right-12 hidden lg:block">
          <div className="h-px bg-gray-200 border-dashed" style={{ borderTop: '1px dashed #E5E5E5' }} />
        </div>
        {/* Bottom bleed line */}
        <div className="absolute bottom-8 left-12 right-12 hidden lg:block">
          <div className="h-px" style={{ borderTop: '1px dashed #E5E5E5' }} />
        </div>
        {/* Left bleed line */}
        <div className="absolute left-8 top-12 bottom-12 hidden lg:block">
          <div className="w-px h-full" style={{ borderLeft: '1px dashed #E5E5E5' }} />
        </div>
        {/* Right bleed line */}
        <div className="absolute right-8 top-12 bottom-12 hidden lg:block">
          <div className="w-px h-full" style={{ borderLeft: '1px dashed #E5E5E5' }} />
        </div>

        {/* === CROP MARKS (Marcas de Corte) === */}
        {/* Top-left corner */}
        <div className="absolute top-6 left-6 hidden lg:block">
          <div className="absolute top-0 left-6 w-px h-4 bg-gray-300" />
          <div className="absolute top-6 left-0 h-px w-4 bg-gray-300" />
        </div>
        {/* Top-right corner */}
        <div className="absolute top-6 right-6 hidden lg:block">
          <div className="absolute top-0 right-6 w-px h-4 bg-gray-300" />
          <div className="absolute top-6 right-0 h-px w-4 bg-gray-300" />
        </div>
        {/* Bottom-left corner */}
        <div className="absolute bottom-6 left-6 hidden lg:block">
          <div className="absolute bottom-0 left-6 w-px h-4 bg-gray-300" />
          <div className="absolute bottom-6 left-0 h-px w-4 bg-gray-300" />
        </div>
        {/* Bottom-right corner */}
        <div className="absolute bottom-6 right-6 hidden lg:block">
          <div className="absolute bottom-0 right-6 w-px h-4 bg-gray-300" />
          <div className="absolute bottom-6 right-0 h-px w-4 bg-gray-300" />
        </div>

        {/* === REGISTRATION MARKS (Marcas de Registro) === */}
        {/* Corners */}
        <div className="absolute top-10 left-10 hidden xl:block">
          <RegistrationMark size={20} color="#D4D4D4" />
        </div>
        <div className="absolute top-10 right-10 hidden xl:block">
          <RegistrationMark size={20} color="#D4D4D4" />
        </div>
        <div className="absolute bottom-10 left-10 hidden xl:block">
          <RegistrationMark size={20} color="#D4D4D4" />
        </div>
        <div className="absolute bottom-10 right-10 hidden xl:block">
          <RegistrationMark size={20} color="#D4D4D4" />
        </div>
        {/* Center sides */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 hidden xl:block">
          <RegistrationMark size={14} color="#E5E5E5" />
        </div>
        <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden xl:block">
          <RegistrationMark size={14} color="#E5E5E5" />
        </div>
        <div className="absolute top-10 left-1/2 -translate-x-1/2 hidden xl:block">
          <RegistrationMark size={14} color="#E5E5E5" />
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden xl:block">
          <RegistrationMark size={14} color="#E5E5E5" />
        </div>

        {/* === COLOR CONTROL BARS (Barras de Controle de Cor) === */}
        {/* Left side - Full CMYK strip */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
          {/* CMYK Primary */}
          <div className="flex flex-col gap-px">
            <div className="w-3 h-5 bg-[#00D4FF]" title="Cyan 100%" />
            <div className="w-3 h-5 bg-[#00A8CC]" title="Cyan 75%" />
            <div className="w-3 h-5 bg-[#66D9FF]" title="Cyan 50%" />
            <div className="w-3 h-5 bg-[#B3ECFF]" title="Cyan 25%" />
          </div>
          <div className="flex flex-col gap-px">
            <div className="w-3 h-5 bg-[#FF00FF]" title="Magenta 100%" />
            <div className="w-3 h-5 bg-[#CC00CC]" title="Magenta 75%" />
            <div className="w-3 h-5 bg-[#FF66FF]" title="Magenta 50%" />
            <div className="w-3 h-5 bg-[#FFB3FF]" title="Magenta 25%" />
          </div>
          <div className="flex flex-col gap-px">
            <div className="w-3 h-5 bg-[#FFEB00]" title="Yellow 100%" />
            <div className="w-3 h-5 bg-[#CCB800]" title="Yellow 75%" />
            <div className="w-3 h-5 bg-[#FFF266]" title="Yellow 50%" />
            <div className="w-3 h-5 bg-[#FFF9B3]" title="Yellow 25%" />
          </div>
          <div className="flex flex-col gap-px">
            <div className="w-3 h-5 bg-[#1A1A1A]" title="Black 100%" />
            <div className="w-3 h-5 bg-[#4D4D4D]" title="Black 75%" />
            <div className="w-3 h-5 bg-[#808080]" title="Black 50%" />
            <div className="w-3 h-5 bg-[#B3B3B3]" title="Black 25%" />
          </div>
          {/* Label */}
          <div className="-rotate-90 text-[7px] font-mono text-gray-300 whitespace-nowrap tracking-widest mt-2">
            CMYK
          </div>
        </div>

        {/* Right side - Grayscale + Density */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
          {/* Grayscale strip */}
          <div className="flex flex-col gap-px">
            <div className="w-3 h-3 bg-white border border-gray-200" title="0%" />
            <div className="w-3 h-3 bg-gray-100" title="10%" />
            <div className="w-3 h-3 bg-gray-200" title="20%" />
            <div className="w-3 h-3 bg-gray-300" title="30%" />
            <div className="w-3 h-3 bg-gray-400" title="40%" />
            <div className="w-3 h-3 bg-gray-500" title="50%" />
            <div className="w-3 h-3 bg-gray-600" title="60%" />
            <div className="w-3 h-3 bg-gray-700" title="70%" />
            <div className="w-3 h-3 bg-gray-800" title="80%" />
            <div className="w-3 h-3 bg-gray-900" title="90%" />
            <div className="w-3 h-3 bg-black" title="100%" />
          </div>
          {/* Label */}
          <div className="rotate-90 text-[7px] font-mono text-gray-300 whitespace-nowrap tracking-widest mt-2">
            GRAY
          </div>
        </div>

        {/* === TOP INFO BAR === */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-6">
          <div className="text-[7px] font-mono text-gray-300 tracking-widest">
            PROVA DE IMPRESSÃO
          </div>
          <div className="flex gap-0.5">
            <div className="w-2 h-2 bg-[#00D4FF]" />
            <div className="w-2 h-2 bg-[#FF00FF]" />
            <div className="w-2 h-2 bg-[#FFEB00]" />
            <div className="w-2 h-2 bg-[#1A1A1A]" />
          </div>
          <div className="text-[7px] font-mono text-gray-300 tracking-widest">
            NÃO USAR PARA PRODUÇÃO
          </div>
        </div>

        {/* === BOTTOM INFO BAR === */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-8">
          <div className="text-[7px] font-mono text-gray-300 tracking-wider">
            LITORAL-2026
          </div>
          <div className="flex gap-px">
            <div className="w-6 h-1.5 bg-[#00D4FF]" />
            <div className="w-6 h-1.5 bg-[#FF00FF]" />
            <div className="w-6 h-1.5 bg-[#FFEB00]" />
            <div className="w-6 h-1.5 bg-[#1A1A1A]" />
          </div>
          <div className="text-[7px] font-mono text-gray-300 tracking-wider">
            300DPI • FOGRA39 • OFFSET
          </div>
        </div>

        {/* === FOLD MARKS (Marcas de Dobra) === */}
        {/* Center vertical */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 hidden xl:block">
          <div className="w-px h-3 bg-gray-300" />
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden xl:block">
          <div className="w-px h-3 bg-gray-300" />
        </div>
        {/* Center horizontal */}
        <div className="absolute top-1/2 left-6 -translate-y-1/2 hidden xl:block">
          <div className="h-px w-3 bg-gray-300" />
        </div>
        <div className="absolute top-1/2 right-6 -translate-y-1/2 hidden xl:block">
          <div className="h-px w-3 bg-gray-300" />
        </div>

        {/* === CORNER COLOR PATCHES === */}
        {/* Top-left */}
        <div className="absolute top-16 left-2 hidden xl:flex flex-col gap-0.5">
          <div className="flex gap-0.5">
            <div className="w-2 h-2 bg-[#00D4FF]" />
            <div className="w-2 h-2 bg-[#FF00FF]" />
          </div>
          <div className="flex gap-0.5">
            <div className="w-2 h-2 bg-[#FFEB00]" />
            <div className="w-2 h-2 bg-[#1A1A1A]" />
          </div>
        </div>
        {/* Top-right */}
        <div className="absolute top-16 right-2 hidden xl:flex flex-col gap-0.5">
          <div className="flex gap-0.5">
            <div className="w-2 h-2 bg-[#00D4FF]" />
            <div className="w-2 h-2 bg-[#FF00FF]" />
          </div>
          <div className="flex gap-0.5">
            <div className="w-2 h-2 bg-[#FFEB00]" />
            <div className="w-2 h-2 bg-[#1A1A1A]" />
          </div>
        </div>
        {/* Bottom-left */}
        <div className="absolute bottom-16 left-2 hidden xl:flex flex-col gap-0.5">
          <div className="flex gap-0.5">
            <div className="w-2 h-2 bg-[#00D4FF]" />
            <div className="w-2 h-2 bg-[#FF00FF]" />
          </div>
          <div className="flex gap-0.5">
            <div className="w-2 h-2 bg-[#FFEB00]" />
            <div className="w-2 h-2 bg-[#1A1A1A]" />
          </div>
        </div>
        {/* Bottom-right */}
        <div className="absolute bottom-16 right-2 hidden xl:flex flex-col gap-0.5">
          <div className="flex gap-0.5">
            <div className="w-2 h-2 bg-[#00D4FF]" />
            <div className="w-2 h-2 bg-[#FF00FF]" />
          </div>
          <div className="flex gap-0.5">
            <div className="w-2 h-2 bg-[#FFEB00]" />
            <div className="w-2 h-2 bg-[#1A1A1A]" />
          </div>
        </div>

        {/* === SIDE TICK MARKS === */}
        {/* Left side ticks */}
        <div className="absolute left-6 top-1/4 hidden xl:block">
          <div className="h-px w-2 bg-gray-300" />
        </div>
        <div className="absolute left-6 top-3/4 hidden xl:block">
          <div className="h-px w-2 bg-gray-300" />
        </div>
        {/* Right side ticks */}
        <div className="absolute right-6 top-1/4 hidden xl:block">
          <div className="h-px w-2 bg-gray-300" />
        </div>
        <div className="absolute right-6 top-3/4 hidden xl:block">
          <div className="h-px w-2 bg-gray-300" />
        </div>
        {/* Top ticks */}
        <div className="absolute top-6 left-1/4 hidden xl:block">
          <div className="w-px h-2 bg-gray-300" />
        </div>
        <div className="absolute top-6 right-1/4 hidden xl:block">
          <div className="w-px h-2 bg-gray-300" />
        </div>
        {/* Bottom ticks */}
        <div className="absolute bottom-6 left-1/4 hidden xl:block">
          <div className="w-px h-2 bg-gray-300" />
        </div>
        <div className="absolute bottom-6 right-1/4 hidden xl:block">
          <div className="w-px h-2 bg-gray-300" />
        </div>

        {/* === CORNER JOB INFO === */}
        <div className="absolute top-3 left-14 hidden xl:block">
          <div className="text-[6px] font-mono text-gray-300 tracking-wider">
            JOB: LCV-001
          </div>
        </div>
        <div className="absolute top-3 right-14 hidden xl:block">
          <div className="text-[6px] font-mono text-gray-300 tracking-wider">
            REV: 01
          </div>
        </div>
        <div className="absolute bottom-3 left-14 hidden xl:block">
          <div className="text-[6px] font-mono text-gray-300 tracking-wider">
            CLIENTE: LITORAL CV
          </div>
        </div>
        <div className="absolute bottom-3 right-14 hidden xl:block">
          <div className="text-[6px] font-mono text-gray-300 tracking-wider">
            DATA: 02/01/2026
          </div>
        </div>

      </div>

      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
