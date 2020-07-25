// Write your JavaScript code here!

//w/ document.getElementById("MyElement").classList.remove('MyClass');

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
      let faultyItems = document.getElementById("faultyItems");


      if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("All fields are required!"); 
      } else if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
         alert("Invalid Input!");
      } else {
         pilotStatus.innerHTML = `Pilot Ready - ${pilotName.value}`;
         copilotStatus.innerHTML = `Co-pilot Ready - ${copilotName.value}`;

         if (fuelLevel.value < 10000) {
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "red"
            fuelStatus.innerHTML = `Not enough fuel for journey.`
            faultyItems.style.visibility = "visible";
         } else if (cargoMass.value > 10000) {
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "red"
            cargoStatus.innerHTML = `Too much mass for shuttle to take off.`;
            faultyItems.style.visibility = "visible";
         } else {
            launchStatus.style.color = "green";
            launchStatus.innerHTML = "Shuttle is ready for launch";
            // pilotStatus.innerHTML = `Pilot Ready - ${pilotName.value}`;
            // copilotStatus.innerHTML = `Co-pilot Ready - ${copilotName.value}`;
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            faultyItems.style.visibility = "visible";
         }
      }
   });

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
         response.json().then(function(json) {
            
         });

         // TODO: do something after fetching and receiving a response
      });

});

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