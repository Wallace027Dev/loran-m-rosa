import HttpClient from './utils/HttpClient';

class UsersService {
  constructor() {
    this.HttpClient = new HttpClient('http://localhost:3001');
  }

  async listUsers(orderBy = 'asc') {
    return this.HttpClient.get(`/users?orderBy=${orderBy}`);
  }

  async createUser(user) {
    return this.HttpClient.post('/users', user);
  }
};

export default new UsersService();
