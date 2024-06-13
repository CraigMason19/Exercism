interface TeamStats {
    matchesPlayed: number;
    wins: number;
    draws: number;
    losses: number;
    points: number;
}

type TeamName = string;

interface Table {
    [key: TeamName]: TeamStats;
}

// Behaves like overwrite
function replaceAt(str: string, index: number, replacement: string): string {
    if (index < 0 || index >= str.length) {
        throw new Error('Index out of bounds');
    }

    return str.substring(0, index) + replacement + str.substring(index + replacement.length);
}

export class Tournament {
    public table: Table = {};

    public tally = (input: string): string => {
        let results = input.split('\n').filter(r => r != '');
    
        this.construct(results);
        this.update(results);
    
        return this.stringify();
    };

    public construct = (results: string[]) : void => {
        this.table = {} as Table;
        let teams = new Set<TeamName>();
    
        results.forEach(r => {
            let tmp = r.split(';');
            teams.add(tmp[0]);
            teams.add(tmp[1]);
        });
    
        teams.forEach(t => {
            this.table[t] = { matchesPlayed:0, wins:0, draws:0, losses:0, points:0 };
        });
    };

    public update = (results: string[]): void => {
        results.forEach(r => {
            let tmp = r.split(';');
    
            this.table[tmp[0]].matchesPlayed++;
            this.table[tmp[1]].matchesPlayed++;
    
            switch(tmp[2])
            {
                case 'win':
                    this.table[tmp[0]].wins++;
                    this.table[tmp[1]].losses++;
    
                    this.table[tmp[0]].points += 3;
                    break;
                case 'loss':
                    this.table[tmp[0]].losses++;
                    this.table[tmp[1]].wins++;
    
                    this.table[tmp[1]].points += 3;
                    break;
                case 'draw':
                    this.table[tmp[0]].draws++;
                    this.table[tmp[1]].draws++;
    
                    this.table[tmp[0]].points++;
                    this.table[tmp[1]].points++;
                    break;
            }
        });
    }

    public stringify = (): string => {
        let output = ["Team                           | MP |  W |  D |  L |  P"];
    
        let objects = Object.entries(this.table);
        objects = objects.sort((a, b) => b[1].points - a[1].points || a[0].localeCompare(b[0]));
    
        for (let [key, value] of objects) 
        {
            let points = value.points < 10 ? ` ${value.points}` : `${value.points}`;
            let row = `Team                           |  ${value.matchesPlayed} |  ${value.wins} |  ${value.draws} |  ${value.losses} | ${points}`;
            output.push(replaceAt(row, 0, key));
        }
    
        return output.join("\n"); 
    };
}

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

let tally = new Tournament().tally(input);

console.log("Expected");
console.log(expected);

console.log("\nTally");
console.log(tally);