import React from 'react'

export function IfSalary ({ children, taxed }) {
  return taxed !== 0
    ? <>{children}</>
    : null
}

export function IfNotSalary ({ children, taxed }) {
  return taxed === 0
    ? <>{children}</>
    : null
}
