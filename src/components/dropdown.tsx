import { useState, useRef, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";

interface Option {
  label: string;
  icon: string; // caminho da imagem (ex: "/assets/pocao-verde.png")
}

interface DropdownPotionSelectProps {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

export default function DropdownPotionSelect({
  label,
  options,
  value,
  onChange,
}: DropdownPotionSelectProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selected = options.find((opt) => opt.label === value);

  // Fecha o menu se clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-white w-full">
      <h3 className="mb-2">{label}</h3>

      {/* Botão principal */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between bg-neutral-100 text-neutral-900 px-3 py-2 rounded-md shadow-sm hover:shadow-md transition-all focus:ring-2 focus:ring-emerald-400 outline-none"
      >
        {selected ? (
          <div className="flex items-center gap-2">
            <img src={selected.icon} alt={selected.label} className="w-7 h-9" />
            <span>{selected.label}</span>
          </div>
        ) : (
          <span>Selecione...</span>
        )}
        <BiChevronDown size={18} />
      </button>

      {/* Lista de opções */}
      {open && (
        <ul className="absolute mt-2 w-full bg-neutral-200 text-neutral-900 rounded-md shadow-lg overflow-hidden z-99">
          {options.map((opt) => (
            <li
              key={opt.label}
              className="flex items-center gap-2 px-3 py-2 hover:bg-emerald-200 cursor-pointer transition-colors"
              onClick={() => {
                onChange(opt.label);
                setOpen(false);
              }}
            >
              <img src={opt.icon} alt={opt.label} className="w-7 h-9" />
              <span>{opt.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
