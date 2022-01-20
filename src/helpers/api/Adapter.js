import axios from "axios";
import { BaseURL } from "assets/constants/ApiURLS";
const qs = require("qs");

export const Adapter = axios.create({
  baseURL: BaseURL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: function (params) {
    return qs.stringify(params, {
      encode: false,
    });
  },
});
