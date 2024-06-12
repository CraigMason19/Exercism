interface ChainItem {
    thing: string;
    action: string;
}

const chain: ChainItem[] = [
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

export function verse(id: number): string[] {
    let lines = [`This is ${chain[id-1].thing}`];

    for(let i = 1; i < id; i++) {
        lines.push(`that ${chain[id-i].action} ${chain[id-i-1].thing}`);
    }

    return lines;
}
  
 export function verses(start: number, end: number): string[] {
    let lyrics: string[] = [];

    for(let i = start; i <= end; i++) {
        lyrics = lyrics.concat(verse(i));
        lyrics = lyrics.concat('');
    }

    lyrics.pop();

    return lyrics;
}

console.log(verses(4, 8));