export default function FormLoader({ text = "Submitting..." }) {
  return (
    <div className="flex items-center justify-center gap-2 py-3">
      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
      <span className="text-sm">{text}</span>
    </div>
  );
}
