class Matrix {
    constructor(matrix) {
      this.data = matrix.split('\n');
    }
  
    get rows() {
      return this.data.map((row) => row.split(' ').map(Number))
    }
  
    get columns() {
      const rows = this.rows;

      let xLen = rows[0].length;
      let yLen = rows.length;
      
      let columns = [];
      
      for(let x = 0; x < xLen; x++) {
          let column = [];
      
          for(let y = 0; y < yLen; y++) {
            column.push(rows[y][x]);
          }
          
          columns.push(column)
      }
      
      return columns;  
    }
}

m = new Matrix('1 2 3\n4 5 6');

rows = m.rows;
console.log(rows);
console.log(m.columns);