var quotes=[
    {
        author:' prophet mohamed',
        quote:' رب اغفر لقومي فإنهم لا يعلمون'}
    ,
    {
        author:`― Nelson Mandela`,
        quote:`“Education is the most powerful weapon which you can use to change the world.”`}
    ,
    {
        author:`― Plato `,
        quote:`“When a man is denied the right to live the life he believes in, he has no choice but to become an outlaw.”
        Be kind, for everyone you meet is fighting a harder battle.”`}
    ,
    {
        author:`― Frank Zappa`,
        quote:`“So many books, so little time.”`}
    ,
    {
        author:`― Oscar Wilde`,
        quote:`“Be yourself; everyone else is already taken.”`}
    ,
    {
        author:`― Mahatma Gandhi`,
        quote:`“Be the change that you wish to see in the world.”`}
    ,
    {
        author:`― Marcus Tullius Cicero`,
        quote:`“A room without books is like a body without a soul.”`}
    ,
    {
        author:`― Bernard M. Baruc `,
        quote:`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`}
    ,
    {
        author:`― Mae West`,
        quote:`“You only live once, but if you do it right, once is enough.”`}
    ,
    {
        author:`― Albert Einstein`,
        quote:`Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`},
];
function change(){
var i=[];
do{
    var random=parseInt(Math.floor(Math.random()*quotes.length ));
}while(i.includes(random));
i.push(random);
if(i.length ===quotes.length){
    i=0;
}else{
    console.log("index : " , random);
    var select= quotes[random].quote;
    document.getElementById("quoteHtml").textContent=quotes[random ].quote;
    document.getElementById("authorHtml").textContent=quotes[random].author;
    return select;
}
}

var book=[];
function favorites(){
    var add = change();
    book.push(add);
    console.log("my faivorite quote is :",book);
    return book;
}
function play(){
    var box="<h2>My faivorite quotes</h2>";
    book.push(favorites());
    var colect=box+ book;
    for(var i=0; i < colect.length ;i++){
        var box =+ `<p>${book[i]}</p>`;
    }
    document.getElementById("see").innerHTML = colect;
};

