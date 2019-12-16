export interface IUser {
    id: number,
    email: String,
    username: String,
    password: String
}

export interface IUserService {
    getAll(): any,
    loginUser(email: string, password: string): any,
    setUser(email: string, password: string): any
}

export interface ILetter {
    active: boolean,
    bombed: boolean
}
