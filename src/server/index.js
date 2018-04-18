const express = require('express')
const webpack = require('webpack')

const app = express()
const port = 3000

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

const server = app.listen(port, function () {
  console.log(`listening on port ${port}`)
})

// Initialize socket
var io = require('socket.io')(server)

io.on('connection', function (socket) {})
