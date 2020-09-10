function sittingArrangement(person, column) {
  if (column < 1) {
      return 'invalid number'
  }
  const personSplit = [];
  for (let i = 0; i < person.length; i++) {
    const lastPerson = personSplit[personSplit.length - 1];
    if (!lastPerson || lastPerson.length === column) {
      personSplit.push([person[i]]);
    } 
    else {
      lastPerson.push(person[i]);
    }
  }
  return personSplit;
} 
console.log(sittingArrangement([ 'Juli', 'Nisa', 'Desi', 'Ulfa', 'Puji' ], 2))