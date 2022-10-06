//create connection
var connectionUserCount = new signalR.HubConnectionBuilder().withUrl("/hubs/userCount").build();

//connect to hub method aka receive notifications from hub
connectionUserCount.on("updateTotalViews", (value) => {
    var newCountSpan = document.getElementById("totalViewsCounter");
    newCountSpan.innerText = value.toString();
})

connectionUserCount.on("updateTotalUsers", (value) => {
    var newCountSpan = document.getElementById("totalUsersCounter");
    newCountSpan.innerText = value.toString();
})

//invoke hub method aka send notification to hub
function newWindowLoadedOnClient() {
    connectionUserCount.send("NewWindowLoaded");
}

//start connection
function fulfilled() {
    console.log("Connection to User Hub successful.")
    newWindowLoadedOnClient();
}

function rejected() {
    console.log("Connection to User Hub unsuccessful.")
}

connectionUserCount.start().then(fulfilled, rejected);