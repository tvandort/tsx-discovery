interface Person {
  firstName: string;
  lastName: string;
}

function greet(person: Person) {
  return `Hello, ${person.firstName} ${person.lastName}.`;
}

const user = {
  firstName: 'John',
  lastName: 'Egbert'
};

const output = greet(user);

console.log(output);
