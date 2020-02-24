

var username = "Po3eTKa";

var socket = io.connect("https://tictactoe.info/", {transports: ['websocket']});
setupSocket();


function setupSocket() {

    // This function is called whenever a new game state is received from the server
    socket.on('gameState', function (jsonGameState) {
        console.log(jsonGameState);

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
