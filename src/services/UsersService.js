import HttpClient from './utils/HttpClient';

class UsersService {
  constructor() {
    this.HttpClient = new HttpClient('http://localhost:3001');
  }

  listUsers() {
    return this.HttpClient.get(`/users`);
  }

  getUserById(id) {
    return this.HttpClient.get(`/users/${id}`);
  }

  createUser(user) {
    return this.HttpClient.post('/auth/signup', { body: user });
  }

  loginUser(user) {
    return this.HttpClient.post('/auth/signin', { body: user });
  }

  updateUser(id, user) {
    return this.HttpClient.put(`/users/${id}`, { body: user });
  }

  deleteUser(id) {
    return this.HttpClient.delete(`/users/${id}`);
  }
}

export default new UsersService();
