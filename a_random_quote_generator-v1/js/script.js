/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/





var quotes = [
  {quote:"The Way To Started Is To Quit Talking And Begin Doing.",
  source: "-Walt Desney",
  year:"1966"},
  {quote:"Don\'t Let Yesterday Take Up Too Much Of Today.",
  source: "-Will Rogers"},
  {quote:"Life Is Lived On The Edge.",
  source:"-Will Smith",
  citation:"Don’t live too cautiously" },
  {quote:"We May Encounter Many Defeats But We Must Not Be Defeated.",
  source:"-Maya Angelou"},
  {quote:"All successes begin with Self-Discipline. It starts with you.",
    source:"-Dwayne Johnson.",
    citation:"Grind Hard, Shine Hard."
  }
];


//Function to generate a Random Quote
function getRandomQuote() {
var randomNumber = Math.floor(Math.random()* (quotes.length));
return quotes [randomNumber];
}
//Function to print the Random Quotes
function printQuote() {
  var randomQuote= getRandomQuote();
  var messageQuote= '';
   messageQuote += '<p class="quote">'+ randomQuote.quote + '</p>';
   messageQuote += '<p class="source">'+ randomQuote.source;
 
   //If Conditional statement
  if(randomQuote.citation) {
messageQuote += '<span class="citation">' + randomQuote.citation + '</span>';
 }

 if(randomQuote.year) {
messageQuote += '<span class="year">' + randomQuote.year + '</span>';
 }
  messageQuote += '</p>';

 document.getElementById('quote-box').innerHTML = messageQuote;
}
 printQuote();

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
