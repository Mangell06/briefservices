type PropsInput = {
  textLabel: string;
  identificator: string;
  textPlaceholder: string;
  typeInput: "text" | "password" | "email" | "number" | "tel";
};

export default function Inputs({
  textLabel,
  identificator,
  textPlaceholder,
  typeInput,
}: PropsInput) {
  return (
    <div className="flex flex-col justify-center text-black items-center gap-2">
      <label htmlFor={identificator} className="text-slate-700">
        {textLabel}
      </label>
      <input
        className="border-2 p-1 rounded-2xl text-center bg-white border-blue-300
         focus:border-blue-400 focus:outline-none focus:text-blue-600
         focus:placeholder:text-blue-300 hover:scale-105"
        type={typeInput}
        name={identificator}
        id={identificator}
        placeholder={textPlaceholder}
      />
    </div>
  );
}
