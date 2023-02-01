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

function printTeacher(firstName, lastName): printTeacherFunction {
  console.log(`${firstName[0]}. ${ lastName}`);
}
