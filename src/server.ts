import fastify from 'fastify'
import knex from 'knex'

const app = fastify()

app.get('/hello', async () => {
  return 'tables'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
