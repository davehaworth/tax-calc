const taxRate1 = 0.105
const taxRate2 = 0.175
const taxRate3 = 0.30
const taxRate4 = 0.33
const taxRate5 = 0.39

const taxValue1 = 1470
const taxValue2 = 7420
const taxValue3 = 14020
const taxValue4 = 50320

function calculate (salary) {
  let tax = 0
  let newSalary = 0
  if (salary <= 14000) {
    tax = salary * taxRate1
    newSalary = salary - tax
    return { tax: tax, newSalary: newSalary }
  } else if (salary > 14000 && salary <= 48000) {
    tax = ((salary - 14000) * taxRate2) + taxValue1
    newSalary = salary - tax
    return { tax: tax, newSalary: newSalary }
  } else if (salary > 48000 && salary <= 70000) {
    tax = ((salary - 48000) * taxRate3) + taxValue2
    newSalary = salary - tax
    return { tax: tax, newSalary: newSalary }
  } else if (salary > 70000 && salary <= 180000) {
    tax = ((salary - 70000) * taxRate4) + taxValue3
    newSalary = salary - tax
    return { tax: tax, newSalary: newSalary }
  } else if (salary > 180000) {
    tax = ((salary - 180000) * taxRate5) + taxValue4
    newSalary = salary - tax
  }
}

const taxObj = calculate(16700)
console.log(taxObj)
