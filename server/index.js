const {
  ThaiCardReader,
  EVENTS,
  MODE,
} = require("@privageapp/thai-national-id-reader");

const PORT = 3000;
const { Server } = require("socket.io");
const io = new Server(PORT, {
  cors: {
    origin: ["http://localhost:5173", "http://localhost:4173"],
  },
});

const reader = new ThaiCardReader();
reader.readMode = MODE.PERSONAL_PHOTO;
reader.autoRecreate = true;
reader.startListener();

const readerIdCard = (socket) => {
  reader.on(EVENTS.DEVICE_CONNECTED, () => {
    console.log("Device connected🚀");
    socket.emit("device-connected", true);
  });

  reader.on(EVENTS.DEVICE_DISCONNECTED, () => {
    console.log("Device Disconnect outside socket💔\n");

    socket.emit("device-connected", false);
  });

  reader.on(EVENTS.CARD_INSERTED, () => {
    console.log("Card Inserted");
    socket.emit("card-inserted");
  });

  reader.on(EVENTS.CARD_REMOVED, () => {
    console.log("Card Removed");
    socket.emit("card-removed");
  });

  reader.on(EVENTS.READING_START, () => {
    console.log("Reading start...");
    socket.emit("card-reading-start");
  });

  reader.on(EVENTS.READING_COMPLETE, (data) => {
    console.log(data);
    socket.emit("thai-card-data", data);
  });

  reader.on(EVENTS.READING_FAIL, () => {
    console.log("Reading Fail");
    socket.emit("card-reading-fail");
  });
};

io.on("connection", (socket) => {
  console.log("Socket IO connected🎉");

  // socket.emit("device-connected", true);

  readerIdCard(socket);
});
