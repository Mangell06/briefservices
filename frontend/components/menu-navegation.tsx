import BasicLink from "./basic-link";
import type { ComponentProps } from "react";

type PropMenuNavegation = {
  pages: { textLink: string; route: string }[];
} & ComponentProps<"nav">;

export default function MenuNavegation({ pages }: PropMenuNavegation) {
  return (
    <nav className="flex items-center py-2 px-4 bg-blue-100 h-[8dvh]">
      <h1 className="text-blue-700 text-2xl mr-auto">
        <strong>Brief Services</strong>
      </h1>
      <div className="flex flex-1 justify-center gap-4 mr-[17dvh]">
        {pages.map((page) => {
          return (
            <BasicLink
              key={page.textLink}
              route={page.route}
              identificator={page.textLink}
              textButton={page.textLink}
            />
          );
        })}
      </div>
    </nav>
  );
}
