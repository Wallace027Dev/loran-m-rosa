import HttpClient from './utils/HttpClient';

const token = localStorage.getItem('token');

const headers = {
  Authorization: `Bearer ${token}`,
};

class AdvertsService {
  constructor() {
    this.HttpClient = new HttpClient('http://localhost:3001');
  }

  listAdverts(initDate = '2023-01-01', endDate = '2023-12-31') {
    return this.HttpClient.get(
      `/adverts?initDate=${initDate}/&endDate=${endDate}`,
      { headers }
    );
  }

  getAdvertById(id, initDate = '2023-01-01', endDate = '2023-12-31') {
    return this.HttpClient.get(
      `/adverts/${id}?initDate=${initDate}&endDate=${endDate}`,
      { headers }
    );
  }

  createAdvert(advert) {
    return this.HttpClient.post('/adverts', { body: advert, headers });
  }

  createReport(advertId, advert) {
    return this.HttpClient.post(`/adverts/${advertId}/report`, {
      body: advert,
      headers,
    });
  }

  deleteAdvert(id) {
    return this.HttpClient.delete(`/adverts/${id}`, { headers });
  }
}

export default new AdvertsService();
