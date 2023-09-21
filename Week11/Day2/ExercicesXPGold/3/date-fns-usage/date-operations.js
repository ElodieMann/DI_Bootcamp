import { format, addDays  } from 'date-fns'

const currentDate = new Date()
const add5Days = addDays(currentDate, 5)
const toString = format(add5Days, 'MM/dd/yyyy')

console.log(currentDate);
console.log(add5Days);
console.log(toString);

