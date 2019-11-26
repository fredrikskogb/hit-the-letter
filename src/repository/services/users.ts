import Repository from "../repository";

const resource = '/user';

export default {
    loginCustomer(email: string, password: string): any {
        return Repository.get(`${resource}/login.php?email=${email}&password=${password}`);
    },

    setCustomer(email: string, password: string) {
      return Repository.post(`${resource}/register.php?email=${email}&password=${password}`);
  }
}