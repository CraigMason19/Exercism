interface Student {
    [grade:number]: string[];
}

export class GradeSchool {
  readonly data: Student;

  constructor() {
      this.data = {};
  }
  roster(): Student {
      return JSON.parse(JSON.stringify(this.data));
  }

  add(name: string, grade: number): void {
      this.data[grade] ??= []; // Create if doesn't exist
      for(let key in this.data) {       
          let grade_students = this.data[key];
          let index = grade_students.indexOf(name);
          
          if(index !== -1) { 
              this.data[key] = grade_students.filter(student => student !== name);
              break;
          }
      }
      this.data[grade].push(name);
      this.data[grade].sort();
  }

  grade(grade: number): string[] {
      return (grade in this.data) ? this.data[grade].sort().slice(0) : [];
  }

  students(): string[] {
      return Object.values(this.roster()).flat();
  }
}