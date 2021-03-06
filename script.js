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
         alert("Make sure to enter valid information for each field!");
      } else {
         pilotStatus.innerHTML = `Pilot Ready - ${pilotName.value}`;
         copilotStatus.innerHTML = `Co-pilot Ready - ${copilotName.value}`;

         if (fuelLevel.value < 10000) {
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "red";
            fuelStatus.innerHTML = `Not enough fuel for journey.`;
            faultyItems.style.visibility = "visible";
         } else if (cargoMass.value > 10000) {
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "red";
            cargoStatus.innerHTML = `Too much mass for shuttle to take off.`;
            faultyItems.style.visibility = "visible";
         } else {
            launchStatus.style.color = "green";
            launchStatus.innerHTML = "Shuttle is ready for launch";
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            // faultyItems.style.visibility = "hidden";
         }
      }
   });
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json) {
         const missionTarget = document.getElementById("missionTarget");

         const randomDestination = json[Math.floor(Math.random() * json.length)];

         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${randomDestination.name}</li>
            <li>Diameter: ${randomDestination.diameter}</li>
            <li>Star: ${randomDestination.star}</li>
            <li>Distance from Earth: ${randomDestination.distance}</li>
            <li>Number of Moons: ${randomDestination.moons}</li>
         </ol>
         <img src="${randomDestination.image}">
         `;

         //The following is my previous work to set a chosen planet as the destination before completing the bonus mission:

         // const jupiter = json[5];

         // missionTarget.innerHTML = `
         // <h2>Mission Destination</h2>
         // <ol>
         //    <li>Name: ${jupiter.name}</li>
         //    <li>Diameter: ${jupiter.diameter}</li>
         //    <li>Star: ${jupiter.star}</li>
         //    <li>Distance from Earth: ${jupiter.distance}</li>
         //    <li>Number of Moons: ${jupiter.moons}</li>
         // </ol>
         // <img src="${jupiter.image}">
         // `;
      });
   });

});