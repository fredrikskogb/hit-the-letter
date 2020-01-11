import UsersRepository from "./services/users";
import HighscoreRepository from "./services/highscore";


const repositories: any = {
    users: UsersRepository,
    highscore: HighscoreRepository
}

export const RepositoryFactory = {
    get: (name: string) => repositories[name]
};