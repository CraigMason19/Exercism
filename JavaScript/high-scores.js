Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };

class HighScores {
    constructor(scores) {
        this._scores = scores;
    }

    get scores() {
        return this._scores;
    }

    get latest() {
        return this._scores[this._scores.length - 1];
    }

    get personalBest() {
        return this._scores.max();
    }

    get personalTopThree() {
        return this._scores.sort((a, b) => b - a).slice(0, 3);
    }
}

const scores = new HighScores([30, 50, 80, 100, 20, 10, 40]);

console.log(scores.scores);
console.log(scores.latest);
console.log(scores.personalBest);
console.log(scores.personalTopThree);