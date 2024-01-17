class GradeSchool {
  constructor() {
      this.data = {};
  }
  roster() {
      return JSON.parse(JSON.stringify(this.data));
  }

  add(name, grade) {
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

  grade(grade) {
      return (grade in this.data) ? this.data[grade].sort().slice(0) : [];
  }
  students() {
      return Object.values(school.roster()).flat();
  }
}