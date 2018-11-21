var characters = [
    {"name": "kenobi", "image": "./assets/images/ben.jpg", "health points": "100", "attack Powers": "20", "Counter Attack Power": 10},
    {"name": "luke", "image": "./assets/images/luke.jpg", "health points": " ", "attack Powers": "", "Counter Attack Power": 20 },
    {"name": "vader", "image": "./assets/images/vader.jpg", "health points": " ", "attack Powers": "", "Counter Attack Power": 35 },
    {"name": "fett", "image": "./assets/images/fett.jpg", "health points": " ", "attack Powers": "", "Counter Attack Power": 30 }]    

// var theCobWeb = {
//     biggestWeb: {
//       item: "comb",
//       biggerWeb: {
//         items: ["glasses", "paperclip", "bubblegum"],
//         smallerWeb: {
//           item: "toothbrush",
//           tinyWeb: {
//             items: ["toenails", "lint", "wrapper", "homework"]
//           }
//         }
//       },
//       otherBigWeb: {
//         item: "headphones"
//       }
//     }
//   };
// console.log("I found my " + theCobWeb.biggestWeb.biggerWeb.items[0] + "!");
// console.log("I found my " + theCobWeb.biggestWeb.biggerWeb.smallerWeb.item + "!");
// console.log("I found my " + theCobWeb.biggestWeb.otherBigWeb.item + "!");
// console.log("I found my " + theCobWeb.biggestWeb.biggerWeb.smallerWeb.tinyWeb.items[3] + "!");

var player = [];
var enemies = [];
var target =[];
var playerHP = [];
var enemyHP = [];

var startGame = false;

function setup() {
    $.each (characters, function(i,character) {
        var setupDudes = '<img id="'+character.name+'" src="'+character.image+'">';
        $("#dudes").append(setupDudes);
        // $("#hit-list").append(setupDudes).style(hidden);
        // $("#current-enemy").append(setupDudes).style(hidden);
        gameStart = false;
    })
    addEventOnClick();
}

function addEventOnClick() {
    $.each(characters, function (i, character) {
        $("#" + character.name).on("click", function () {
            characterChosen('"'+ character.name + '"');
        });
    });
 }

$ (function(){
    setup();
})

function characterChosen(choice) {
    if (startGame) {
        // targetSelect();
    }
    else {
        // $("#characters").empty();
        startGame = true;
    }
}

// function targetSelect(){

//     var newEnemy = '<img src="'+character.image+'">';
//     $("#current-enemy").append(newEnemy);
// }