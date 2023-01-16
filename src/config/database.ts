import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: [
        {
            emit: 'event',
            level: 'query'
        },
        {
            emit: 'stdout',
            level: 'error'
        },
        {
            emit: 'stdout',
            level: 'info'
        },
        {
            emit: 'stdout',
            level: 'warn'
        }
    ],
    errorFormat: 'pretty'
})

prisma.$on('query', (e) => {
    console.info('Query: ' + e.query)
    console.info('Duration: ' + e.duration + 'ms')
})

export { prisma }
