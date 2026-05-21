io.on("connection", (socket) => {

  console.log("User connected:", socket.id)

  socket.on("jobUpdated", (data) => {
    io.emit("jobRefresh", data)
  })

})