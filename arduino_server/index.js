import { ReadlineParser, SerialPort } from "serialport";
import { Server } from "socket.io";

const Readline = new ReadlineParser({ delimiter: "\r\n" });
const port = new SerialPort({ path: "COM5", baudRate: 9600, parser: Readline });

port.on("open", () => {
    console.log("Port opened");
});

port.on("close", () => {
    console.log("Port closed");
});

const lineStream = port.pipe(Readline);


const io = new Server(3100, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {
    console.log("Client connected");
    
    lineStream.on("data", (data) => {
        socket.emit("port", data);
    });

    

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});