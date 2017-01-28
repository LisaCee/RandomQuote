var quoteArray = [
	["Never trust anyone who has not brought a book with them.", "- Lemony Snicket"],
	["There is no friend as loyal as a book.", "- Ernest Hemingway"],
	["'Classic' - a book which people praise and don't read.", "- Mark Twain"],
	["Isn't it nice to think that tomorrow is a new day with no mistakes in it yet?", "- L.M. Montgomery"],
	["If one cannot enjoy reading a book over and over again, there is no use in reading at all.", "- Oscar Wilde"],
	["Fantasy is a necessary ingredient in living, it's a way of looking at life through the wrong end of a telescope.", "- Dr. Seuss"],
	["Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.", "- Neil Gaiman"],
	["The man who does not read has no advantage over the man who cannot read.", "- Mark Twain"],
	["No one can make you feel inferior without your consent.", "- Eleanor Roosevelt"],
	["If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.", "- J.K. Rowling"]
];

//create variable for current quote to use on Twitter//
var currentQuote;

//Random math function for quote from array//
function randomQuote(){
	var x = Math.floor(Math.random() * quoteArray.length);
		document.getElementById("quoteBox").innerHTML = 
		quoteArray[x][0];
		document.getElementById("author").innerHTML = quoteArray[x][1];
		currentQuote = quoteArray[x][0] + "   " + quoteArray[x][1];
};



$("#tweet").click(function(){
	var textTweet = currentQuote;
	
	if (textTweet.length > 140){
		textTweet = textTweet.slice(0, 130) + "..";
	};
	
	tweetLink = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(textTweet);	
window.open(tweetLink, "_blank");
	});
