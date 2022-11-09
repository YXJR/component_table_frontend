import HttpRequest from "@/util/axios.js"
export const fruitApi = {
  getData: () => HttpRequest.get("/api/fruit"),
  add: (data) => HttpRequest.post("/api/fruit", data),
  edit: (data) => HttpRequest.put("/api/fruit", data),
  del: (data) => HttpRequest.delete("/api/fruit", data),
}
