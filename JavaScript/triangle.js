class Triangle {
    constructor(...sides) {
        if (sides.length != 3) {
            throw new Error("Shape is not a triangle"); 
        }

        [this.a, this.b, this.c] = sides;
    }

    isValid() {
        if([this.a, this.b, this.c].some(s => (s <= 0))) {
            return false;
        } 

        let result = (this.a + this.b >= this.c) && (this.b + this.c >= this.a) && (this.a + this.c >= this.b);
        if(!result) {
            return false;
        }

        return true;
    }

    get isEquilateral() {
        const s = new Set([this.a, this.b, this.c]);
        return s.size === 1 && this.isValid();
    }          

    get isIsosceles() {
        const s = new Set([this.a, this.b, this.c]);
        return s.size != 3 && this.isValid();
    }
    
    get isScalene() {
        const s = new Set([this.a, this.b, this.c]);
        return s.size === 3 && this.isValid();
    }
}

const triangles = [new Triangle(3,4,5),
    new Triangle(4,4,4),
    new Triangle(2,3,0),
];

triangles.forEach(tri => {
    console.log(tri);
    console.log("isValid -> ", tri.isValid());
    console.log("isEquilateral -> ", tri.isEquilateral);
    console.log("isIsosceles -> ", tri.isIsosceles);
    console.log("isScalene -> ", tri.isScalene);
    console.log("");
});