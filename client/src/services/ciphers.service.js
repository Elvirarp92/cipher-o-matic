import axios from 'axios'

export default class services {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    })
  }

  caesar = ({text, factor, direction}) => this.service.post(`/caesar/${direction}`, {text, factor})
}
