import React from "react";

export default function Button({ type = "button", className, children }) {
  return (
    <button
      type={type}
      className={`rounded-xl font-bold disabled:opacity-50 flex gap-2 items-center py-4 px-8 w-fit bg-primary border border-primary hover:brightness-125 hover:border-primary focus:border-primary ${className}`}
    >
      {children}
    </button>
  );
}
