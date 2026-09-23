
const distances = {
    "Gate-Library": 300,
    "Gate-Canteen": 450,
    "Gate-Admin": 250,
    "Gate-Lab": 500,
    "Gate-Ground": 350,

    "Library-Canteen": 200,
    "Library-Admin": 180,
    "Library-Lab": 250,
    "Library-Ground": 220,

    "Canteen-Admin": 300,
    "Canteen-Lab": 150,
    "Canteen-Ground": 400,

    "Admin-Lab": 200,
    "Admin-Ground": 300,

    "Lab-Ground": 250
};

function getDistance(start, destination) {

    if (start === destination) {
        return 0;
    }

    let key1 = start + "-" + destination;
    let key2 = destination + "-" + start;

    if (distances[key1]) {
        return distances[key1];
    }

    if (distances[key2]) {
        return distances[key2];
    }

    return 0;
}

function findRoute() {

    let start = document.getElementById("start").value;
    let destination = document.getElementById("destination").value;

    let result = document.getElementById("result");

    if (start === destination) {
        result.innerHTML = "You are already at the destination.";
        return;
    }

    let distance = getDistance(start, destination);

    let time = Math.ceil(distance / 80);

    result.innerHTML =
        "<b>Route Found!</b><br><br>" +
        "From: " + start + "<br>" +
        "To: " + destination + "<br>" +
        "Distance: " + distance + " meters<br>" +
        "Walking Time: " + time + " minutes";
}
