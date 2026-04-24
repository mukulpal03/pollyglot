import { Languages } from "lucide-react";

interface TranslateActionButtonProps {
  onClick?: () => void;
  label?: string;
}

export const TranslateActionButton = ({
  onClick,
  label = "Translate Now",
}: TranslateActionButtonProps) => (
  <div className="flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
    <button
      onClick={onClick}
      className="px-8 md:px-12 py-3 md:py-4 bg-white text-black font-bold rounded-2xl hover:bg-slate-200 transition-all active:scale-95 flex items-center gap-3 group whitespace-nowrap"
    >
      <Languages
        size={20}
        className="group-hover:rotate-12 transition-transform"
      />
      {label}
    </button>
  </div>
);
