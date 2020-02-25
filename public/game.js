

var username = "Po3eTKa";

var socket = io.connect("https://tictactoe.info/", {transports: ['websocket']});
setupSocket();


function setupSocket() {

    // This function is called whenever a new game state is received from the server
    socket.on('gameState', function (jsonGameState) {
        console.log(jsonGameState);
        js = JSON.parse(jsonGameState)

        document.getElementById("curgold").innerHTML = "Current gold is "+js["gold"]
        document.getElementById("username").innerHTML = "Your name is " + js["username"]

        document.getElementById("shovel").innerHTML = js["equipment"]["shovel"]["name"] + ", Owned - " +js["equipment"]["shovel"]["numberOwned"] + ", Cost " +js["equipment"]["shovel"]["cost"]

        document.getElementById("excavator").innerHTML = js["equipment"]["excavator"]["name"] + ", Owned - " +js["equipment"]["excavator"]["numberOwned"] + ", Cost " +js["equipment"]["excavator"]["cost"]

        document.getElementById("mine").innerHTML = js["equipment"]["mine"]["name"] + ", Owned - " +js["equipment"]["mine"]["numberOwned"] + ", Cost " +js["equipment"]["mine"]["cost"]

        // TODO: Display the game state on your GUI
        // You must display: current gold, and the name, number owned, and cost for each type of equipment

    });
}


function initializeGame() {
    socket.emit("register", username);

    // TODO: Add any initialization code you'd like to setup your GUI
    // This function is called once when the page loads

}


// Call this function whenever the user clicks your gold button
function clickGold() {
    socket.emit("clickGold");
}


// Call this function whenever the user clicks to purchase equipment
// The parameter is the id of the equipment type to purchase
function buyEquipment(equipmentID) {
    socket.emit("buy", equipmentID);
}
