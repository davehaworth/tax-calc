import React, { useState } from 'react'

import { calculate } from '../taxhelper'

function Calculator () {
  const [salary, setSalary] = useState(0)

  const [taxed, setTaxed] = useState({
    tax: undefined,
    newSalary: undefined
  })

  function handleChange (e) {
    setSalary(e.target.value)
  }

  function handleSubmit () {
    setTaxed((calculate(salary)))
  }

  return (
    <>
      <h3>Enter your salary:</h3>
      <input name='salary' value={salary} onChange={handleChange}></input>
      <button onClick={handleSubmit}>Submit</button>
      <p>You will pay ${taxed.tax} in taxes and your new taxed salary is ${taxed.newSalary}</p>
    </>
  )
}

export default Calculator
