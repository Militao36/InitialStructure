import { v4 } from 'uuid'

class UserEntity {
    public uuid: string
    public username: string
    public password: string
    public email: string

    constructor (data: Partial<UserEntity>, uuid = v4()) {
        this.uuid = uuid
        this.username = data.username
        this.password = data.password
        this.email = data.email
    }
}

export { UserEntity }