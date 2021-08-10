import axios from "axios";

class Http {
  constructor() {
    this.axios = axios.create();
  }

  request(config) {
    return this.axios.request(config);
  }

  get(url, config = {}) {
    return this.axios.get(url, this.getConfig(config));
  }

  post(url, data = {}, config = {}) {
    let aux = this.getConfig(config);
    return this.axios.post(url, data, aux);
  }

  getConfig(config) {
    config = config ? { ...config } : {};

    config.baseURL =
      process.env.REACT_APP_API_URL || "http://localhost:3000/api";

    return config;
  }
}

const http = new Http();

export default http;
