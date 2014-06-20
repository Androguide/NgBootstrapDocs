'use strict'

express = require("express")
app = express()
bodyParser = require("body-parser")
errorHandler = require("errorhandler")
methodOverride = require("method-override")

port = parseInt(process.env.PORT, 10) or 4567

app.use express.static(__dirname + "/app")
app.use errorHandler(
    dumpExceptions: true
    showStack: true
)

app.listen port
console.log "Server listening on port: " + port