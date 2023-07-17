require('dotenv').config()
const mongoose = require('mongoose')
const express = require("express")
const http = require("http")
const app = express()
const server = http.createServer(app)
const io = require("socket.io")(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: [ "GET", "POST" ]
	}
})

const submissionRoutes = require('./routes/submissions')
const jobRoutes = require('./routes/jobs')


io.on("connection", (socket) => {
	socket.emit("me", socket.id)

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	})

	socket.on("callUser", (data) => {
		io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
	})

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	})
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        server.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port',process.env.PORT)
        })
    })
    .catch((error)=> {
        console.log(error)
})

//middleware
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})


app.use('/api/submissions', submissionRoutes)
app.use('/api/jobs', jobRoutes)
