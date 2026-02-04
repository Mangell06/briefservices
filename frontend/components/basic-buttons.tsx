import { ComponentProps } from "react";
type PropBasicButton = {
  textButton: string;
  identificator: string;
} & ComponentProps<"button">;

export default function BasicButton({
  textButton,
  identificator,
  className,
  ...rest
}: PropBasicButton) {
  return (
    <button
      id={identificator}
      name={identificator}
      className={`bg-blue-400 w-[10dvh] shadow-xl py-2 px-6 rounded-xl hover:scale-105 border-blue-300 border-3 hover:bg-blue-500 cursor-pointer text-white ${className}`}
      {...rest}
    >
      {textButton}
    </button>
  );
}
