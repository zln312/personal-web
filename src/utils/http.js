/*
 * @Author: your name
 * @Date: 2021-02-03 23:05:30
 * @LastEditTime: 2021-02-05 18:39:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal\src\utils\http.js
 */

import axios from "axios";

axios.defaults.baseURL = "/api";
axios.defaults.timeout = 300 * 1000;

function get(url, param) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: param,
      })
      .then((res) => {
        if (res.data.code === 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      })
      .catch((err) => {
        reject(err);
      });
  }).catch(err=>{
    console.log(err);
  });
}

function post(url, param, headers) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, param, {
        headers: headers
          ? headers
          : {
              "Content-Type": "application/json",
            },
      })
      .then((res) => {
        if (res.data.code === 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function put(url, param) {
  return new Promise((resolve, reject) => {
    axios
      .put(url, param)
      .then((res) => {
        if (res.data.code === 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function del(url, param) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, param)
      .then((res) => {
        if (res.code === 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default {
  get,
  post,
  put,
  del,
};
