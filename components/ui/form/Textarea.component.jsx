import React from "react";

const Textarea = ({ label, register, name, required, errors, placeholder }) => (
  <div className="my-4  w-full">
    <label className="block mb-2">{label}</label>
    <textarea
      className="block border p-4 w-full resize-none text-black placeholder:text-gray-600  rounded-xl"
      placeholder={placeholder}
      rows={8}
      {...register("message", { required })}
    />
    <p className="mt-2 text-red-500 font-bold">{errors[name]?.message}</p>
  </div>
);

export default Textarea;
