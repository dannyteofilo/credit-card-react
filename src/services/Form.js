import Http from "./HttpService";

class FormService {
  create(data = {}) {
    return Http.post(`/`, data);
  }

  test() {
    return Http.get(`/`);
  }
}

const service = new FormService();

export default service;
