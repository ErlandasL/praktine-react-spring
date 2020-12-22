import axios from "axios";

const GREETING_API_BASE_URL = "http://localhost:8080/api/v1/greetings";

class GreetingService {
  getGreetings() {
    return axios.get(GREETING_API_BASE_URL);
  }

  createGreeting(greeting) {
    return axios.post(GREETING_API_BASE_URL, greeting);
  }

  getgreetingById(greetingId) {
    return axios.get(GREETING_API_BASE_URL + "/" + greetingId);
  }

  updateGreeting(greeting, greetingId) {
    return axios.put(GREETING_API_BASE_URL + "/" + greetingId, greeting);
  }

  deleteGreeting(greetingId) {
    return axios.delete(GREETING_API_BASE_URL + "/" + greetingId);
  }
}

export default new GreetingService();
