import Repository from "../initialize";

const resource = '/highscore';

export default {
    
  setHighscore(userHighscore: any) {
    return Repository.post(`${resource}/setHighscore.php`, userHighscore);
  },

  getAllHighscores() {
    return Repository.get(`${resource}/getAllHighscores.php`);
  }
}