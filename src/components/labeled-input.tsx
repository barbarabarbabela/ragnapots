interface LabeledInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export default function LabeledInput({ label, value, onChange }: LabeledInputProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <label className="w-16">{label}</label>
      <input
        type="number"
        className="bg-neutral-100 text-neutral-900 w-24 p-1 rounded-md text-center focus:ring-2 focus:ring-emerald-400 outline-none transition"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}