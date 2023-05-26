import HttpClient from './utils/HttpClient';

class UsersService {
  constructor() {
    this.HttpClient = new HttpClient('http://localhost:3001');
  }

  async listUsers(orderBy) {
    return this.HttpClient.get(`/users/86c9c6b9-b1ef-48f8-bbe7-66170ad8f9dd?orderBy=${orderBy}`);
  }

  async createUser(user) {
    return this.HttpClient.post('/users', user);
  }
};

export default new UsersService();
