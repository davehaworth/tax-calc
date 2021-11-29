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
      <h3>Calculate your tax</h3>
      <br />
      <span>Enter your salary: <input type='number' name='salary' value={salary} onChange={handleChange}></input></span>
      <button onClick={handleSubmit}>Submit</button>
      <IfSalary taxed={taxed.tax} >
        <div className='secondBox'>
          <p>You will pay ${taxed.tax} in taxes</p>
          <p>Your salary after tax is ${taxed.newSalary}</p>
        </div>
      </IfSalary>
      <IfNotSalary taxed={taxed.tax}>
        <p className='firstBox'>Calculate your tax by entering a salary above!</p>
      </IfNotSalary>
    </>
  )
}

export default Calculator
