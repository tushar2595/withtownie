import axios from "axios";
import { dispatchAction } from "../Redux/Store/index";
import {
  fetchStateData
} from "../Redux/Action/index";

class APIManager {
  constructor() {

    this.axiosInstance = axios.create({
      baseURL: "https://heroku-linked-1.herokuapp.com/",
      timeout: 12000,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    });
  }

  fetchTable = () => {
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .get("api")
        .then((response) => {
          dispatchAction(fetchStateData(response.data));
          resolve(response);
          console.log(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

export default new APIManager();
