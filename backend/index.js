// Author: Neelansh Gulati
const express = require('express')
const app = express()
const port = process.env.PORT || 8080;


const { Server } = require("socket.io");
const http = require("http");

const cookieParse=require('cookie-parser')
const cors = require('cors');
const userRouter=require('./routers/userRouter')
const investorRouter = require('./routers/investorRouter')
const startupRouter = require("./routers/startupRouter");
const notificationRouter = require("./routers/notificationRouter");

app.use(cors());
app.use(express.json());
app.use(cookieParse());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`Socket Connected: ${socket.id}`)

  socket.on("send_notification", (data) => {
      socket.broadcast.emit("receive_notification", data);
  });
});

app.use('/users',userRouter);
app.use('/investors', investorRouter);
app.use("/startups", startupRouter);
app.use("/notification", notificationRouter);

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
