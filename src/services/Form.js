import Http from "./HttpService";

class FormService {
  create(data = {}) {
    return Http.post(`/card`, data);
  }

  test() {
    return Http.get(`/card`);
  }
}

const service = new FormService();

export default service;
