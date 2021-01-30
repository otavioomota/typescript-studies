// Utility Types

// Generics
// Partial -> the interface is part of the main interface
// Pick -> the interface is some picks of the main interface
// Omit -> the interface is some omits of the main interface
// Readonly -> type only of read. The object cannot be changed.

interface UserData{
  login: string;
  password: string;
  name: string;
  age: number;
  occupation: string;
}


//Partial -> login and password is part of User
function printUserDataPartial(user: Partial<UserData>){
  console.log(user.login, user.password);
};

const userPartial = {
  login: 'otavioomota',
  password: 'senha',
  age: 11
}

printUserDataPartial(userPartial);

// Pick -> the parameters login and password become a new interface picking from UserData
function printUserDataPick(user: Pick<UserData, 'login' | 'password'>){
  console.log(user.login);
  console.log(user.password)
}

const userPick = {
  login: 'otavioomota',
  password: 'senha',
}

printUserDataPick(userPartial)

//Omit -> the parameters select became omitted from the main interface


function printUserDataOmit(user: Omit<UserData, 'login' | 'password'>){
  console.log(user.name);
  console.log(user.age);
  console.log(user.occupation);
}

const userOmit = {
  name: 'otavioomota',
  age: 11,
  occupation: 'student'
}

printUserDataOmit(userOmit);


// Readonly -> Don't allow the field be changed
interface JobConfig {
  readonly name: string;
  time: string;
}

const config: JobConfig = {
  name: 'steaker',
  time: '10'
};

// config.name = '123'

//or

const config2: Readonly<JobConfig> = {
  name: 'teacher',
  time: '20'
};

// config2.name = 'trasher',
// config2.time = '123'