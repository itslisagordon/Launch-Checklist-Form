// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function(){
   let form = document.querySelector("form");

   form.addEventListener("submit", function(event){
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let launchStatus = document.getElementById("launchStatus");

      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");



      if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("All fields are required!"); 
      } else if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
         alert("Invalid Input!");
      } else {
         if (fuelLevel.value < 10000) {
            alert("Insufficient fuel level!");
            launchStatus.innerHTML += `Shuttle not ready to launch!`;
         } else if (cargoMass.value >= 10000) {
            alert("Too much cargo!");
            launchStatus.innerHTML += `Shuttle not ready to launch!`;
         }
      };

      pilotStatus += `- ${pilotName}`;


   });

});

//will use .innerHTML to change template literals
