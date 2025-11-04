interface StatInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export default function StatInput({ label, value, onChange }: StatInputProps) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="font-bold mb-2 text-lg">{label}</h3>
      <input
        type="number"
        className="bg-neutral-100 text-neutral-900 w-24 p-2 text-center rounded-md focus:ring-2 focus:ring-emerald-400 outline-none transition"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}