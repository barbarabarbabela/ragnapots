interface SelectInputProps {
  label: string;
  value: number;
  max: number;
  onChange: (value: number) => void;
}

export default function SelectInput({ label, value, max, onChange }: SelectInputProps) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <h3 className="font-bold">{label}</h3>
      <select
        className="w-20 bg-neutral-100 text-neutral-900 p-1 rounded-md focus:ring-2 focus:ring-emerald-400 outline-none"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {Array.from({ length: max }, (_, i) => i + 1).map((lvl) => (
          <option key={lvl} value={lvl}>
            {lvl}
          </option>
        ))}
      </select>
    </div>
  );
}