function generate(){
    var quotes ={
       "-Albert Einstein": '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty."',
       "-Deepak Chopra":'" Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions."',
       "-Aaron Lauritsen":'"There is strange comfort in knowing that no matter what happens today, the Sun will rise again tomorrow."',
       "-Mary Astell":'"If all men are born free, how is it that all women are born slaves?"',
       "-Aaron Lauritsen":'"The struggles we endure today will be the ‘good old days’ we laugh about tomorrow."',
       "-Jenny Valentine":'"Even when you’d lost everything you thought there was to lose, somebody came along and gave you something for free."',
       "-Jamie Ford":'"The library is like a candy store where everything is free."',
       "-Mae West":'"You only live once, but if you do it right, once is enough."',
       "-Albert Einstein":'"If you want to live a happy life, tie it to a goal, not to people or things."',
       "-Will Smith":'"Money and success don’t change people; they merely amplify what is already there."',
       "-Seneca":'"Not how long, but how well you have lived is the main thing."',
       "-Leo Burnett":'"Curiosity about life in all of its aspects, I think, is still the secret of great creative people."',
       "-Kobe Bryant":'"Everything negative – pressure, challenges – is all an opportunity for me to rise."',
       "-LeBron James":'"I like criticism. It makes you strong."',
       "-Helen Keller":'"When we do the best we can, we never know what miracle is wrought in our life or the life of another"'
    }
    var authors = Object.keys(quotes);
    var author=authors[Math.floor(Math.random()*authors.length)];
        // console.log((Math.random() * 
        // authors.length));
    var quote = quotes[author];

// var nehal = document.getElementById("quote").innerHTML;
// console.log(nehal);

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;


//     var achal = document.getElementById("quote").innerHTML;
// console.log(achal);

}
