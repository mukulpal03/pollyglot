import { languages } from "../../constants/languages";

interface LanguageSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const LanguageSelector = ({
  value,
  onChange,
}: LanguageSelectorProps) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="bg-transparent text-slate-300 font-medium focus:outline-none cursor-pointer hover:text-white transition-colors"
  >
    {languages.map((lang) => (
      <option key={lang.code} value={lang.code} className="bg-[#121217]">
        {lang.name}
      </option>
    ))}
  </select>
);
