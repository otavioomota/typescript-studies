
interface Address {
  street: string;
  number: string;
  state: string;
}

interface User {
  name: string;
  address: Address
  age?: number; // optional
  // [key: string]: string; variable dynamics
};

const user: User = {
  name: 'Otávio',
  age: 15,
  address: {
    street: 'rua',
    number: '205',
    state: 'PB'
  }
}

function printUser(user:User){
  console.log(user)
}