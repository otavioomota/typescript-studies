
// Generics: São funcionalidades que permitem a passagem de tipos.

// Quem está consumindo a função é que é o encarregado de passar os tipos.

// Conversões

// State - S
// Type - T
// Key - K
// Value - V
// Element - E

function print<T>(param: T){
  console.log(param)
};

function printNumber(param: number){
  print<number>(param);
};

function printString(param: string){
  print<string>(param);
};

