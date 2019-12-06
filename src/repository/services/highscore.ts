import Repository from "../repository";

const resource = '/highscore';

export default {
    
  setHighscore(userHighscore: any) {
    return Repository.post(`${resource}/setHighscore.php`, userHighscore);
  }
}