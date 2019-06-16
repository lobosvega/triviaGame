function populate() {
    if(quiz.isEnded()) {
        //showScores();
    }
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
    }
}

var questions = [
    new Questions ("What is Nene Leaks known for saying?", ["Shinobi","Bloop!","Clamp!","Who gon check me boo? "], "bloop"),
    new Questions ("Who spat on Tiffany Pollard?", ["Pumpkin","Hoops","Buck Wild","Goldie"], "Pumpkin"),
    new Questions ("Johnny ________"), ["Apples","Oranges","Bananas","Berry"], "Bananas"),
    new Questions ("Has won survivor 3 times"), ["Coach","Boston Rob","Pavarti","Sandra"], "Sandra"),
    new Questions ("How many times did Coco Montrese Lipsync", ["3","5","2","4"], "4"),
    new Questions ("What show is known for a Quick FIre Challenge", ["MasterChef", "Chopped", "Cake Wars","Top Chef"], "Top Chef"),
    new Questions ("On an episode of Naked and Afraid XL someone...",["fell on a campgroud fire","poisoned the whole group with fruit","won 3 million dollars","lost more than 100lbs"], "poisoned the whole group with fruit"),
    new Questions ("Who is the host of The Amazing Race",["Rupaul","Jeff Probst","Phil Keoghan","Mark Burnett"],"Phil Keoghan"),
    new Questions ("Who is the HBIC?",["Head of the Big Brother House","Winner of The Challenge's duel","New York","A surprise guest on The Biggest Loser"],"New York"),
    new Questions ("You are the weakest _____, goodbye!"),["link","cat","fan","stan"],"link")
];

var quiz = new Quiz(questions);

populate();

