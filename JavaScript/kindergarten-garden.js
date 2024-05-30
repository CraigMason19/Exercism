const DEFAULT_STUDENTS = [
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
};

export class Garden {
    constructor(diagram, students = DEFAULT_STUDENTS) {
        this.rows = diagram.split("\n");
        this.students = students;
    }

    plants(student) {
        let index = this.students.sort().indexOf(student) * 2;

        let plants = [
            this.rows[0][index], this.rows[0][index + 1],
            this.rows[1][index], this.rows[1][index + 1],
        ].map(p => PLANT_CODES[p]);

        return plants;
    }
}

let garden = new Garden("VRCGVVRVCGGCCGVRGCVCGCGV\nVRCCCGCRRGVCGCRVVCVGCGCV");

console.log(garden.rows);

DEFAULT_STUDENTS.forEach(student => {
    console.log(student + "->" + garden.plants(student));
});