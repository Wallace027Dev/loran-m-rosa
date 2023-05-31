import HttpClient from './utils/HttpClient';

class UsersService {
  constructor() {
    this.HttpClient = new HttpClient('http://localhost:3001');
  };

  listUsers(orderBy = 'asc') {
    return this.HttpClient.get(`/users?orderBy=${orderBy}`);
  };

  getUserById(id) {
    return this.HttpClient.get(`/users/${id}`);
  };

  createUser(user) {
    return this.HttpClient.post('/users', { body: user });
  };

  updateUser(id, user) {
    return this.HttpClient.put(`/users/${id}`, { body: user });
  };

  deleteUser(id) {
    return this.HttpClient.delete(`/users/${id}`);
  }
};

export default new UsersService();
