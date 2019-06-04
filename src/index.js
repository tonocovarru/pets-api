const { server, port } = require('./server')

server.listen(port, () => {
  console.log(`App esperando en puerto ${port}!`)
})
