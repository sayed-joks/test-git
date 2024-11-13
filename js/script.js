
var quote = [
  "“Be yourself; everyone else is already taken.”― Oscar Wilde",
  "“So many books, so little time.”― Frank Zappa",
  "“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”― Albert Einstein",
  "“A room without books is like a body without a soul.”― Marcus Tullius Cicero",
  "“Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.”― Bernard M. Baruch",
  "“You have gotta dance like there is nobody watching,Love like you will never be hurt,Sing like there is nobody listening,And live like it is heaven on earth.”― William W. Purkey",
  "“You know you are in love when you cant fall asleep because reality is finally better than your dreams.”― Dr. Seuss",
];
function newQuote() {
  var randomQuote = quote[Math.floor(Math.random() * quote.length)];
  output.innerHTML = randomQuote;
}
