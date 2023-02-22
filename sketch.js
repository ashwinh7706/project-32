const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    
    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
    }else if(hour==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time : "+ hour%12 + " AM", 50,100);
    }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    async function getTimeData() {
        const response = await fetch("http://worldtimeapi.org/api/ip");
        const data = await response.json();
        return data;
      }
      
 
    //change the data in JSON format and store it in variable responseJSON
    async function getBackgroundImage() {
        const response = await fetch("https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&formatted=0");
        const data = await response.json();
        const responseJSON = JSON.stringify(data);
        return responseJSON;
      }
      

    
    //fetch datetime from responseJSON
    async function getBackgroundImage() {
        const response = await fetch("https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&formatted=0");
        const data = await response.json();
        const responseJSON = JSON.stringify(data);
        const datetime = data.results.sunrise;
        return datetime;
      }
      
    

    // slice the datetime to extract hour
    async function getBackgroundImage() {
        const response = await fetch("https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&formatted=0");
        const data = await response.json();
        const responseJSON = JSON.stringify(data);
        const datetime = data.results.sunrise;
        const hour = datetime.slice(11, 13);
        return hour;
      }
      

    
    if(hour>=0 && hour<18 ){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png"
    }
    
    backgroundImg = loadImage(bg);
}
