import type { ReactNode } from "react";

interface TranslateBoxProps {
  header: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  isFocused?: boolean;
}

export const TranslateBox = ({
  header,
  children,
  footer,
  isFocused,
}: TranslateBoxProps) => (
  <div
    className={`group relative bg-[#121217] border rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-300 shadow-2xl flex flex-col h-full w-full ${
      isFocused ? "border-violet-500/50" : "border-slate-800"
    }`}
  >
    <div className="flex items-center justify-between p-2 md:p-4 border-b border-slate-800/50 bg-[#16161c] shrink-0">
      {header}
    </div>
    <div className="flex-1 min-h-0 relative">
      {children}
    </div>
    {footer && (
      <div className="p-2 md:p-4 flex justify-between items-center border-t border-slate-800/30 shrink-0">
        {footer}
      </div>
    )}
  </div>
);
