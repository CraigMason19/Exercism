const DEFAULT_STUDENTS: Student[] = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eve',
    'Fred',
    'Ginny',
    'Harriet',
    'Ileana',
    'Joseph',
    'Kincaid',
    'Larry',
];
  
  const PLANT_CODES = {
    G: 'grass',
    V: 'violets',
    R: 'radishes',
    C: 'clover',
} as const;
  
type Student = string
type Plant = (typeof PLANT_CODES)[keyof typeof PLANT_CODES]
type Plants = Plant[]
  
export class Garden {
    rows: string[];
    students: Student[];

    constructor(diagram: string, students = DEFAULT_STUDENTS) {
        this.rows = diagram.split("\n");
        this.students = students;
    }
  
    public plants(student: Student): Plants {
        let index = this.students.sort().indexOf(student) * 2;

        let plants: Plant[] = [
            this.rows[0][index], this.rows[0][index + 1],
            this.rows[1][index], this.rows[1][index + 1],
        ].map(p => PLANT_CODES[p as keyof typeof PLANT_CODES]);

        return plants;
    }
}

let garden: Garden = new Garden("VRCGVVRVCGGCCGVRGCVCGCGV\nVRCCCGCRRGVCGCRVVCVGCGCV");

console.log(garden.rows);

DEFAULT_STUDENTS.forEach(student => {
    console.log(student + "->" + garden.plants(student));
});