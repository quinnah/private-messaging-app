import { io } from "socket.io-client";

const URL = "http://localhost:3000";
const socket = io(URL, { autoConnect: false }); // Initialize client

socket.onAny((event, ...args) => {
  console.log(event, args);
}); // catch-all listener, triggered for any events

export default socket;
