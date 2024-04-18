let table;

const constructTable = (results) => {
    table = { };
    let teams = new Set();

    results.forEach(r => {
        let tmp = r.split(';');
        teams.add(tmp[0]);
        teams.add(tmp[1]);
    });

    teams.forEach(t => {
        table[t] = {matchesPlayed:0, wins:0, draws:0, losses:0, points:0 };
    });
};

const updateTable = (results) => {
    results.forEach(r => {
        let tmp = r.split(';');

        table[tmp[0]].matchesPlayed++;
        table[tmp[1]].matchesPlayed++;

        switch(tmp[2])
        {
            case 'win':
                table[tmp[0]].wins++;
                table[tmp[1]].losses++;

                table[tmp[0]].points += 3;
                break;
            case 'loss':
                table[tmp[0]].losses++;
                table[tmp[1]].wins++;

                table[tmp[1]].points += 3;
                break;
            case 'draw':
                table[tmp[0]].draws++;
                table[tmp[1]].draws++;

                table[tmp[0]].points++;
                table[tmp[1]].points++;
                break;
        }
    });
}
 
// Behaves like overwrite
String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

const stringifyTable = () => {
    let output = ["Team                           | MP |  W |  D |  L |  P"];

    let objects = Object.entries(table);
    objects = objects.sort((a, b) => b[1].points - a[1].points || a[0].localeCompare(b[0]));

    for (let [key, value] of objects) 
    {
        let points = value.points < 10 ? ` ${value.points}` : `${value.points}`;
        let row = `Team                           |  ${value.matchesPlayed} |  ${value.wins} |  ${value.draws} |  ${value.losses} | ${points}`;
        output.push(row.replaceAt(0, key));
    }

    return output.join("\n"); 
};

const tournamentTally = (input) => {
    let results = input.split('\n').filter(r => r != '');

    constructTable(results);
    updateTable(results);

    return stringifyTable();
};

const expected =
    'Team                           | MP |  W |  D |  L |  P\n' +
    'Allegoric Alaskans             |  3 |  2 |  1 |  0 |  7\n' +
    'Courageous Californians        |  3 |  2 |  1 |  0 |  7\n' +
    'Blithering Badgers             |  3 |  0 |  1 |  2 |  1\n' +
    'Devastating Donkeys            |  3 |  0 |  1 |  2 |  1';

const input =
    'Courageous Californians;Devastating Donkeys;win\n' +
    'Allegoric Alaskans;Blithering Badgers;win\n' +
    'Devastating Donkeys;Allegoric Alaskans;loss\n' +
    'Courageous Californians;Blithering Badgers;win\n' +
    'Blithering Badgers;Devastating Donkeys;draw\n' +
    'Allegoric Alaskans;Courageous Californians;draw';

let tally = tournamentTally(input);

console.log("Expected");
console.log(expected);

console.log("\nTally");
console.log(tally);