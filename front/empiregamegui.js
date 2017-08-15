//the modals
var movefleetmodal = document.getElementById('move-fleet-modal');
var movefleetbtn = document.getElementById("move-fleet");
var movefleetspan = document.getElementsByClassName("move-fleet-close")[0];

movefleetbtn.onclick = function () {
    movefleetmodal.style.display = "block";
};

movefleetspan.onclick = function () {
    movefleetmodal.style.display = "none";
};

var buildshipmodal = document.getElementById('build-ship-modal');
var buildshipbtn = document.getElementById("build-ship");
var buildshipspan = document.getElementsByClassName("build-ship-close")[0];

buildshipbtn.onclick = function () {
    buildshipmodal.style.display = "block";
};

buildshipspan.onclick = function () {
    buildshipmodal.style.display = "none";
};

var switchfleetmodal = document.getElementById('switch-fleet-modal');
var switchfleetbtn = document.getElementById("switch-fleet");
var switchfleetspan = document.getElementsByClassName("switch-fleet-close")[0];

switchfleetbtn.onclick = function () {
    switchfleetmodal.style.display = "block";
};

switchfleetspan.onclick = function () {
    switchfleetmodal.style.display = "none";
};

var colonizemodal = document.getElementById('colonize-modal');
var colonizebtn = document.getElementById("colonize");
var colonizespan = document.getElementsByClassName("colonize-close")[0];

colonizebtn.onclick = function () {
    colonizemodal.style.display = "block";
};

colonizespan.onclick = function () {
    colonizemodal.style.display = "none";
};

var resourcesmodal = document.getElementById('resources-modal');
var resourcesbtn = document.getElementById("resources");
var resourcesspan = document.getElementsByClassName("resources-close")[0];

resourcesbtn.onclick = function () {
    resourcesmodal.style.display = "block";
};

resourcesspan.onclick = function () {
    resourcesmodal.style.display = "none";
};


//modal drop downs
function buildFleetOptions() {
    var fleetoptions = '';
    for (var i = 0; i < fleets.length; i++) {
        fleetoptions += '<option value = "' + fleets[i].id_fleet + '">' + fleets[i].name_fleet + '</option>'
    }
    document.getElementById("fleet-selector").innerHTML = fleetoptions;
}

function buildFromFleetOptions() {
    var fromfleetoptions = '';
    for (var i = 0; i < fleets.length; i++) {
        fromfleetoptions += '<option value = "' + fleets[i].id_fleet + '">' + fleets[i].name_fleet + '</option>'
    }
    document.getElementById("from-fleet-selector").innerHTML = fromfleetoptions;
}

var fromfleetoninput = document.getElementById("from-fleet-selector");

function getAvailableShips() {
    var shipoptions = '';
    var fleetselected = document.getElementById("from-fleet-selector").value;
    for (var i = 0; i < ships.length; i++) {
        if (ships[i].id_fleet == fleetselected) {
            shipoptions += '<option value="' + ships[i].id_ship + '">' + ships[i].name_ship + '</option>';
        }
    }
    document.getElementById("ship-selector").innerHTML = shipoptions;
}

fromfleetoninput.onchange = function () {
    getAvailableShips();
};

function buildToFleetOptions() {
    var tofleetoptions = '';
    for (var i = 0; i < fleets.length; i++) {
        tofleetoptions += '<option value="' + fleets[i].id_fleet + '">' + fleets[i].name_fleet + '</option>'
    }
    document.getElementById("to-fleet-selector").innerHTML = tofleetoptions;
}

function buildPlanetOptions() {
    var planetoptions = '';
    for (var i = 0; i < colonies.length; i++) {
        planetoptions += '<option value ="' + colonies[i].id_planet + '">' + colonies[i].name_planet + '</option>'
    }
    console.log(planetoptions);
    document.getElementById("build-planet-selector").innerHTML = planetoptions;
}

function buildColonizePlanetOptions() {
    var colonizeplanetoptions = '';
    for (var i = 0; i < planetscolonizable.length; i++) {
        colonizeplanetoptions += '<option value="' + planetscolonizable[i].id_planet + '">' + planetscolonizable[i].name_planet + '</option>'
    }
    document.getElementById("colonize-planet-selector").innerHTML = colonizeplanetoptions;
}

function refresh() {
    requestPlayerInfo();
    requestPlanetMap();
    requestFleetList();
    requestShipList();
    requestColoniesList();
    requestColonizableList();
}

var refreshbutton = document.getElementById("refresh");
refreshbutton.onclick = refresh;