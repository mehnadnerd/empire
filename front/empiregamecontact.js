//contacting backend - reads
function handleRequestPlayerInfo() {
    var t = JSON.parse(this.responseText)[0];
    console.log(t);

    var foodvaluecell = document.getElementById("food-value");
    var fuelvaluecell = document.getElementById("fuel-value");
    var metalvaluecell = document.getElementById("metal-value");

    var foodproductioncell = document.getElementById("food-prod");
    var fuelproductioncell = document.getElementById("fuel-prod");
    var metalproductioncell = document.getElementById("metal-prod");

    foodvaluecell.innerHTML = '<p>' + t.num_food + '</p>';
    fuelvaluecell.innerHTML = '<p>' + t.num_fuel + '</p>';
    metalvaluecell.innerHTML = '<p>' + t.num_metal + '</p>';

    foodproductioncell.innerHTML = '<p>' + t.prod_food + '</p>';
    fuelproductioncell.innerHTML = '<p>' + t.prod_fuel + '</p>';
    metalproductioncell.innerHTML = '<p>' + t.prod_metal + '</p>';
}

function requestPlayerInfo() {
    var request = new XMLHttpRequest();
    request.addEventListener("load", handleRequestPlayerInfo);
    request.open("GET", "http://ec2-34-213-177-23.us-west-2.compute.amazonaws.com:8080/player/stat?player=" + playernumber);
    request.send();
}

function handleRequestPlanetMap() {
    var t = JSON.parse(this.responseText);
    console.log(t);
    planets = t;
    drawMap();
}

function requestPlanetMap() {
    var request = new XMLHttpRequest();
    request.addEventListener("load", handleRequestPlanetMap);
    request.open("GET", "http://ec2-34-213-177-23.us-west-2.compute.amazonaws.com:8080/planets/map?player=" + playernumber);
    request.send();
}

function handleRequestFleetList() {
    var t = JSON.parse(this.responseText);
    console.log(t);
    fleets = t;
    buildFleetOptions();
    buildToFleetOptions();
    buildFromFleetOptions();
    getAvailableShips();
}

function requestFleetList() {
    var request = new XMLHttpRequest();
    request.addEventListener("load", handleRequestFleetList);
    request.open("GET", "http://ec2-34-213-177-23.us-west-2.compute.amazonaws.com:8080/fleet/own?player=" + playernumber);
    request.send();
}

function handleRequestShipList() {
    var t = JSON.parse(this.responseText);
    console.log(t);
    ships = t;
}

function requestShipList() {
    var request = new XMLHttpRequest();
    request.addEventListener("load", handleRequestShipList);
    request.open("GET", "http://ec2-34-213-177-23.us-west-2.compute.amazonaws.com:8080/ship/own?player=" + playernumber);
    request.send();
}

function handleRequestColoniesList() {
    var t = JSON.parse(this.responseText);
    console.log(t);
    colonies = t;
    buildPlanetOptions();
}

function requestColoniesList() {
    var request = new XMLHttpRequest();
    request.addEventListener("load", handleRequestColoniesList);
    request.open("GET", "http://ec2-34-213-177-23.us-west-2.compute.amazonaws.com:8080/planets/owned?player=" + playernumber);
    request.send();
}

function handleRequestColonizableList() {
    var t = JSON.parse(this.responseText);
    console.log(t);
    planetscolonizable = t;
    buildColonizePlanetOptions();
}

function requestColonizableList() {
    var request = new XMLHttpRequest();
    request.addEventListener("load", handleRequestColonizableList);
    request.open("GET", "http://ec2-34-213-177-23.us-west-2.compute.amazonaws.com:8080/planets/colonisable?player=" + playernumber);
    request.send();
}

//write things
function moveFleet() {
    var fleet = document.getElementById("fleet-selector").value;
    var x = document.getElementById("move-fleet-x-destination").value;
    var y = document.getElementById("move-fleet-y-destination").value;
    document.getElementById("fleet-moved-to").innerHTML = x;
    document.getElementById("fleet-moved-to-y").innerHTML = y;
    document.getElementById("which-fleet").innerHTML = fleet;
    var request = new XMLHttpRequest();
    request.addEventListener("load", moveFleetCallback);
    request.open("POST", "http://ec2-34-213-177-23.us-west-2.compute.amazonaws.com:8080/fleet/move?player=" +
        playernumber + "&fleet=" + fleet + "&x=" + x + "&y=" + y);
    request.send();
}

function moveFleetCallback() {
    var t = this.responseText;
    console.log(t);
    refresh();
}

function buildShip() {
    var planet = document.getElementById("build-planet-selector").value;
    var food = document.getElementById("build-ship-food").value;
    var metal = document.getElementById("build-ship-metal").value;
    document.getElementById("build-ship-food-used").innerHTML = food;
    document.getElementById("build-ship-metal-used").innerHTML = metal;
    document.getElementById("which-planet").innerHTML = planet;
    var request = new XMLHttpRequest();
    request.addEventListener("load", buildShipCallback);
    request.open("POST", "http://ec2-34-213-177-23.us-west-2.compute.amazonaws.com:8080/ship/build?player=" +
        playernumber + "&planet=" + planet + "&food=" + food + "&metal=" + metal);
    request.send();
}

function buildShipCallback() {
    var t = this.responseText;
    console.log(t);
    refresh();
}

function colonizePlanet() {
    var planet = document.getElementById("colonize-planet-selector").value;
    document.getElementById("colonize-which-planet").innerHTML = planet;
    var request = new XMLHttpRequest();
    request.addEventListener("load", colonizePlanetCallback);
    request.open("POST", "http://ec2-34-213-177-23.us-west-2.compute.amazonaws.com:8080/planets/colonise?player=" +
        playernumber + "&planet=" + planet);
    request.send();
}

function colonizePlanetCallback() {
    var t = this.responseText;
    console.log(t);
    refresh();
}

function switchFleet() {
    var fromFleet = document.getElementById("from-fleet-selector").value;
    var ship = document.getElementById("ship-selector").value;
    var toFleet = document.getElementById("to-fleet-selector").value;
    var request = new XMLHttpRequest();
    request.addEventListener("load", switchFleetCallback);
    request.open("POST", "http://ec2-34-213-177-23.us-west-2.compute.amazonaws.com:8080/ship/switch?player=" +
        playernumber + "&oldfleet=" + fromFleet + "&ship=" + ship + "&newfleet=" + toFleet);
    request.send();
}

function switchFleetCallback() {
    var t = this.responseText;
    console.log(t);
    refresh();
}