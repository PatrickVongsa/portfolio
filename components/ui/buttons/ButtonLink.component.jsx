import Link from "next/link";
import React from "react";

const colors = {
  primary:
    "bg-primary border border-primary hover:brightness-125 hover:border-primary focus:border-primary",
  secondary:
    "bg-secondary border border-secondary text-black hover:brightness-125 focus:border-secondary",
};
export default function ButtonLink({
  href,
  className,
  children,
  color = "primary",
  ...props
}) {
  return (
    <Link
      href={href}
      className={`rounded-xl font-bold disabled:opacity-50 flex gap-2 items-center py-4 px-8 w-fit ${colors[color]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
