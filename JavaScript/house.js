class House {
    static chain = [
        { thing: 'the house that Jack built.', action: '' },
        { thing: 'the malt', action: 'lay in' },
        { thing: 'the rat', action: 'ate' },
        { thing: 'the cat', action: 'killed' },
        { thing: 'the dog', action: 'worried' },
        { thing: 'the cow with the crumpled horn', action: 'tossed' },
        { thing: 'the maiden all forlorn', action: 'milked' },
        { thing: 'the man all tattered and torn', action: 'kissed' },
        { thing: 'the priest all shaven and shorn', action: 'married' },
        { thing: 'the rooster that crowed in the morn', action: 'woke' },
        { thing: 'the farmer sowing his corn', action: 'kept' },
        { thing: 'the horse and the hound and the horn', action: 'belonged to' },
    ];

    static verse(id) {
        let lines = [`This is ${House.chain[id - 1].thing}`];
    
        for (let i = 1; i < id; i++) {
            lines.push(`that ${House.chain[id - i].action} ${House.chain[id - i - 1].thing}`);
        }
    
        return lines;
    }
  
    static verses(start, end) {
        let lyrics = [];
     
        for (let i = start; i <= end; i++) {
            lyrics = lyrics.concat(House.verse(i));
            lyrics = lyrics.concat('');
        }
     
        lyrics.pop();
     
        return lyrics;
    }
}

console.log(House.verses(4, 8));