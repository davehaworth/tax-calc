import React, { useState } from 'react'

import { IfSalary, IfNotSalary } from './Salary'
import { calculate } from '../taxhelper'

function Calculator () {
  const [salary, setSalary] = useState(0)

  const [taxed, setTaxed] = useState({
    tax: 0,
    newSalary: 0
  })

  function handleChange (e) {
    setSalary(e.target.value)
  }

  function handleSubmit () {
    setTaxed((calculate(salary)))
  }

  return (
    <>
      <h3>Calculate the tax:</h3>
      <input name='salary' value={salary} onChange={handleChange}></input>
      <button onClick={handleSubmit}>Submit</button>
      <IfSalary taxed={taxed.tax}>
        <p>You will pay ${taxed.tax} in taxes and your new taxed salary is ${taxed.newSalary}</p>
      </IfSalary>
      <IfNotSalary taxed={taxed.tax}>
        <p>Calculate the tax by entering a salary above!</p>
      </IfNotSalary>
    </>
  )
}

export default Calculator
