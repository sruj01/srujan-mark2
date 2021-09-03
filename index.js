var readlineSync = require("readline-sync")
var chalk = require("chalk")
var score=0
var userChoice = readlineSync.question(chalk.black.bgMagenta(" Hey There! ")+"\n\nYou're about to learn a few miNdBogGLiNg facts about our"+chalk.magenta.bold(" Universe!")+ chalk.italic("\nBut..just to keep you engaged and on your toes, we've designed a little "+chalk.magenta("quiz")+":)")+"\n\n(You will receive " +chalk.magenta("1")+ " point for each correct answer)\n\nType "+chalk.magenta("Y")+" if you wish to proceed.Type any other key to exit. \n\n")

if (userChoice == 'Y'|| userChoice=='y')
{
  var username= readlineSync.question("Enter your name and we'll get started:  ")

  function play(question,answer,options,fact)
  {
    console.log("\n",question)
    var userAns= readlineSync.keyInSelect(options,"Enter option number\t")
    if (userAns==answer-1)
    {
      console.log(chalk.green("Right\n"))
      console.log(fact)
      score=score+1
    }
    else
    {
     console.log(chalk.red("Wrong\n"))
     console.log(fact)
    }
    console.log(chalk.magenta("Score "),score)
    console.log("---------------\n\n")
  }

  var questions=[

     {question: 'What color do you think is the universe as a whole said to be?', options: ['Black','Black Chocolate','Cosmic Latte\'','Alien Black'], answer: 3, fact:'It has been declared by scientists that the average color of Cosmos resembles a Latte\'. That must look Tasty!!'},

     {question: 'Ever wondered where the elemets that are necessary for life come from?', options: ['From a Dying Star','The Big Bang','Blackholes','Inexplicable' ], answer : 1, fact:'When a star’s core runs out of hydrogen, the star begins to die out. The dying star expands into a red giant, and this now begins to manufacture carbon atoms by fusing helium atoms.'},

     {question: 'What do you think is the average temperature of our Cosmos..', options: ['0° Celsius','100° Celsius','-100° Celsius','-270° Celsius'], answer : 4, fact:'-270° Celsius!! To put things in perspective, the temperature of Liquid Nitrogen(coldest substance on Earth) is -196° Celsius. Now that is tough to beat!'},

     {question: '\'An ocean of water floating in outer space!?\'..YEP. How much of Earth\'s ocean would it amount to...? ', options: ['A million times','A billion times','100 billion times','A LOT MORE'], answer : 4, fact:'The water is equivalent to 140 trillion times all the water in the oceans, and it could provide every single person on Earth a planet’s worth of water 20,000 times over. This is an almost incomprehensible amount of water'},

     {question: 'What percentage of the universe does matter/energy constitute? Hmmm..', options: ['30%','20%','5%'] , answer: 3, fact:'Only about 4.9% of the mass-energy of the Universe is atoms, and of that, only half has been spotted with telescopes'} ,

     {question: 'Ever think about alien life? ', options: ['Yes','No'], answer : 1, fact:'Ofcourse you have, regardless of your answer.\nDo they exist:  Most probably\nCan you meet them:  Very Unlikely'}

     ]

  for(var i=0;i<questions.length;i++)
  {
  var currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer, currentQuestion.options, currentQuestion.fact)

  }

  var highScore=[{
    name: 'srujan',
    score: 6},

    {name: 'druv',
    score: 6}]


  if (score<6){
    console.log("How'd you like it "+chalk.magenta(username)+"? Hope some of the facts blew your mind:) \nThe current leaderboard:\n")
    for(var j=0;j<highScore.length;j++){
      console.log(highScore[j])
    }
  }

  else if (score==6){
    console.log("Congratulations "+chalk.magenta(username)+"! You've got a perfect score. Send a screenshot and I'll update the charts.")
  }
}
else
{
  process.exit(0)
}
