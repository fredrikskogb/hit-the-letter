import UsersRepository from "./services/users";

const repositories: any = {
    users: UsersRepository
}

export const RepositoryFactory = {
    get: (name: string) => repositories[name]
};