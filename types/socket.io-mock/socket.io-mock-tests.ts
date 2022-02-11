import SocketMock = require("socket.io-mock");

const socket = new SocketMock()

// Client joins a room
socket.join("room1");

// Receive a room event
socket.on("event1", ([data]) => {
    console.log("Event 1 Data", data);
});

// Receive a general event, with possible acknowledgement
socket.on("event2", ([data1, data2, ack]) => {
    console.log(data1, data2);

    if (ack) {
        ack({
            message: "Acknowledgement!"
        })
    }
})

// Server goes to Room 1 and emits an event
socket.broadcast.to("room1").emit("event1", {
    message: "This is an announcement for Room 1!",
});

// Server emits a general event for 'event2' listeners, with acknowledgement included
socket.emitEvent("event2", [{ a: "Data 1" }, { b: "Data 2" }], ack => {
    console.log("ack", ack);
})
