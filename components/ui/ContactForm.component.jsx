import React from "react";
import Input from "./form/Input.component";
import Textarea from "./form/Textarea.component";
import Button from "./buttons/Button.component";
import { useForm } from "react-hook-form";
import { contactSchema } from "@/schema/contactSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const defaultValues = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema), // vérification des données du formulaire
    defaultValues, // valeurs par défaut du formulaire
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-4">
        <Input
          label="Prénom"
          name="firstname"
          placeholder="Votre Prénom"
          register={register}
          errors={errors}
          required
          className="w-full"
        />
        <Input
          label="Nom"
          name="lastname"
          placeholder="Votre Nom"
          register={register}
          errors={errors}
          required
          className="w-full"
        />
      </div>
      <Input
        label="E-mail"
        name="email"
        placeholder="Votre e-mail"
        register={register}
        errors={errors}
        required
      />
      <Textarea
        label="Message"
        name="message"
        placeholder="Votre message"
        register={register}
        errors={errors}
        required
      />
      <Button type="submit">Envoyer</Button>
    </form>
  );
}
