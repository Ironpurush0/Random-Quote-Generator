const inputField = document.getElementById('input');
const button = document.getElementById('btn');
const singleColon = document.getElementById('colon');
const innerLine = document.getElementById('inner');
const manInner = document.getElementById('mainInner');


const quotes = ['Begin now to be what you will be hereafter. Saint Jerome', 'We have to do the best we are capable of. This is our sacred human responsibility. Albert Einstein', 'You have as much laughter as you have faith. Martin Luther', 'The brain is wider than the sky. Emily Dickinson', 'Two roads diverged in a wood, and I took the one less traveled by, and that has made all the difference. Robert Frost', 'Learn to sell. Learn to build. If you can do both, you will be unstoppable. Naval Ravikant', 'The greatest thing in the world is to know how to belong to oneself. Michel de Montaigne', 'Great things are not accomplished by those who yield to trends and fads and popular opinion. Jack Kerouac', 'Your labor is your contribution to the miracle. Elizabeth Gilbert', 'Don’t judge each day by the harvest you reap but by the seeds that you plant. Robert Louis Stevenson', 'Never confuse a single defeat with a final defeat. F. Scott Fitzgerald', 'In order to attain the impossible, one must attempt the absurd. Miguel de Cervantes', 'We are what we repeatedly do. Excellence, then, is not an act, but a habit. Aristotle', 'I want to stay as close to the edge as I can without going over. Out on the edge you see all kinds of things you can’t see from the center. Kurt Vonnegut', 'What lies behind us and what lies before us are tiny matters compared to what lies within us. Henry Stanley Haskins', 'At the end of the day it’s not about what you have or even what you’ve accomplished… it’s about who you’ve lifted up, who you’ve made better, it’s about what you’ve given back. Denzel Washington'];


function generate() {
    const generateQuotes = Math.floor(Math.random() * quotes.length);
    return "#" + " " + quotes[generateQuotes];

}

function colorGenerator() {

    newColour = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
    console.log(newColour.length);
    if (newColour.length < 7) {
        colorGenerator();
    }
}

function colorGenerator2() {

    newColour2 = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
    console.log(newColour2.length);
    if (newColour2.length < 7) {
        colorGenerator2();
    }
}


console.log(generate());

button.addEventListener('click', function () {
    inputField.innerHTML = generate();
    colorGenerator();
    colorGenerator2();
    document.body.style.background = newColour;
    button.style.color = newColour;
    innerLine.style.background = newColour2;
    manInner.style.background = newColour2;

});



