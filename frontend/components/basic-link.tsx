import { ComponentProps } from "react";
import Link from "next/link";
type PropBasicButton = {
  textButton: string;
  route: string;
  identificator: string;
} & Omit<ComponentProps<typeof Link>, "href">;

export default function BasicButton({
  textButton,
  identificator,
  route,
  className,
  ...rest
}: PropBasicButton) {
  return (
    <Link
      href={route}
      id={identificator}
      aria-label={textButton}
      className={`bg-blue-400 shadow-xl py-2 px-6 rounded-xl hover:scale-105 border-blue-300 border-3 hover:bg-blue-500 cursor-pointer text-white ${className}`}
      {...rest}
    >
      {textButton}
    </Link>
  );
}
