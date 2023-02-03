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

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return (`${firstName[0]}. ${ lastName}`);
}

console.log(printTeacher("John", "Doe"))

interface StudentClassContructor {
  firstName: string;
  lastName: string;
}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClass {
  firstName: string;
  lastName: string;
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

const student = new StudentClass({firstName:"Ayomide", lastName:"Soniyi"});
console.log(student.displayName());
console.log(student.workOnHomework());