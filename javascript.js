var quotes = [
    'Life is what happens to us while we are making other plans. ― Allen Saunders',
    'Life isnt about finding yourself. Life is about creating yourself ― George Bernard Shaw',
    'Doubt kills more dreams than failure ever will.”  Suzy Kassem',
    'You are who you are meant to be. Dance as if no ones watching. Love as if its all you know. Dream as if youll live forever. Live as if youll die today. James Dean',  
    'You do not find the happy life. You make it. — Camilla Eyring Kimball'
] 

function newQuote() {
    var randomNumber = Math.floor(Math.random()* 5);
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}


