export default function Input({
  title,
  onChange,
  value,
}: {
  title: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
  value?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="font-['Roboto Flex'] text-lhd-text text-xs">{title}</div>
      <input
        onChange={onChange}
        value={value}
        className="outline outline-stone-300/50 px-3 h-9 w-40"
      ></input>
    </div>
  );
}
