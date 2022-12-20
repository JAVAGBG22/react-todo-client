import axios from "axios";

const API_URL_TEST = "http://localhost:8080/api";

class HelloWorldService {
  getHelloWorld() {
    return axios.get(`${API_URL_TEST}/todo`);
  }
}

export default new HelloWorldService();
