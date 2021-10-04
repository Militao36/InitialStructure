import { BaseError } from './Base'

class NotFoundExeption extends Error {
    statusCode: number
    constructor(message: string) {
        super(message)
        this.message = message
        this.status = 404
    }
}

export { NotFoundExeption }