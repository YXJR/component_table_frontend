import axios from "axios"
class HttpRequest {
  constructor() {
    this.baseURL =
      process.env.NODE_ENV === "production" ? "/" : "http://localhost:7001"
    this.timeout = 3000
  }
  setInterceptors(instance, url) {
    instance.interceptors.request.use((config) => {
      console.log(url)
      return config
    })
    instance.interceptors.response.use((res) => {
      console.log(res.data.data)
      return Promise.resolve(res.data.data)
    })
  }
  request(options) {
    let instance = axios.create()
    let config = {
      baseURL: this.baseURL,
      timeout: options.timeout,
      ...options,
    }
    this.setInterceptors(instance, config.url)
    return instance(config, config.url)
  }
  get(url, data = {}) {
    return this.request({
      url: url,
      data: data,
      method: "get",
    })
  }
  post(url, data = {}) {
    return this.request({
      url: url,
      method: "post",
      data: data,
    })
  }
  delete(url, data = {}) {
    return this.request({
      url: url,
      method: "delete",
      data: data,
    })
  }
  put(url, data = {}) {
    return this.request({
      url: url,
      method: "put",
      data: data,
    })
  }
}

export default new HttpRequest()
