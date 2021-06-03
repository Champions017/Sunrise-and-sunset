const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundimage;
var bg;
var response,datetime,displayHour;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImage();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundimage ){
        background(backgroundimage);
    }

    Engine.update(engine);

    // write code to display time in correct format here

    textSize(35);
    textAlign(CENTER)
    fill("turquoise")
    text("Time: " + displayHour + " hours",width/2,height/2-100); 
}
    async function getBackgroundImage(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json(); 

        datetime = responseJSON.datetime;
        displayHour = datetime.slice(11,13);
        //console.log(responseJSON)
        datetime


       if(displayHour <= 8 && displayHour >= 6){
           var bg = "sunrise1.png";
       }
       else if(displayHour <= 10 && displayHour >= 8){
           var bg = "sunrise2.png";
       }
       else if(displayHour <= 12 && displayHour >= 10){
           var bg = "sunrise4.png";
       }
       else if(displayHour <= 14 && displayHour >= 12){
           var bg = "sunrise5.png";
       }
       else if(displayHour <= 16 && displayHour >= 14){
           var bg = "sunset7.png";
       }
       else if(displayHour <= 18 && displayHour >= 16){
           var bg = "sunset10.png";
       }
       else if(displayHour <= 20 && displayHour >= 18){
           var bg = "sunset11.png";
       }
       else {
           var bg = "sunset12.png";
       }
       backgroundimage = loadImage(bg);
       //console.log(displayHour); 
    }
