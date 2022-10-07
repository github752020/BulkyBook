var cloakSpan = document.getElementById("cloakCounter");
var stoneSpan = document.getElementById("stoneCounter");
var wandSpan = document.getElementById("wandCounter");

//create connection
var connectionDeathlyHallows = new signalR.HubConnectionBuilder()
    .configureLogging (signalR.LogLevel.Information)
    .withUrl("/hubs/deathlyHallows", signalR.HttpTransportType.WebSockets).build();

//connect to hub method aka receive notifications from hub
connectionDeathlyHallows.on("updateDeathlyHallowsCount", (cloak, stone, wand) => {
    
    cloakSpan.innerText = cloak.toString();
    stoneSpan.innerText = stone.toString();
    wandSpan.innerText = wand.toString();
})

//start connection and get counts on page load
function fulfilled() {
    console.log("Connection to Deathly Hallows Hub successful.")
    connectionDeathlyHallows.invoke("GetRaceStatus").then((raceCounter) => {
        cloakSpan.innerText = raceCounter.cloak.toString();
        stoneSpan.innerText = raceCounter.stone.toString();
        wandSpan.innerText = raceCounter.wand.toString();
    });
}

function rejected() {
    console.log("Connection to Deathly Hallows Hub unsuccessful.")
}

connectionDeathlyHallows.start().then(fulfilled, rejected);