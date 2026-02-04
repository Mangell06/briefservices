"use client";
import Inputs from "./inputs";
import BasicButton from "./basic-buttons";
import React from "react";

type PropForm = {
  inputs: {
    textLabel: string;
    identificator: string;
    textPlaceholder: string;
    typeInput: "text" | "password" | "email" | "number" | "tel";
  }[];
  button: { textButton: string; identificator: string };
};

export default function Form({ inputs, button }: PropForm) {
  return (
    <form
      onSubmit={(e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Me permite conseguir los valores ingresados por el usuario en el formulario.
        const dataForm = new FormData(e.currentTarget);

        // Con el object.fromEntries consigo todos los valores convertidos en un diccionario.
        const parseData = Object.fromEntries(dataForm.entries());

        console.log(parseData);
      }}
      className="bg-white border-blue-200 flex flex-col items-center pt-2 px-2 pb-12 w-[25%] h-[60%] rounded-2xl shadow-2xl"
    >
      <div className="flex flex-1 flex-col justify-center pb-12 gap-10">
        {inputs.map((input) => {
          return (
            <Inputs
              key={input.identificator}
              identificator={input.identificator}
              textLabel={input.textLabel}
              textPlaceholder={input.textPlaceholder}
              typeInput={input.typeInput}
            />
          );
        })}
      </div>
      <BasicButton
        identificator={button.identificator}
        textButton={button.textButton}
        className="mt-auto"
      />
    </form>
  );
}
