//Javascript
var vm = new Vue ({
     el: '#vue-app',
     data: {
          theInput: '',
          currentPromptNum: 0,
          isRoundOver: false,
          tracking:false,
          areThereAnyErrors: false,
          roundStartedAt: 0,
          timePassedAtLastPress: 0,
          prompts: [
               "When Mexico sends its people, they're not sending their best. They're not sending you... They're bringing drugs. They're bringing crime. They're rapists. And some, I assume, are good people.",
               "I will be the greatest jobs president that God ever created. I tell you that.",
               "I would build a great wall, and nobody builds walls better than me, believe me, and I'll build them very inexpensively, I will build a great, great wall on our southern border. And I will have Mexico pay for that wall.",
               "And we won't be using a man like Secretary Kerry ... who's just being tapped along as they make weapons right now, and then goes into a bicycle race at 72 years old, and falls and breaks his leg. I won't be doing that. And I promise I will never be in a bicycle race. That I can tell you.",
               "I don't have a racist bone in my body.",
               "Jeb Bush has to like the Mexican Illegals because of his wife.",
               "Do you know that Hillary Clinton was a birther? She wanted those records and fought like hell. People forgot. Did you know John McCain was a birther?",
               "The truth is we wouldn't be talking about illegal immigration if it weren't for me.",
               "I'm talking about Mexico is forcing people in that they don't want, and they want us to take care of those people.",
               "And I had an idea recently. When they send illegals into our country, we charge Mexico $100,000 for every illegal that crosses that border because it's trouble.",
               "He's a war hero because he was captured. I like people that weren't captured, OK?"
          ],
          sources: [
               "(Campaign launch speech, New York City, June 16, 2015)",
               "(Campaign launch speech, June 16, 2015)",
               "(Campaign launch speech, June 16, 2015)",
               "(Campaign launch speech, June 16, 2015)",
               "(“Entertainment Tonight,” July 1, 2015)",
               "(Retweeted and then deleted on Twitter, July 4, 2015)",
               "(in an interview with CNN, July 9, 2015.)",
               "(on Sean Hannity's show, July 15, 2015)",
               "(on Sean Hannity's show, July 15, 2015)",
               "(On Sean Hannity's show, July 15, 2015)",
               "(On Senator John McCain at the Family Leadership Summit in Ames, Iowa, on July 17, 2015)"
          ]
     },
     created: function () {
          var numberOfQuotes = 10;
          //console.log("On Created: "+this.tracking);
          this.currentPromptNum = Math.floor(Math.random()*numberOfQuotes);
     },
     updated: function() {
          //console.log("Before: "+this.tracking);
          //CHECKING IF THE ROUND IS OVER
          if (this.theInput == this.prompts[this.currentPromptNum]){
               this.isRoundOver = true;
               this.tracking = false;
          }else{
               this.isRoundOver = false;
          };

          //CHECK FOR ERRORS
          var currentLength = this.theInput.length;
          var currentPrompt = this.prompts[this.currentPromptNum];
          var remaining = currentPrompt.substr(currentLength, currentPrompt.length);
          //console.log ("this is the thing" + this.theInput + remaining);
          var stringToTest = this.theInput + remaining;
          if (stringToTest != this.prompts[this.currentPromptNum]){
               document.getElementById('typed').style.color = "red";
          }else{
               document.getElementById('typed').style.color = "green";
          }
          //console.log("After: "+this.tracking);
     },
     methods: {
          figureKey: function(e){
               if (!this.tracking){
                    this.tracking = true;
                    var startD = new Date();
                    this.roundStartedAt = startD.getTime();
                    this.timePassedAtLastPress = startD.getTime();
               };
               if (e.key == "Enter" && this.isRoundOver){
                    this.nextQuote();
               }else if (e.key != "Shift"){
                    //GETS THE TIME PASSED SO FAR
                    var startD = new Date();
                    this.timePassedAtLastPress = startD.getTime();
                    //console.log(this.timePassedAtLastPress);
                    //console.log(this.theInput);
                    //console.log(this.prompts[this.currentPromptNum]);
               };
          },
          nextQuote: function(e){
               console.log("Moving to new quote");
               var oldPromptNum = this.currentPromptNum;
               var numberOfQuotes = 10; //NUMBER OF QUOTES-----------------------------------------------------------
               while (oldPromptNum == this.currentPromptNum){
                    this.currentPromptNum = Math.floor(Math.random()*numberOfQuotes);
               }
               this.isRoundOver = false;
               document.getElementById("textField").value = "";
               document.getElementById("textField").focus();
               this.roundStartedAt = 0;
               this.timePassedAtLastPress = 0;
               this.tracking = false;
               this.theInput = '';

          }
     },
     computed: {
          currentSource(){
               return  this.sources[this.currentPromptNum];
          },
          percentDone: function(){
               return (this.theInput.length/this.prompts[this.currentPromptNum].length)*100;
          },
          WPM: function(){
               //console.log("Words Typed: "+ this.theInput.split(' ').length);
               //console.log("Minutes Passed: "+ this.timePassedAtLastPress/60000);
               //console.log((this.theInput.split(' ').length)/(this.timePassedAtLastPress/60000));
               var newTime = new Date();
               var nowSeconds = newTime.getTime();
               var timePassedInMin = (nowSeconds-this.roundStartedAt)/60000;
               //console.log(timePassedInMin);
               var yourWPM = Math.floor((this.theInput.split(' ').length)/(timePassedInMin));
               if (yourWPM != "Infinity" && yourWPM < 400){
                    return yourWPM;
               }else{
                    return 0;
               }
          },
          remainingString: function(){
               if (this.theInput == ''){
                    return this.prompts[this.currentPromptNum];
               } else{
                    var currentLength = this.theInput.length;
                    var currentPrompt = this.prompts[this.currentPromptNum];
                    var remaining = currentPrompt.substr(currentLength, currentPrompt.length);
                    return remaining;
               };
          },
          wordCount: function(){
               return this.prompts[this.currentPromptNum].split(' ').length;
          }
     }
});
