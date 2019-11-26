export interface IUser {
    id: number,
    email: String,
    password: String
}

export interface IUserService {
    getAll(): any,
    loginCustomer(email: string, password: string): any,
    setCustomer(email: string, password: string): any
}