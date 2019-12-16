import Repository from "../initialize";

const resource = '/user';

export default {
    loginUser(email: string, password: string): any {
        return Repository.get(`${resource}/login.php?email=${email}&password=${password}`);
    },

    setUser(user: any) {
      return Repository.post(`${resource}/register.php/`, user);
  }
  
}