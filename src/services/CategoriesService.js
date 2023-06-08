import HttpClient from './utils/HttpClient';

class CategoriesService {
  constructor() {
    this.HttpClient = new HttpClient('http://localhost:3001');
  };

  listCategories(orderBy = 'asc') {
    return this.HttpClient.get(`/categories?orderBy=${orderBy}`);
  };

  getUserById(id) {
    return this.HttpClient.get(`/categories/${id}`);
  };

  createCategory(category) {
    return this.HttpClient.post('/categories', { body: category });
  };

  updateCategory(id, category) {
    return this.HttpClient.put(`/categories/${id}`, { body: category });
  };

  deleteCategory(id) {
    return this.HttpClient.delete(`/categories/${id}`);
  }
};

export default new CategoriesService();
