import HttpClient from './utils/HttpClient';

const token = localStorage.getItem('token');

const headers = {
  Authorization: `Bearer ${token}`,
};

class AdvertsService {
  constructor() {
    this.HttpClient = new HttpClient('http://localhost:3001');
  }

  listAdverts() {
    return this.HttpClient.get(`/adverts`, { headers });
  }

  getAdvertById(id, initDate, endDate) {
    return this.HttpClient.get(
      `/adverts/${id}/?initDate=${initDate}/&endDate=${endDate}`,
      { headers }
    );
  }

  createAdvert(advert) {
    return this.HttpClient.post('/adverts', { body: advert, headers });
  }

  createReport(advert, id) {
    return this.HttpClient.post(`/adverts/${id}`, { body: advert, headers });
  }

  deleteAdverts(id) {
    return this.HttpClient.delete(`/adverts/${id}`, { headers });
  }
}

export default new AdvertsService();
