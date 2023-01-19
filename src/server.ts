import Fastify from 'fastify'

const app = Fastify()

app.get('/', () => {
    return "Root route Fastify App  !! !!"
})

app.listen({
    port: 3333
})