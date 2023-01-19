import Fastify from 'fastify'
import cors from '@fastify/cors'

import {PrismaClient}  from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient();

app.register(cors); // It's possible to define allowed origins

app.get('/', async () => {
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Drink'
            }       
        }
    });

    return habits 
})

app.listen({
    port: 3333
}).then(() => console.log("Server running..."))