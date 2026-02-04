import Form from "../../../components/form";

export default function Home() {
  return (
    <Form
      button={{
        textButton: "Login",
        identificator: "sendLogin",
      }}
      inputs={[
        {
          textLabel: "Nombre de usuario",
          identificator: "username",
          textPlaceholder: "Mangell",
          typeInput: "text",
        },
        {
          textLabel: "Contraseña",
          identificator: "password",
          textPlaceholder: "**********",
          typeInput: "password",
        },
      ]}
    />
  );
}
