var quotes = [
	["You know the Kama Sutra? I can rewrite it. In half as many words.", "- We Can Funk"],
	
	["Every time I comb my hair thoughts of you get in my eyes.  You're a sinner, I don't care I just want your creamy thighs.", "- Erotic City"], 
	
	["We be funkin' over here, and over there ain't shit!", "- We Can Funk"],
	
	["I just wanna holler, scream, and shout When U let your fingers do the walkin' in and out and all about  319.", "- 319"], 
	
	["You've got an ass like I've never seen, and the ride is so smooth... u must be a limousine." , "- Little Red Corvette"],
	
	["If you tell me to walk a straight line, I'll put on crooked shoes.", "- My Name is Prince"],
	
	["Pardon us 4 caring, we didn't know it was against the rules!", "- New Power Generation"], 
	
	["So far, so pleased. I like the way U touch me I like the way U tease.", "- So Far, So Pleased"], 
	
	["How many y'all just came to dance? Let me c u shake ur pants. We don't give a duck what u got on U just need 2 work that sexy body all nite long", "- 1+1+1 Is 3"], 
	
	["I'm not sayin' this just 2 be nasty I sincerely wanna fuck the taste out of your mouth. Can u relate?", "- Let's Pretend We're Married"]
];

var currentQuote;

function randomQuote(){
	var x = Math.floor(Math.random() * quotes.length)
		document.getElementById("quotation").innerHTML = 
		quotes[x][0];
	
		document.getElementById("song").innerHTML = quotes[x][1];
	
	currentQuote = quotes[x][0];
	
}

$("#tweetIt").click(function(){
	var textTweet = currentQuote;
	
	if(currentQuote.length > 120){
		currentQuote.slice(0, 120) === textTweet;
	}
	
	
	var tweetLink = "https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + textTweet +'"');
	window.open(tweetLink, "blank")
	
	});
