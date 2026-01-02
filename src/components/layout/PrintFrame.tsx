'use client';

import { RegistrationMark } from '../graphics';

interface PrintFrameProps {
  children: React.ReactNode;
}

export function PrintFrame({ children }: PrintFrameProps) {
  return (
    <div className="relative bg-white">
      {/* Page margins with print elements */}
      <div className="hidden lg:block">
        {/* LEFT MARGIN - absolute to document flow */}
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gray-50 border-r border-dashed border-gray-300">
          {/* CMYK Scale - positioned in the margin */}
          <div className="sticky top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 py-4">
            <div className="flex flex-col gap-px">
              <div className="w-3 h-4 bg-[#00D4FF]" />
              <div className="w-3 h-4 bg-[#00A8CC]" />
              <div className="w-3 h-4 bg-[#66D9FF]" />
              <div className="w-3 h-4 bg-[#B3ECFF]" />
            </div>
            <div className="flex flex-col gap-px">
              <div className="w-3 h-4 bg-[#FF00FF]" />
              <div className="w-3 h-4 bg-[#CC00CC]" />
              <div className="w-3 h-4 bg-[#FF66FF]" />
              <div className="w-3 h-4 bg-[#FFB3FF]" />
            </div>
            <div className="flex flex-col gap-px">
              <div className="w-3 h-4 bg-[#FFEB00]" />
              <div className="w-3 h-4 bg-[#CCB800]" />
              <div className="w-3 h-4 bg-[#FFF266]" />
              <div className="w-3 h-4 bg-[#FFF9B3]" />
            </div>
            <div className="flex flex-col gap-px">
              <div className="w-3 h-4 bg-[#1A1A1A]" />
              <div className="w-3 h-4 bg-[#4D4D4D]" />
              <div className="w-3 h-4 bg-[#808080]" />
              <div className="w-3 h-4 bg-[#B3B3B3]" />
            </div>
          </div>

          {/* Registration marks in left margin */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2">
            <RegistrationMark size={16} color="#9CA3AF" />
          </div>
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
            <RegistrationMark size={16} color="#9CA3AF" />
          </div>

          {/* Crop mark top */}
          <div className="absolute top-4 right-0 w-3 h-px bg-gray-400" />
          <div className="absolute top-4 right-0 w-px h-3 bg-gray-400" />

          {/* Crop mark bottom */}
          <div className="absolute bottom-4 right-0 w-3 h-px bg-gray-400" />
          <div className="absolute bottom-4 right-0 w-px h-3 bg-gray-400" />
        </div>

        {/* RIGHT MARGIN */}
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gray-50 border-l border-dashed border-gray-300">
          {/* Grayscale */}
          <div className="sticky top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 py-4">
            <div className="flex flex-col gap-px">
              <div className="w-3 h-2.5 bg-white border border-gray-200" />
              <div className="w-3 h-2.5 bg-gray-100" />
              <div className="w-3 h-2.5 bg-gray-200" />
              <div className="w-3 h-2.5 bg-gray-300" />
              <div className="w-3 h-2.5 bg-gray-400" />
              <div className="w-3 h-2.5 bg-gray-500" />
              <div className="w-3 h-2.5 bg-gray-600" />
              <div className="w-3 h-2.5 bg-gray-700" />
              <div className="w-3 h-2.5 bg-gray-800" />
              <div className="w-3 h-2.5 bg-gray-900" />
              <div className="w-3 h-2.5 bg-black" />
            </div>
          </div>

          {/* Registration marks */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2">
            <RegistrationMark size={16} color="#9CA3AF" />
          </div>
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
            <RegistrationMark size={16} color="#9CA3AF" />
          </div>

          {/* Crop mark top */}
          <div className="absolute top-4 left-0 w-3 h-px bg-gray-400" />
          <div className="absolute top-4 left-0 w-px h-3 bg-gray-400" />

          {/* Crop mark bottom */}
          <div className="absolute bottom-4 left-0 w-3 h-px bg-gray-400" />
          <div className="absolute bottom-4 left-0 w-px h-3 bg-gray-400" />
        </div>

        {/* TOP MARGIN */}
        <div className="absolute top-0 left-10 right-10 h-8 bg-gray-50 border-b border-dashed border-gray-300 flex items-center justify-center gap-4">
          <span className="text-[7px] font-mono text-gray-400 tracking-widest">PROVA DE IMPRESSÃO</span>
          <div className="flex gap-0.5">
            <div className="w-2 h-2 bg-[#00D4FF]" />
            <div className="w-2 h-2 bg-[#FF00FF]" />
            <div className="w-2 h-2 bg-[#FFEB00]" />
            <div className="w-2 h-2 bg-[#1A1A1A]" />
          </div>
          <span className="text-[7px] font-mono text-gray-400 tracking-widest">NÃO USAR PARA PRODUÇÃO</span>

          {/* Corner info */}
          <span className="absolute left-4 text-[6px] font-mono text-gray-400">JOB: LCV-001</span>
          <span className="absolute right-4 text-[6px] font-mono text-gray-400">REV: 01</span>
        </div>

        {/* BOTTOM MARGIN */}
        <div className="absolute bottom-0 left-10 right-10 h-8 bg-gray-50 border-t border-dashed border-gray-300 flex items-center justify-center gap-6">
          <span className="text-[7px] font-mono text-gray-400 tracking-wider">LITORAL-2026</span>
          <div className="flex gap-px">
            <div className="w-4 h-1.5 bg-[#00D4FF]" />
            <div className="w-4 h-1.5 bg-[#FF00FF]" />
            <div className="w-4 h-1.5 bg-[#FFEB00]" />
            <div className="w-4 h-1.5 bg-[#1A1A1A]" />
          </div>
          <span className="text-[7px] font-mono text-gray-400 tracking-wider">300DPI • FOGRA39</span>

          {/* Corner info */}
          <span className="absolute left-4 text-[6px] font-mono text-gray-400">CLIENTE: LITORAL CV</span>
          <span className="absolute right-4 text-[6px] font-mono text-gray-400">DATA: 02/01/2026</span>
        </div>

        {/* Corner color patches */}
        <div className="absolute top-10 left-1 flex flex-col gap-px">
          <div className="flex gap-px">
            <div className="w-1.5 h-1.5 bg-[#00D4FF]" />
            <div className="w-1.5 h-1.5 bg-[#FF00FF]" />
          </div>
          <div className="flex gap-px">
            <div className="w-1.5 h-1.5 bg-[#FFEB00]" />
            <div className="w-1.5 h-1.5 bg-[#1A1A1A]" />
          </div>
        </div>
        <div className="absolute top-10 right-1 flex flex-col gap-px">
          <div className="flex gap-px">
            <div className="w-1.5 h-1.5 bg-[#00D4FF]" />
            <div className="w-1.5 h-1.5 bg-[#FF00FF]" />
          </div>
          <div className="flex gap-px">
            <div className="w-1.5 h-1.5 bg-[#FFEB00]" />
            <div className="w-1.5 h-1.5 bg-[#1A1A1A]" />
          </div>
        </div>
        <div className="absolute bottom-10 left-1 flex flex-col gap-px">
          <div className="flex gap-px">
            <div className="w-1.5 h-1.5 bg-[#00D4FF]" />
            <div className="w-1.5 h-1.5 bg-[#FF00FF]" />
          </div>
          <div className="flex gap-px">
            <div className="w-1.5 h-1.5 bg-[#FFEB00]" />
            <div className="w-1.5 h-1.5 bg-[#1A1A1A]" />
          </div>
        </div>
        <div className="absolute bottom-10 right-1 flex flex-col gap-px">
          <div className="flex gap-px">
            <div className="w-1.5 h-1.5 bg-[#00D4FF]" />
            <div className="w-1.5 h-1.5 bg-[#FF00FF]" />
          </div>
          <div className="flex gap-px">
            <div className="w-1.5 h-1.5 bg-[#FFEB00]" />
            <div className="w-1.5 h-1.5 bg-[#1A1A1A]" />
          </div>
        </div>
      </div>

      {/* Main content with margins to show print elements */}
      <div className="lg:ml-10 lg:mr-10 lg:pt-8 lg:pb-8">
        {children}
      </div>
    </div>
  );
}
