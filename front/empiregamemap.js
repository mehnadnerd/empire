//map rendering
var base_x = 0;
var base_y = 0;

function biomeToColour(b) {
    switch (b) {
        case 1:
            return '#00cc00';
        case 2:
            return '#007700';
        case 3:
            return '#cccc00';
        case 4:
            return '#7d4321';
        case 5:
            return '#eeeeff';
        default:
            return '#000000';
    }
}

function productionToSize(a, b, c) {
    var d = (a + b + (c / 10)) * 8 + 5
    return d > 50 ? 50 : d;
}

function drawMap() {
    for (var i = 0; i < planets.length; i++) {
        var location_scaled_x = (planets[i].loc_x - base_x) * (100 / 20);
        planets[i].location_scaled_x = location_scaled_x;
        var location_scaled_y = (planets[i].loc_y - base_y) * (100 / 12);
        planets[i].location_scaled_y = location_scaled_y;
    }
    var innermap = '';
    for (var i = 0; i < planets.length; i++) {
        //innermap += '<div id = "planet'+i+'"></div>'
        console.log('Writing planet' + i);
        var s = '<button type = "button" class = "planet" style = "position: absolute;';
        s += 'bottom: ' + planets[i].location_scaled_y + '%;';
        s += 'left: ' + planets[i].location_scaled_x + '%;';
        s += 'background-color: ' + biomeToColour(planets[i].id_biome) + '; ';
        s += 'height: ' + productionToSize(planets[i].num_metal, planets[i].num_food, planets[i].num_fuel) + '; ';
        s += 'width: ' + productionToSize(planets[i].num_metal, planets[i].num_food, planets[i].num_fuel) + '; ';
        s += '">';
        s += planets[i].name_planet;
        s += '</button>';
        console.log(s);
        innermap += s;
    }
    document.getElementById('mapbase').innerHTML = innermap;
}

//camera movement
function handleMove(e) {
    switch (e.keyCode) {
        case 37:
            base_x--;
            break;
        case 39:
            base_x++;
            break;
        case 38:
            base_y++;
            break;
        case 40:
            base_y--;
            break;


    }
    drawMap();
}

window.onkeydown = handleMove;
drawMap();