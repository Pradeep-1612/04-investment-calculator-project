export default function Input({
  label,
  type,
  initialValue,
  category,
  onValueChange,
}) {
  return (
    <p>
      <label>{label}</label>
      <input
        type={type}
        value={initialValue}
        onChange={($event) => onValueChange(category, $event.target.value)}
        required
      />
    </p>
  );
}
