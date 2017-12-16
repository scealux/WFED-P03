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
               "He's a war hero because he was captured. I like people that weren't captured, OK?",
               "You could see there was blood coming out of her eyes, blood coming out of her wherever.",
               "I cherish women. I want to help women. I'm going to be able to do things for women that no other candidate would be able to do.",
               "When these people walk in the room, they don't say, Oh, hello! How's the weather? It's so beautiful outside. Isn't it lovely? How are the Yankees doing? Oh they're doing wonderful. Great.' They say, We want deal!",
               "I have a plan, but ... If I win, I don't want to broadcast to the enemy exactly what my plan is.",
               "Look at that face! Would anyone vote for that? Can you imagine that, the face of our next president?!",
               "I'm looking at guys like Marco Rubio who has the worst voting record in the United States Senate. Young guy although he sweats more than any young person I've seen in my life. I've never seen a person sweat â€” I have never seen a guy down water like he downs water. They bring it in in buckets for this guy.",
               "I believe in clean air. Immaculate air. ... But I don't believe in climate change.",
               "Did you ever see a migration like that? They're all men, and they're all strong-looking guys ... . And I'm saying to myself: Why aren't they fighting to save Syria? Why are they migrating all over Europe? Seriously.",
               "It's really cold outside, they are calling it a major freeze, weeks ahead of normal. Man, we could use a big fat dose of global warming!",
               "I've done it four times out of hundreds, and I'm glad I did it. I used the laws of the country to my benefit. I'm sorry.",
               "How stupid are the people of Iowa? How stupid are the people of the country to believe this crap?",
               "When he said he stabbed somebody with a knife but it hit a belt buckleâ€”I know all about knives and belt buckles.",
               "I watched when the World Trade Center came tumbling down. And I watched in Jersey City, N.J., where thousands and thousands of people were cheering as that building was coming down. Thousands of people were cheering.",
               "Obama said in his speech that Muslims are our sports heroes. What sport is he talking about, and who? Is Obama profiling?",
               "Does everyone see that the Democrats and President Obama are now, because of me, starting to deport people who are here illegally. Politics!",
               "I could stand in the middle of Fifth Avenue and shoot somebody and I wouldn't lose voters.",
               "I refuse to call Megyn Kelly a bimbo, because that would not be politically correct. Instead I will only call her a lightweight reporter!",
               "If you see somebody getting ready to throw a tomato, knock the crap out of 'em, would you? Seriously. OK? Just knock the hell - I promise you, I will pay for the legal fees. I promise. I promise.",
               "I would bring back waterboarding. And I'd bring back a hell of a lot worse than waterboarding.",
               "Wow, Jeb Bush, whose campaign is a total disaster, had to bring in mommy to take a slap at me. Not nice!",
               "Don't believe those phony numbers when you hear 4.9 and 5 percent unemployment. The number's probably 28, 29, as high as 35. In fact, I even heard recently 42 percent.",
               "[Putin] called me a genius, I like him so far, I have to tell you.",
               "Don't tell me it doesn't workâ€”torture works. Half these guys [say]: 'Torture doesn't work.' Believe me, it works.",
               "If and when the Vatican is attacked by ISIS, which as everyone knows is ISIS's ultimate trophy, I can promise you that the Pope would have only wished and prayed that Donald Trump would have been President because this would not have happened.",
               "I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things.",
               "We're totally predictable. And predictable is bad. Sitting at a meeting like this and explaining my views and if I do become president, I have these views that are down for the other side to look at, you know. I hate being so open.",
               "After I beat them, I'm going to be so presidential, you're going to be so bored, you're going to say, this is the most boring human being I've ever interviewed.",
               "Which is true, actually, I actually have low blood pressure, can you believe it? Can you believe it? I have like 100 over something. The doctor said, Man you have the blood pressure of a great, great, athlete who is 20 years old. 110, I like that, because I like being a great athlete.",
               "[Kasich] is just a guy who is a stubborn guy who eats like a slob.",
               "Do I look a president? How handsome am I, right? How handsome?",
               "We can't continue to allow China to rape our country, and that's what they're doing.",
               "Happy #CincoDeMayo! The best taco bowls are made in Trump Tower Grill. I love Hispanics!",
               "First of all, you never have to default because you print the money, I hate to tell you, OK? So there's never a default.",
               "I'm the king of debt. I understand debt better than probably anybody. I know how to deal with debt, so well. I love debt.",
               "I thought this would be like Dr. Martin Luther King, where the people would be lined up from here all the way to the Washington Monument.",
               "Look at my African-American here!",
               "I was the one that really broke the glass ceiling on behalf of women more than anybody in the construction industry, and my relationship, I think, is going to end up being very good with women.",
               "And by the way, just so you know, I am the least racist person, the least racist person that you've ever seen, the least.",
               "They're trying to take over our children. ...They're pouring in and we don't know what we're doing.",
               "I feel like a supermodel except, like, times 10, OK? It's true. I'm a supermodel.",
               "I don't think anybody should listen to me because I haven't really focused on it very much.",
               "That could be a Mexican plane up there. They're getting ready to attack",
               "Hillary wants to abolish, essentially abolish, the Second Amendment. By the way, and if she gets to pick her judges, nothing you can do, folks. Although the Second Amendment peopleâ€”maybe there is, I don't know. But I'll tell you what, that will be a horrible day.",
               "[Barack Obama] is the founder of ISIS. He's the founder of ISIS, OK? He's the founder. He founded ISIS and I would say the co-founder would be crooked Hillary Clinton.",
               "You're living in poverty, your schools are no good, you have no jobs. Fifty-eight percent of your youth is unemployed. What the hell do you have to lose? And at the end of four years, I guarantee you that I will get over 95 percent of the African-American vote. I promise you. Because I will produce.",
               "[Hillary Clinton] goes around with armed bodyguards like you have never seen before. I think that her bodyguards should drop all weapons. They should disarm. Right? Right? I think they should disarm immediately.",
               "Do people notice Hillary is copying my airplane rallies she puts the plane behind her like I have been doing from the beginning.",
               "She [Alicia Machado] was the winner and she gained a massive amount of weight, and it was a real problem.",
          ],
          sources: [
               "(Campaign launch speech, New York City, June 16, 2015)",
               "(Campaign launch speech, June 16, 2015)",
               "(Campaign launch speech, June 16, 2015)",
               "(Campaign launch speech, June 16, 2015)",
               "(â€œEntertainment Tonight,â€ July 1, 2015)",
               "(Retweeted and then deleted on Twitter, July 4, 2015)",
               "(in an interview with CNN, July 9, 2015.)",
               "(on Sean Hannity's show, July 15, 2015)",
               "(on Sean Hannity's show, July 15, 2015)",
               "(On Sean Hannity's show, July 15, 2015)",
               "(On Senator John McCain, on July 17, 2015)",
               "(About Megyn Kelly, on August 7, 2015.)",
               "(CNN, August 9, 2015)",
               "(Trump discussing Asians at an August 2015 rally in Iowa)",
               "(NBC's commander-in-chief forum, Sept. 7, 2016)",
               "(On September 9, 2015, talking about GOP candidate Carly Fiorina)",
               "(Morning Joe interview. September 24, 2015)",
               "(CNN TV Interview, September 24, 2015)",
               "(On Syrian refugees in Keene, N.H. September 30, 2015)",
               "(Twitter, October 19, 2015)",
               "(On his bankruptcies. GOP debate, October 28, 2015)",
               "(Rally in Fort Dodge, Iowa, November 12, 2015)",
               "(Interview on CNN speaking about Ben Carson's memoir, November 12, 2015)",
               "(Referring to Muslims celebrating on 9/11, Nov. 21, 2015)",
               "(Twitter, December 7, 2015)",
               "(Twitter, December 25, 2015)",
               "(Rally in Iowa, January 23, 2016)",
               "(Twitter, January 27, 2016)",
               "(Referring to protesters, rally in Iowa, February 1, 2016)",
               "(Republican primary debate in New Hampshire, February 6, 2016)",
               "(Twitter, February 6, 2016)",
               "(New Hampshire primary victory speech, February 9, 2016)",
               "(Republican primary debate in South Carolina, February 13, 2016)",
               "(Campaign event at a South Carolina retirement community, February 17, 2016)",
               "('Response to the Pope,' Facebook, February 18, 2016)",
               "(Asked on Morning Joe who his foreign policy consultants are, March 16, 2016)",
               "(Interview with Washington Post editorial board, March 21, 2016)",
               "(Interview on â€œFox News Sundayâ€ April 3, 2016)",
               "(Rally in Waterbury, Connecticut, April 23, 2016)",
               "(Rally in West Chester, Pennsylvania, April 25, 2016)",
               "(Rally in West Chester, Pennsylvania, April 25, 2016)",
               "(Rally in Fort Wayne, Indiana, May 1, 2016)",
               "(Twitter, May 5, 2016)",
               "(CNN, May 9, 2016)",
               "(CNN, May 9, 2016)",
               "(Rally at Lincoln Memorial, Washington D.C., May 29, 2016)",
               "(Rally in California, June 3, 2016)",
               "(Interview with Bill O'Reilly, June 6, 2016)",
               "And by the way, just so you know, I am the least racist person, the least racist person that you've ever seen, the least.",
               "(On refugees suspected of being terrorists, June 13, 2016)",
               "(Rally in Arizona, June 18, 2016)",
               "(Interview on Fox Business regarding Brexit, June 22, 2016)",
               "(Rally in New Hampshire, June 30, 2016)",
               "(Rally in North Carolina, Aug 9, 2016)",
               "(Rally in Sunrise, Florida, August 10, 2016)",
               "(Rally in Dimondale, Michigan, August 19, 2016)",
               "(Rally in Miami, Florida, September 16, 2016)",
               "(Twitter, September 20, 2016)",
               "(Interview on Fox News, September 27, 2016)",

          ]
     },
     created: function () {
          var numberOfQuotes = 59;
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
               var numberOfQuotes = 59; //NUMBER OF QUOTES-----------------------------------------------------------
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
