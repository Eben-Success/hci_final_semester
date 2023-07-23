import axios from "axios"

// process.env.NEXT_PUBLIC_BACKEND_URL

const BASE_URL = "http://0.0.0.0:1337/api/"

console.log("n=====================================================")
console.log(process.env.NEXT_PUBLIC_BACKEND_URL)

export default axios.create({
  baseURL: BASE_URL,
})

export const authJsonHeader = (token: string, file?: boolean) => {
  const contentType = file ? "multipart/form-data" : "Application/json"
  return {
    "Content-Type": contentType,
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  }
}
