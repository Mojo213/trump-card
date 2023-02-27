const bugatti = {
    imageURL: "https://www.bugatti.com/fileadmin/_processed_/sei/p80/se-image-f238e3c811a44341b97482c757153bfe.jpg",
    topSpeed: "Top Speed: 267MPH",
    speed: "267MPH",
    engineT: "Engine Size: 8.0litres",
    engine: "8.0litres",
    coolF: "Cool Factor: 46",
    cool:  "46",
    colorT: "Color: Black ",
    color: "black"

 }

 document.querySelector(".car #image").src =bugatti.imageURL
 document.querySelector(".car #title-speed").innerHTML =bugatti.topSpeed
//  document.querySelector(".car #speed").innerHTML =bugatti.speed
 document.querySelector(".car #title-engine").innerHTML =bugatti.engineT
//  document.querySelector(".car #engine").innerHTML =bugatti.engine
 document.querySelector(".car #title-cool-factor ").innerHTML =bugatti.coolF
//  document.querySelector(".car #cool-factor").innerHTML =bugatti.cool
 document.querySelector(".car #title-color").innerHTML =bugatti.colorT
//  document.querySelector(".car #color").innerHTML =bugatti.color
