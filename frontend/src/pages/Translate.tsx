import { useState } from "react";
import { Copy, Volume2, Share2, AlertCircle } from "lucide-react";
import { useTranslate } from "../hooks/useTranslate";
import { TranslateBackground } from "../components/translate/TranslateBackground";
import { TranslateHeader } from "../components/translate/TranslateHeader";
import { TranslateBox } from "../components/translate/TranslateBox";
import { LanguageSelector } from "../components/ui/LanguageSelector";
import { SwapButton } from "../components/ui/SwapButton";

export const Translate = () => {
  const [inputText, setInputText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("es");
  const [isFocused, setIsFocused] = useState(false);
  const { translatedText, isLoading, error } = useTranslate(
    inputText,
    targetLang,
  );

  const swapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
  };

  return (
    <div className="h-screen bg-[#0a0a0c] text-slate-200 font-sans selection:bg-violet-500/30 overflow-hidden flex flex-col">
      <TranslateBackground />

      <div className="relative flex-1 max-w-[1400px] mx-auto px-4 py-4 md:py-6 flex flex-col w-full min-h-0">
        <TranslateHeader />

        {/* Translation Area - Side-by-Side */}
        <div className="flex-1 flex flex-row items-stretch gap-2 md:gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 min-h-0">
          {/* Source Box */}
          <div className="flex-1 min-w-0">
            <TranslateBox
              isFocused={isFocused}
              header={
                <>
                  <LanguageSelector
                    value={sourceLang}
                    onChange={setSourceLang}
                  />
                  <button className="p-2 text-slate-500 hover:text-white hover:bg-slate-800 rounded-xl transition-all">
                    <Volume2 size={16} />
                  </button>
                </>
              }
              footer={
                <div className="w-full text-[10px] text-slate-600 flex justify-end">
                  {inputText.length} / 5000
                </div>
              }
            >
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Enter text to translate..."
                className="w-full h-full p-4 md:p-6 bg-transparent text-sm md:text-xl resize-none focus:outline-none placeholder:text-slate-600 min-h-0"
              />
            </TranslateBox>
          </div>

          {/* Center Column with Swap Button */}
          <div className="flex flex-col items-center justify-center shrink-0">
            <SwapButton onClick={swapLanguages} />
          </div>

          {/* Target Box */}
          <div className="flex-1 min-w-0">
            <TranslateBox
              header={
                <>
                  <LanguageSelector
                    value={targetLang}
                    onChange={setTargetLang}
                  />
                  <div className="flex gap-1">
                    <button className="p-2 text-slate-500 hover:text-white hover:bg-slate-800 rounded-xl transition-all">
                      <Copy size={16} />
                    </button>
                    <button className="p-2 text-slate-500 hover:text-white hover:bg-slate-800 rounded-xl transition-all">
                      <Share2 size={16} />
                    </button>
                  </div>
                </>
              }
              footer={
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold text-[8px] md:text-[9px]">
                    Neural Engine Active
                  </span>
                </div>
              }
            >
              <div className="w-full h-full p-4 md:p-6 text-sm md:text-xl select-all overflow-auto min-h-0">
                {isLoading ? (
                  <div className="flex flex-col gap-2 animate-pulse">
                    <div className="h-4 md:h-6 bg-slate-800 rounded-md w-3/4" />
                    <div className="h-4 md:h-6 bg-slate-800 rounded-md w-1/2" />
                  </div>
                ) : error ? (
                  <div className="flex items-center gap-2 text-rose-500 text-sm md:text-base bg-rose-500/10 p-3 rounded-xl border border-rose-500/20">
                    <AlertCircle size={18} />
                    <span>{error}</span>
                  </div>
                ) : translatedText ? (
                  <span className="text-white animate-in fade-in duration-500 whitespace-pre-wrap">
                    {translatedText}
                  </span>
                ) : inputText ? (
                  <span className="text-slate-600 italic">Translating...</span>
                ) : (
                  <span className="text-slate-700 italic">Translation...</span>
                )}
              </div>
            </TranslateBox>
          </div>
        </div>


      </div>
    </div>
  );
};
