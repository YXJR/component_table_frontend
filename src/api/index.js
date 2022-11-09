import HttpRequest from "@/util/axios.js"
export const tableApi = {
  getData: () => HttpRequest.get("/api/tableData"),
  add: (data) => HttpRequest.post("/api/tableData", data),
  edit: (data) => HttpRequest.put("/api/tableData", data),
  del: (data) => HttpRequest.delete("/api/tableData", data),
}
