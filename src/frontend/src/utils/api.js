import axios from 'axios'

class API {
  constructor () {
    this.axi = axios.create({
      baseURL: 'https://localhost:3113',
      timeout: 25000,
      json: true
    })
  }

  setToken = token => this.token = token

  httpGet = (uri, params) => {
    return this.axi.get(uri, {
      params,
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    })
  }

  httpPost = (uri, data) => this.axi.post(uri, data, {
    headers: {
      Authorization: 'Bearer ' + this.token,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Credentials": "true"
    }
  })
}

const api = new API()

export const httpGet = api.httpGet
export const setToken = api.setToken
export const httpPost = api.httpPost
