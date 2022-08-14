const arrayquotes = [
    {
        'author': 'John Cena',
        'quote': 'U cant see me',
    },
    {
        'author': 'RK Dangi',
        'quote': 'If you get up without goal then go back to sleep',
    },
    {
        'author': 'RK',
        'quote': 'control your emotions and limit it to a dream',
    },
];
function genquote(){
    const random = Number.parseInt(Math.random() * arrayquotes.length);
    document.querySelector('#qt').textContent = `\"${arrayquotes[random].quote}\"`;
    document.querySelector('#at').textContent = `--${arrayquotes[random].author}`;
}