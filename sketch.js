//pick your poison that will give supernatural abilities
let poison = [{
  name:"Dragon Blood", 
  color: "blood red",
  power: "Fire Manipulation"
}, {
  name:"Unicorn Horn", 
  color: "rose pink",
  power: "Color Manipulation"
}, {
  name:"Angel Feather", 
  color: "cloud white",
  power: "Light Manipulation"
}, {
  name:"Demon Scar", 
  color: "sun yellow",
  power: "Necromancy"
}, {
  name:"Fairy Magic", 
  color:"sky blue",
  power: "Nature Manipulation"
}, {
  name:"Rainbow Gold", 
  color:"golden brown",
  power: "Shapeshifting"
}];

let randomIndex;
let animating = false;
let powers = [];

function preload(){
  
  for (let i = 0; i <= 15; i++){
    powers[i] = loadImage("assets/power_" + i + ".png");
    
  }
}

function setup() {
  createCanvas(500, 500);
  background(220);
  textSize(20);
  
  text("Click to Order", 190, 50);
  text("Your Poison", 198, 350);
  
  console.log(powers);
}

function draw() {
  
  if(animating == true){
   image(power[1], 0, 0);
    
  }

}

function randomizer(){
  
  animating = false
  
  if (poison[0]){
    
  background(random(320, 100));
  randomIndex=int(random(poison.length));
    text(`${poison[randomIndex].name}'s color is ${poison[randomIndex].color} 
it gives the power of ${poison[randomIndex].power}`, 75, 50)
  poison.splice(randomIndex, 1);
  } else {
    background(random(320, 100));
    text("Out Of Stock", 195, 200);
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);
  
}