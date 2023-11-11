import React from "react";

const TitleOne = ({ children, className }) => (
  <h1 className={`text-5xl font-bold ${className}`}>{children}</h1>
);

const TitleTwo = ({ children, className }) => (
  <h2 className={`text-4xl font-bold ${className}`}>{children}</h2>
);

const TitleThree = ({ children, className }) => (
  <h3 className={`text-3xl font-bold ${className}`}>{children}</h3>
);

export default function Title({ variant, children, className ="" }) {
  switch (variant) {
    case "h1":
      return <TitleOne className={className}>{children}</TitleOne>;

    case "h2":
      return <TitleTwo className={className}>{children}</TitleTwo>;

    case "h3":
      return <TitleThree className={className}>{children}</TitleThree>;

    default:
      return null; // ou renvoyez un composant par défaut si nécessaire
  }
}
