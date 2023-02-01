interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [contract: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
// ** This works also ** //
// const printTeacher: printTeacherFunction = ((firstName, lastName) => {
//   console.log(`${firstName[0]}. ${ lastName}`);
// });

function printTeacher(firstName, lastName): printTeacherFunction {
  console.log(`${firstName[0]}. ${ lastName}`);
}

interface StudentClassContructor {
  firstName: string;
  lastName: string;
}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClass {
  constructor({firstName, lastName}: StudentClassContructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return ("Currently working")
  }

  displayName(): string {
    return this.firstName  
  }
}
