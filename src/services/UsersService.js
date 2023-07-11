import HttpClient from './utils/HttpClient';

const token = localStorage.getItem('token');

const headers = {
  Authorization: `Bearer ${token}`,
};

class UsersService {
  constructor() {
    this.HttpClient = new HttpClient('http://localhost:3001');
  }

  showUser() {
    return this.HttpClient.get(`/users/show`, { headers });
  }

  listUsers() {
    return this.HttpClient.get(`/users`, { headers });
  }

  getUserById(id) {
    return this.HttpClient.get(`/users/${id}`, { headers });
  }

  createUser(user) {
    return this.HttpClient.post('/auth/signup', { body: user, headers });
  }

  loginUser(user) {
    return this.HttpClient.post('/auth/signin', { body: user });
  }

  updateUser(id, user) {
    return this.HttpClient.put(`/users/${id}`, { body: user, headers });
  }

  deleteUser(id) {
    return this.HttpClient.delete(`/users/${id}`, { headers });
  }
}

export default new UsersService();
