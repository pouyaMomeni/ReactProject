import axios from "axios";

export const getAxiosBase = () => {
  return axios.create({
    baseURL: "https://sit-hamayeh-dev.saminray.com/hamayeh/",
    // local api
    // baseURL: "http://localhost:8000/hamayeh"
  });
};


// http://192.168.20.14:8000/hamayeh/
// https://sit-hamayeh-dev.saminray.com/hamayeh/
