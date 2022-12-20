import axios from "axios";

const API_URL_TEST = "http://localhost:8080/api";

class TodoService {
  getTodos() {
    return axios.get(`${API_URL_TEST}/todos`);
  }
}

export default new TodoService();
