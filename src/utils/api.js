import axios from "axios"

const API = axios.create({
  baseURL: process.env.API_BASE,
  headers: {
    "content-type": "application/json",
  },
})

export default API