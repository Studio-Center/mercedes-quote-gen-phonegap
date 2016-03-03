/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
            Symbol.bindElementAction(compId, symbolName, "${_Rectangle}", "click", function(sym, e) {
         var myQuotes = new Array();
         myQuotes[0] = "Sometimes I lose my thought of train.";
         myQuotes[1] = "I need the good stuff. That Additional Marijuana.";
         myQuotes[2] = "He said 'dingleberry' but I don't know what that shit is...some military term.";
         myQuotes[3] = "Oh hell no. I would put my Mother in an Old Folks Home.  Angel too.  I already told his ass that.";
         myQuotes[4] = "He got Chipmunk Teef.";
         myQuotes[5] = "I think she's working at Fish Bones.";
         myQuotes[5] = "She's getting ready to graduate. The's she's going for her Doctrins.";
         myQuotes[6] = "I would just click my fingers and my Dad would say How High?";
         myQuotes[7] = "I'm getting ready to put a chicken bunion cube in it.";
         myQuotes[8] = "[That man's son] was always ugly!";
         myQuotes[9] = "We just need to stick to our bread and water.";
         myQuotes[10] = "You know I'm like Wikipedia-75% of the sh*t that comes out of my mouth is true and the other 25%...you never know where that sh*t comes from.";
         myQuotes[11] = "She's on it like rice on water!";
         myQuotes[12] = "Take your drugs bitches.  I need you to have a clear head.";
         myQuotes[13] = "Danielle is at the bottom of the Tadpole.";
         
         var myRandom = Math.floor(Math.random()*myQuotes.length);
         
         sym.$("Text").html(myQuotes[myRandom]);
         // play the timeline from the given position (ms or label)
         sym.play("animate");
         

      });
         //Edge binding end



      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play("animate");

      });
      //Edge binding end

            Symbol.bindElementAction(compId, symbolName, "${_Group}", "click", function(sym, e) {
         var myQuotes = [];
         myQuotes.push("Sometimes I lose my thought of train.");
         myQuotes.push("I need the good stuff. That Additional Marijuana.");
         myQuotes.push("He said 'dingleberry' but I don't know what that $@!* is...some military term.");
         myQuotes.push("Oh hell no. I would put my Mother in an Old Folks Home.  Angel too.  I already told his @$$ that.");
         myQuotes.push("He got Chipmunk Teef.");
         myQuotes.push("I think she's working at Fish Bones.");
         myQuotes.push("She's getting ready to graduate. The's she's going for her Doctrins.");
         myQuotes.push("I would just click my fingers and my Dad would say How High?");
         myQuotes.push("I'm getting ready to put a chicken bunion cube in it.");
         myQuotes.push("[That man's son] was always ugly!");
         myQuotes.push("We just need to stick to our bread and water.");
         myQuotes.push("You know I'm like Wikipedia-75% of the $@!& that comes out of my mouth is true and the other 25%...you never know where that $@*! comes from.");
         myQuotes.push("She's on it like rice on water!");
         myQuotes.push("Take your drugs b$#@%!$. I need you to have a clear head.");
         myQuotes.push("Danielle is at the bottom of the Tadpole.");
         myQuotes.push("I need more Construction Criticism.");
         myQuotes.push("Hey Gigi, what's your name?");
         myQuotes.push("Winner Winner...Chicken Little.");
         myQuotes.push("Let me show you how one back scratches the other back.");
         myQuotes.push("It's like the blind people walking with the blind people.");
         myQuotes.push("I fell asleep while we were still on the Tarmark.  I'm out once my head hits the plane.");
         myQuotes.push("I really like the new electrical job jackets!");
         myQuotes.push("I already counted on those chips before they hatch.");
         myQuotes.push("Pope is starting to look like the salamander in the Geico Ads.");
         myQuotes.push("I'm on POINT! I've been dotting my t's and crossing my i's ALL DAY!");
         myQuotes.push("They're great!  I use them like a Dirty Diaper!");
         myQuotes.push("My sister must have been 'millencoddy' because she sent me a bunch of old pictures");
         myQuotes.push("You and your Titanic Leg!");
         myQuotes.push("You need to slow down.  You're starting to look a little John-Diced.");
         myQuotes.push("That man is stuck with me until the day he dies.");
         myQuotes.push("I wanna volunteer at a homeless shelter and feed the homeless but I don't want them to touch me.");
         myQuotes.push("I don't drink that anymore.  I drink the Jimmy Dean Honey Bourbon.");
         myQuotes.push("She's got a great body but a Cabbage Patch Kid Face.");
         myQuotes.push("I'm like Mary Poppins.  When I fly out, everyone misses me.");
         myQuotes.push("I'm in trouble.  I'm the last dog standing.");
         myQuotes.push("I really felt like deaf yesterday.");
         myQuotes.push("I'm really lazy, but not really lazy just smart.");
         myQuotes.push("So it may seem that I am lazy because I have premade job jackets but I am just really smart counting my chickens.");
         myQuotes.push("I'm just going to grab the Bull and run with it.");
         myQuotes.push("I need to take her to McCormick and Fish.");
         myQuotes.push("Don't worry.  There is a ration behind all of my sayings.");
         myQuotes.push("You mean like Phillip Milky Magnesium?");
         myQuotes.push("We have tickets to go see the Google Dolls.");
         myQuotes.push("I love my dog, but I can't wait until he dies.");
         myQuotes.push("They're opening the grass out there and it's gonna kill my allergies!"
         );
         
         
         
         
         var myRandom = Math.floor(Math.random()*myQuotes.length);
         
         sym.$("Text").html(myQuotes[myRandom]);
         // play the timeline from the given position (ms or label)
         sym.play("animate");
         
         

      });
         //Edge binding end



      Symbol.bindElementAction(compId, symbolName, "${_Call_Us}", "click", function(sym, e) {
         window.open("tel:8665152111", "_parent");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Logo_click}", "click", function(sym, e) {
         window.open("https://studiocenter.com", "_blank");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Call_Us'
   (function(symbolName) {   
   
   })("Call_Us");
   //Edge symbol end:'Call_Us'

   //=========================================================
   
   //Edge symbol: 'Logo_click'
   (function(symbolName) {   
   
   })("Logo_click");
   //Edge symbol end:'Logo_click'

})(jQuery, AdobeEdge, "EDGE-104795071");