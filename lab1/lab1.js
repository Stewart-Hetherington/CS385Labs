function startersBtnClicked() { 

var starters = ["Ceasar Salad", "Prawn Cocktail", "Goats Cheese Salad", "Greek Salad", "Bruchetta"]; 
var max = 5; 
var randomNum = Math.floor(Math.random() * max); 
var starter = starters[randomNum]; 
    $("#startersBtnOutputDiv").html("<p class = 'lead text-justify'><h2> The starter is ..." + starter +" </h2></p>"); 
} 

function mainsBtnClicked() { 

var mains = ["Steak on a Stone", "Salmon Fillet", "Roast Chicken", "Roast Duck", "Vegetarian Lasagne"]; 
var max = 5; 
var randomNum = Math.floor(Math.random() * max); 
var main = mains[randomNum]; 

    $("#mainsBtnOutputDiv").html("<p class = 'lead text-justify'><h2> The Main is ..." + main +" </h2></p>"); 
} 

  

function dessertBtnClicked() { 

var desserts = ["Ice Cream Selection", "Apple Pie", "Cheese Board", "Banoffie", "Cheese Cake"]; 
var max = 5; 
var randomNum = Math.floor(Math.random() * max); 
var dessert = desserts[randomNum]; 

    $("#dessertBtnOutputDiv").html("<p class = 'lead text-justify'><h2> The dessert is ..." + dessert +" </h2></p>"); 

} 

  

function startOverBtnClicked() { 

    $("#startersBtnOutputDiv").html("<p class = 'lead text-justify'><h2> Please select a starter </h2></p>"); 
    $("#mainsBtnOutputDiv").html("<p class = 'lead text-justify'><h2> Please select a Main </h2></p>"); 
    $("#dessertBtnOutputDiv").html("<p class = 'lead text-justify'><h2> Please select a dessert </h2></p>"); 
} 
