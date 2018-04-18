const express = require('express')
const webpack = require('webpack')
const path = require('path')
const uuid = require('uuid/v4')

const app = express()
const port = 3000
const connections = []

if (process.env.NODE_ENV === 'development') {
  console.log('Server is running on development mode')

  const config = require('./webpack.dev.config')
  const compiler = webpack(config)
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    logLevel: 'warn'
  }))
  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log
  }))
  app.use(express.static(__dirname))
} else {
  app.use(express.static(path.join(__dirname, process.env.DIST_PATH)))
}

const server = app.listen(port, function () {
  console.log(`listening on port ${port}`)
})

// Initialize socket
var io = require('socket.io')(server)

io.on('connection', function (socket) {
  // User connected
  connections.push(socket)
  const userId = uuid()

  socket.emit('user:connect', { userId })
})
