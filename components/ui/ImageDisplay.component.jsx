import React from "react";
import Image from "next/image";

export default function ImageDisplay({
  className,
  imgClassName = "",
  img,
  altText,
}) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={img}
        alt={altText}
        fill
        className={`w-full h-full object-contain ${imgClassName}`}
      />
    </div>
  );
}
