import React from "react";

const Input = ({
  label,
  name,
  register,
  required,
  errors,
  placeholder = "",
}) => (
  <div className="my-2 w-full">
    <label className="block mb-2">{label}</label>
    <input
      className="block border p-4 w-full text-black placeholder:text-gray-600 rounded-xl"
      placeholder={placeholder}
      {...register(name, { required })}
    />
    <p className="mt-2 text-red-500 font-bold">{errors[name]?.message}</p>
  </div>
);

export default Input;
