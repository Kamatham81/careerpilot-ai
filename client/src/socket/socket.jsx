import { io } from "socket.io-client"

const socket = io("https://careerpilot-ai-cwrs.onrender.com")

useEffect(() => {

  socket.on("jobRefresh", () => {
    fetchJobs()
  })

}, [])