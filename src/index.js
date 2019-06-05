const { server, port } = require('./server')
const db = require('./lib/db')

db.connect()
  .then(() => {
    console.log('mongoose connected')
    server.listen(port, () => {
      console.log(`App esperando en puerto ${port}!`)
    })
  })
  .catch((error) => {
    console.error(error)
  })
