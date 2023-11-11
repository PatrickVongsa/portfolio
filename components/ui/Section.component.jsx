import React from 'react'

export default function Section({children, className, ...props}) {
  return (
    <section {...props} className={`w-full p-4 md:p-8 lg:p-16 lg:py-32 scroll-p-12 ${className}`}>{children}</section>
  )
}
