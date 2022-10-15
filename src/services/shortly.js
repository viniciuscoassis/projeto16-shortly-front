import axios from "axios";

const baseUrl = "https://shortlyapi-viniciuscoassis.herokuapp.com";

function postSignUp(body) {
  const promisse = axios.post(`${baseUrl}/signup`, body);
  return promisse;
}

function postSignIn(body) {
  const promisse = axios.post(`${baseUrl}/signin`, body);
  return promisse;
}

function getRanking() {
  const promisse = axios.get(`${baseUrl}/rankings`);
  return promisse;
}

function getUrlById(id) {
  const promisse = axios.get(`${baseUrl}/urls/${id}`);
  return promisse;
}

function getRedirectByShortUrl(shortUrl) {
  const promisse = axios.get(`${baseUrl}/urls/open/${shortUrl}`);
  return promisse;
}

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("shortly")).token;
  const config = { headers: { Authorization: `Bearer ${auth}` } };
  return config;
}

function postCreateShortUrl(body) {
  const headers = createHeaders();
  const promisse = axios.post(`${baseUrl}/urls/shorten`, body, headers);
  return promisse;
}

function deleteUrl(body, id) {
  const headers = createHeaders();
  const promisse = axios.delete(`${baseUrl}/urls/${id}`, body, headers);
  return promisse;
}

function getUser() {
  const headers = createHeaders();
  const promisse = axios.get(`${baseUrl}/users/me`, headers);
  return promisse;
}

export {
  postSignUp,
  postSignIn,
  getRanking,
  getUrlById,
  getRedirectByShortUrl,
  postCreateShortUrl,
  deleteUrl,
  getUser,
};
