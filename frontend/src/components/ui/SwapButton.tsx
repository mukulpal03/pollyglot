import { ArrowRightLeft } from "lucide-react";

interface SwapButtonProps {
  onClick: () => void;
}

export const SwapButton = ({ onClick }: SwapButtonProps) => (
  <div className="flex items-center justify-center">
    <button
      onClick={onClick}
      className="p-2 md:p-3 bg-violet-600 hover:bg-violet-500 text-white rounded-xl md:rounded-2xl shadow-lg shadow-violet-600/20 transition-all active:scale-95 group"
    >
      <ArrowRightLeft className="w-4 h-4 md:w-6 md:h-6 transition-transform group-hover:scale-110" />
    </button>
  </div>
);
